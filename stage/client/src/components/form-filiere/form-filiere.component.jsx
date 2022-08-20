import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Button } from "react-bootstrap";

import Axios from 'axios'
import './form-filiere.styles.scss'

import ModalDelete from "../modals/modal-delete.component";

const FormFiliere = ({ id_niveau, name, niv }) => {

    // states des informations des modules

    const [modules, setModules] = useState([])

    const refreshModules = () => {
        Axios.get("http://localhost:3001/api/get/module").then((response) => {
            setModules(response.data);
        });
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


                <Link to='/form'>
                    <Button variant="warning" >
                        Ajouter un Module
                    </Button>
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
                                        </td>
                                    </tr>
                                );
                            }
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default FormFiliere;