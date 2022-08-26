import { Form, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import Axios from "axios";
import DropList from "../droplist/droplist.component.tsx";
import ModalDelete from "../../components/modals/modal-delete.component";
import { Link } from "react-router-dom";
import "./ajout-ss-module.styles.scss";

const AjoutSsModule = ({ id, nomFiliere, idniveau, niveau, semestre }) => {
  const [sousModules, setSousModules] = useState([]);
  const [nombreSemaines, setNombreSemaines] = useState("");
  const [nom, setNom] = useState("");
  const [prof, setProf] = useState("");

  const refreshSousModules = () => {
    Axios.post("http://localhost:3001/api/get/ss_module", { id }).then(
      (response) => {
        setSousModules(response.data);
      }
    );
  };

  useEffect(() => {
    refreshSousModules();
  }, []);

  const createSeanceOui = (id_ss_module) => {
    Axios.post("http://localhost:3001/api/insert/seance/oui", {
      prof,
      id_ss_module,
      nomFiliere,
      niveau,
      semestre,
    });
  };
  const createSousModule = () => {
    Axios.post("http://localhost:3001/api/insert/ss_module", {
      nom,
      nombreSemaines,
      prof,
      id,
    }).then((response) => {
      createSeanceOui(response.data.insertId);
      refreshSousModules();
    });
  };

  const deleteSousModule = (id_ss_module) => {
    Axios.post("http://localhost:3001/api/delete/ss_module", {
      id_ss_module,
      id_module: id,
    }).then(() => {
      refreshSousModules();
    });
  };
  const deleteModule = (idModule) => {
    Axios.post("http://localhost:3001/api/delete/module", { id: idModule });
  };
  const GetProfById = ({ id }) => {
    const [nom, setNom] = useState("");
    Axios.post("http://localhost:3001/api/get/profbyid", { id }).then(
      (response) => {
        setNom(response.data[0].nom);
      }
    );
    return nom;
  };

  return (
    <div className="oui-choice">
      <h1>Ajouter des Sous modules de {id}</h1>

      <div className="add-sous-module">
        <Form.Group>
          <Form.Label>Nom de sous-module</Form.Label>
          <Form.Control
            key="Nom"
            type="text"
            placeholder="Nom"
            onChange={(event) => {
              setNom(event.target.value);
            }}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Nombre de semaines</Form.Label>
          <Form.Control
            key="nmbr_semaines"
            type="text"
            placeholder="Nombre de semaines"
            onChange={(event) => {
              setNombreSemaines(event.target.value);
            }}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Prof</Form.Label>
          <DropList
            onChange={(data) => {
              setProf(data.value);
            }}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label></Form.Label>
          <Button className="button-Ui" onClick={createSousModule}>
            Ajouter
          </Button>
        </Form.Group>
      </div>

      <table className="container">
        <thead>
          <tr>
            <th>Nom</th>
            <th>Nombre de semaines</th>
            <th>Prof</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {sousModules.map((sousModule) => {
            return (
              <tr key={sousModule.id} className="elems-container">
                <td className="elem">{sousModule.nom}</td>
                <td className="elem">{sousModule.nmbr_semaines}</td>
                <td className="elem">
                  <GetProfById id={sousModule.id_prof} />
                </td>
                <td className="list-buttons">
                  <ModalDelete
                    text={sousModule.nom}
                    deleteVar={deleteSousModule}
                    value={sousModule.id}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Link
        to={`/modules/${nomFiliere}${niveau}`}
        state={{ nomFiliere, idniveau, niveau }}
      >
        <Button
          className="button-Ui"
          onClick={() => {
            if (sousModules.length === 0) deleteModule(id);
          }}
        >
          Enregistrer
        </Button>
      </Link>
    </div>
  );
};

export default AjoutSsModule;
