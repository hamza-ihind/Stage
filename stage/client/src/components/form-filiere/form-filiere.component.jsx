import { useState, useEffect } from "react";

import { Form, Button } from "react-bootstrap";

import Axios from 'axios'

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

        </div>
    )
}

export default FormFiliere;