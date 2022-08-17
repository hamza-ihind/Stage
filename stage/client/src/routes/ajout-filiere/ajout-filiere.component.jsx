import { useState, useEffect } from "react";

import "./ajout-filiere.styles.scss";

import ModalDelete from "../../components/modals/modal-delete.component";
import ModalNiveaux from "../../components/modals/modal-niveaux/modal-niveaux.component";

import Axios from "axios";

import { Button, Form } from "react-bootstrap";

const AjoutFiliere = () => {

    const [filieres, setFilieres] = useState([]);
    const [nombreNiveau, setNombreNiveau] = useState("");
    const [nom, setNom] = useState("");

    const refreshFilieres = () => {
        Axios.get("http://localhost:3001/api/get/filiere").then((response) => {
            setFilieres(response.data);
        });
    };

    useEffect(() => {
        refreshFilieres();
    }, []);

    const createfiliere = () => {
        Axios.post("http://localhost:3001/api/insert/filiere", {
            nom,
            nombreNiveau,
        }).then((response) => {
            refreshFilieres();
        });
    };

    const deleteFiliere = (id) => {
        Axios.post("http://localhost:3001/api/delete/filiere", { id }).then(() => {
            refreshFilieres();
        });
    };

    return (
        <div>
            <h1 className="title">Ajoutez une filière</h1>

            <div className="add-filiere">

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

                <Form.Group controlId="nmbr_niveaux">
                    <Form.Control
                        key="nombreNiveau"
                        type="text"
                        placeholder="Nombre des niveaux"
                        onChange={(event) => {
                            setNombreNiveau(event.target.value);
                        }}
                    />
                </Form.Group>

                <Button variant="primary" onClick={createfiliere}>
                    Ajouter
                </Button>
            </div>

            <table className="container">
                <thead>
                    <tr>
                        <th>Filière</th>
                        <th>Nombre des niveaux</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {filieres.map((filiere) => {
                        return (
                            <tr key={filiere.id} className="elems-container">
                                <td className="elem">{filiere.nom}</td>
                                <td className="elem">{filiere.nmbr_niveaux}</td>
                                <td className="list-buttons">
                                    <ModalDelete
                                        text={filiere.nom}
                                        deleteVar={deleteFiliere}
                                        value={filiere.id}
                                    />
                                    <ModalNiveaux nomFiliere={filiere.nom} id={filiere.id} />
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default AjoutFiliere;