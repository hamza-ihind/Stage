import { useState, useEffect } from "react";
import { Button, Modal, Form } from "react-bootstrap";

import Axios from "axios";
import ModalError from "../modals/modal-error.component";
import "./ajout-seance.styles.scss";

const AjoutSeance = ({ idProf, jour, seance, tabSeances, refreshSeances }) => {

  const [show, setShow] = useState(false);
  const [error, setError] = useState({ show: false, text: "" });
  const closeError = () => setError({ show: false, text: "" });
  const [selected, setSelected] = useState("");
  const [id_seance, setId_seance] = useState();
  const [caseSeance, setCaseSeance] = useState(false);

  const GetMatiereById = ({ idModule, idSsModule }) => {
    const [nom, setNom] = useState("");
    if (idModule) {
      Axios.post("http://localhost:3001/api/get/modulebyid", {
        id_module: idModule,
      }).then((response) => {
        setNom(response.data[0].nom);
      });
    }
    if (idSsModule) {
      Axios.post("http://localhost:3001/api/get/ss_modulebyid", {
        id_ss_module: idSsModule,
      }).then((response) => {
        setNom(response.data[0].nom);
      });
    }
    return <>{nom}</>;
  };
  const getData = () => {
    Axios.post("http://localhost:3001/api/get/emploiprof/seance", {
      id_prof: idProf,
      jour,
      seance,
    }).then((res) => {
      if (res.data.length) {
        Axios.post("http://localhost:3001/api/get/seance/id", {
          id: res.data[0].id,
        }).then((res) => {
          if (res.data.length) {
            setCaseSeance(res.data[0]);
            setId_seance(res.data[0].id);
          }
        });
      } else {
        setCaseSeance(false);
        setId_seance(null);
      }
    });
  };

  const insertEmploiNiveau = () => {
    Axios.post("http://localhost:3001/api/get/seance/idniveau", {
      id: selected,
    }).then((res) => {
      const id_niveau = res.data[0].idniveau;
      Axios.post("http://localhost:3001/api/insert/emploiniveau", {
        id_niveau,
        jour,
        seance,
        value: selected,
      });
    });
  };

  const deleteEmploiNiveau = () => {
    Axios.post("http://localhost:3001/api/get/seance/idniveau", {
      id: id_seance,
    }).then((res) => {
      const id_niveau = res.data[0].idniveau;
      Axios.post("http://localhost:3001/api/delete/emploiniveau", {
        id_niveau,
        jour,
        seance,
      });
    });
  };

  const handleSelect = () => {
    if (selected != "") {
      if (caseSeance) deleteSeance();

      // test if the classe (filiere+niveau) is already reserved at this (jour+seance1/2/3/4)

      Axios.post("http://localhost:3001/api/get/seance/idniveau", {
        id: selected,
      }).then((res) => {
        const id_niveau = res.data[0].idniveau;
        Axios.post("http://localhost:3001/api/insert/is_niveau_reserved", {
          id_niveau,
          jour,
          seance,
        }).then((res) => {
          if (!res.data[0].id) {
            //
            //
            //

            insertEmploiNiveau();
            Axios.post("http://localhost:3001/api/insert/emploiprof", {
              idProf,
              jour,
              seance,
              value: selected,
            }).then((res) => {
              Axios.post("http://localhost:3001/api/select/seance/1", {
                id: selected,
              }).then((res) => {
                //after save
                getData();
                refreshSeances();
              });
            });
          } else {
            setError({
              show: true,
              text: "Ce niveau est deja reservé pour l'horaire selectionné.",
            });
          }
        });
      });
    }
  };

  const deleteSeance = () => {
    deleteEmploiNiveau();
    Axios.post("http://localhost:3001/api/delete/emploiprof", {
      idProf,
      jour,
      seance,
    }).then((res) => {
      Axios.post("http://localhost:3001/api/select/seance/0", {
        id: id_seance,
      }).then((res) => {
        //after delete
        setId_seance(null);
        setCaseSeance(false);
        refreshSeances();
      });
    });
  };

  useEffect(() => {
    getData();
  }, []);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {caseSeance && (
        <div className="case-seance">
          <div>
            <GetMatiereById
              idModule={caseSeance.id_module}
              idSsModule={caseSeance.id_ss_module}
            />
          </div>
          <div>{caseSeance.nom_filiere + " " + caseSeance.niveau}</div>
        </div>
      )}

      <button className="btn-ajout-seance button-Ui" onClick={handleShow}>
        &#9998;
      </button>

      <Modal
        key={JSON.stringify(tabSeances)}
        show={show}
        onHide={handleClose}
        centered
      >
        <div>
          <div
            onClick={handleClose}
            style={{
              width: "fit-content",
              cursor: "pointer",
              paddingRight: "15px",
              paddingTop: "10px",
              float: "right",
            }}
          >
            &#x2715;
          </div>
        </div>

        <Modal.Body className="modal-body-ajout-seance">
          <Form.Label>Choisissez une seance</Form.Label>
          <Form.Select
            id="select-t"
            aria-label="Default select example"
            onChange={(e) => {
              setSelected(e.target.value);
            }}
          >
            <option key={-1} value={""}>
              ...
            </option>
            {tabSeances.map((seance) => {
              if (!seance.is_selected)
                return (
                  <option key={seance.id} value={seance.id}>
                    {"Matiere "}
                    <GetMatiereById
                      idModule={seance.id_module}
                      idSsModule={seance.id_ss_module}
                    />
                    {" de classe "}
                    {seance.nom_filiere + " " + seance.niveau}
                  </option>
                );
            })}
          </Form.Select>

          <div className="btn-ajt-seance">
            <Button
              variant="outline-danger"
              onClick={() => {
                deleteSeance();
                handleClose();
              }}
            >
              Vider la case
            </Button>
            <Button
              onClick={() => {
                handleSelect();
                handleClose();
              }}
            >
              Sauvegarder
            </Button>
          </div>
        </Modal.Body>
      </Modal>
      <ModalError
        key={show}
        text={error.text}
        show={error.show}
        handleClose={closeError}
      />
    </>
  );
};

export default AjoutSeance;
