import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React from "react";
import Axios from "axios";
import Table from "react-bootstrap/Table";
import "./modal-modules.styles.scss";

const ModalModule = ({ id_module }) => {
  const [modalShow, setModalShow] = React.useState(false);
  const [module, setModule] = React.useState({});
  const [sousModules, setSousModules] = React.useState([]);

  const getModule = () => {
    Axios.post("http://localhost:3001/api/get/modulebyid", { id_module }).then(
      (response) => {
        setModule(response.data[0]);
        if (response.data[0].nmbr_ss_modules)
          getSousModules(response.data[0].id);
      }
    );
  };
  const getSousModules = (id) => {
    Axios.post("http://localhost:3001/api/get/ss_module", { id }).then(
      (response) => {
        setSousModules(response.data);
      }
    );
  };
  const GetProfById = ({ id }) => {
    const [nom, setNom] = React.useState("");
    Axios.post("http://localhost:3001/api/get/profbyid", { id }).then(
      (response) => {
        setNom(response.data[0].nom);
      }
    );
    return nom;
  };
  const InfoModule = () => {
    if (!module.nmbr_ss_modules)
      return (
        <div>
          {" "}
          <div>
            <span className="label">Semestre</span>
            <span>:{"  "}</span>
            <span className="content">{module.semestre}</span>
          </div>
          <div>
            <span className="label">Nombre de semaines</span>
            <span>:{"  "}</span>
            <span className="content">{module.nmbr_semaines}</span>
          </div>
          <div>
            <span className="label">Prof</span>
            <span>:{"  "}</span>
            <span className="content">
              {<GetProfById id={module.id_prof} />}
            </span>
          </div>
        </div>
      );
    else
      return (
        <div>
          <div>
            <span className="label">Semestre</span>
            <span>:{"  "}</span>
            <span className="content">{module.semestre}</span>
          </div>
          <div>
            <span className="label">Les sous-modules:</span>
            <div>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Nom</th>
                    <th>Nombre de semaines</th>
                    <th>Prof</th>
                  </tr>
                </thead>
                <tbody>
                  {sousModules.map((sousModule) => {
                    return (
                      <tr key={sousModule.id} className="elems-container">
                        <td className="elem">{sousModule.nom}</td>
                        <td className="elem">{sousModule.nmbr_semaines}</td>
                        <td className="elem">
                          {<GetProfById id={sousModule.id_prof} />}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      );
  };

  return (
    <>
      <Button
        variant="primary"
        onClick={() => {
          setModalShow(true);
          getModule();
        }}
      >
        détails
      </Button>

      <Modal
        className="modal"
        show={modalShow}
        onHide={() => setModalShow(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <p>
              Détails du module{" "}
              <span style={{ color: "#bb0a1e" }}>{module.nom}</span>
            </p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <InfoModule />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setModalShow(false)}>Fermer</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalModule;
