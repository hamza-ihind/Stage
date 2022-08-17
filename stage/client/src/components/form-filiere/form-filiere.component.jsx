import { useState, useEffect } from "react";

import { Form, Button } from "react-bootstrap";

import Axios from 'axios'

import './form-filiere.styles.scss'

import ModalDelete from "../modals/modal-delete.component";
import ModalModule from "../modals/modal-module/modal-module.component";

const FormFiliere = ({ id_niveau }) => {

    // states des informations des modules
    const [nom, setNom] = useState("");
    const [semestre, setSemestre] = useState("");
    const [nombreSM, setNombreSM] = useState("");
    const [modules, setModules] = useState([])

    const refreshModules = () => {
        Axios.get("http://localhost:3001/api/get/module").then((response) => {
            setModules(response.data);
        });
    };

    useEffect(() => {
        refreshModules();
    }, []);

    const createModule = () => {
        Axios.post("http://localhost:3001/api/insert/module", {
            nom,
            semestre,
            nombreSM,
            id_niveau,
        }).then((response) => {
            refreshModules();
        });
    };

    const deleteModule = (id) => {
        Axios.post("http://localhost:3001/api/delete/module", { id }).then(() => {
            refreshModules();
        });
    };

    return (
        <div>

            <div className="add-module">

                <h1 className="title">Ajoutez des modules</h1>

                <div className="container-modules">
                    <Form.Group controlId="nom">
                        <Form.Control
                            key="Nom"
                            type="text"
                            placeholder="Nom"
                            onChange={(event) => {
                                setNom(event.target.value);
                            }}
                        />
                    </Form.Group>

                    <Form.Group controlId="semestre">
                        <Form.Control
                            key="semestre"
                            type="text"
                            placeholder="semestre"
                            onChange={(event) => {
                                setSemestre(event.target.value);
                            }}
                        />
                    </Form.Group>

                    <Form.Group controlId="nmbr_ss_modules">
                        <Form.Control
                            key="nombreSM"
                            type="text"
                            placeholder="Nombre des sous modules"
                            onChange={(event) => {
                                setNombreSM(event.target.value);
                            }}
                        />
                    </Form.Group>

                    <Button variant="primary" onClick={createModule}>
                        Valider
                    </Button>

                </div>


                <table className="container">
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
                            if (id_niveau === modulee.id_niveau) {
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
                                            <ModalModule name={modulee.nom} id_module={modulee.id} />
                                        </td>
                                    </tr>
                                );
                            }
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default FormFiliere;