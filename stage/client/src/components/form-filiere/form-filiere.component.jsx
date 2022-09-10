import { useState, useEffect } from "react";
import { Link, useLocation, useParams } from "react-router-dom";

import { Button } from "react-bootstrap";

import Axios from "axios";
import "./form-filiere.styles.scss";

import ModalDelete from "../modals/modal-delete.component";
import ModalModule from "../modals/modal-module/modal-module.component";

const FormFiliere = () => {
  const location = useLocation();

  const nomFiliere = location.state.nomFiliere;
  const idniveau = location.state.idniveau;
  const niveau = location.state.niveau;

  // states des informations des modules

  const [modules, setModules] = useState([]);

  const refreshModules = () => {
    Axios.post("http://localhost:3001/api/get/module", { idniveau }).then(
      (response) => {
        setModules(response.data);
      }
    );
  };

  useEffect(() => {
    refreshModules();
  }, []);

  const deleteModule = (id) => {
    Axios.post("http://localhost:3001/api/delete/module", { id }).then(() => {
      refreshModules();
    });
  };

  return (
    <>
      <div className="add-module">

        <h1 >
          {nomFiliere} {niveau}
        </h1>

        <Link to="/form" state={{ nomFiliere, idniveau, niveau }}>
          <Button className="button-Ui">Ajouter un Module</Button>
        </Link>

        <table className="container table-modules">
          <thead>
            <tr>
              <th>Module</th>
              <th>Semestre</th>
              <th>Nombre des sous Modules</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {modules.map((modulee) => {
              return (
                <tr key={modulee.id} className="elems-container">
                  <td className="elem">{modulee.nom}</td>
                  <td className="elem">{modulee.semestre}</td>
                  <td className="elem">{modulee.nmbr_ss_modules}</td>
                  <td className="list-buttons">
                    <ModalDelete
                      text={modulee.nom}
                      deleteVar={deleteModule}
                      value={modulee.id}
                    />
                    <ModalModule id_module={modulee.id} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default FormFiliere;
