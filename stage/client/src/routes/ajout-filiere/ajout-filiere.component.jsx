import { useState, useEffect } from 'react';

import './ajout-filiere.styles.scss'

import ModalDelete from "../../components/modals/modal-delete.component";
import ModalError from "../../components/modals/modal-error.component";

import Axios from "axios";

import { Button, Form } from 'react-bootstrap'

const AjoutFiliere = () => {

    const [filiere, setFiliere] = useState("")
    const [nombreNiveau, setNombreNiveau] = useState("")
    const [niveaux, setNiveaux] = useState([])


    const refreshNiveaux = () => {
        Axios.get("http://localhost:3001/api/get/niveau").then((response) => {
            setNiveaux(response.data);
        });
    };

    useEffect(() => {
        refreshNiveaux();
    }, []);

    const createNiveau = () => {
        Axios.post("http://localhost:3001/api/insert/niveau", {
            filiere,
            nombreNiveau,
        }).then((response) => {
            if (response.data) {
                if (filiere && nombreNiveau) {
                    refreshNiveaux();
                }
                else {
                    console.error('error')
                }
            } else {
                console.error('error')
            }
        });
    };

    const deleteNiveau = (id) => {
        Axios.post("http://localhost:3001/api/delete/niveau", { id }).then(
            () => {
                refreshNiveaux();
            }
        );
    };


    return (
        <div>
            <h1 className="title">Ajoutez une filière</h1>

            <div className="add-filiere">
                <Form.Control
                    key="filiere"
                    type="text"
                    placeholder="filiere"
                    onChange={(event) => {
                        setFiliere(event.target.value);
                    }} />
                <Form.Control
                    key="nombreNiveau"
                    type="text"
                    placeholder="Nombre des niveaux"
                    onChange={(event) => {
                        setNombreNiveau(event.target.value);
                    }} />
                <Button variant="Primary" onClick={createNiveau}>Ajouter</Button>
            </div>

            <table className="container">

                <thead>
                    <tr>
                        <th>Filiere</th>
                        <th>Nombre des niveaux</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {niveaux.map((niveau) => {
                        return (
                            <tr key={niveau.filiere} className="elems-container">
                                <td className="elem">{niveau.filiere}</td>
                                <td className="elem">{niveau.nombreNiveau}</td>
                                <td className="list-buttons">
                                    <ModalDelete text={niveau.filiere} deleteVar={deleteNiveau} value={niveau.filiere} />
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default AjoutFiliere;