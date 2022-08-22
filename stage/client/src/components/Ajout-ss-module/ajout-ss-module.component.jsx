import { Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Axios } from "axios";

import './ajout-ss-module.styles.scss'

const AjoutSsModule = () => {

    const [sousModule, setSousModule] = useState([]);
    const [nombreSemaines, setNombreSemaines] = useState("");
    const [nom, setNom] = useState("");

    const refreshSousModule = () => {
        Axios.get("http://localhost:3001/api/get/ss_module").then((response) => {
            setSousModule(response.data);
        });
    };

    useEffect(() => {
        refreshSousModule();
    }, []);

    const createSousModule = () => {
        Axios.post("http://localhost:3001/api/insert/ss_module", {
            nom,
            nombreSemaines,
        }).then((response) => {
            refreshSousModule();
        });
    };

    const deleteSousModule = (id) => {
        Axios.post("http://localhost:3001/api/delete/ss_module", { id }).then(() => {
            refreshSousModule();
        });
    };

    return (
        <div className="oui-choice">
            <h1>Ajouter des Sous modules</h1>
            <div className="add-sous-module">
                <Form.Control
                    key="Nom"
                    type="text"
                    placeholder="Nom"
                    onChange={(event) => {
                        setNom(event.target.value);
                    }} />
                <Form.Control
                    key="nmbr_semaines"
                    type="text"
                    placeholder="Nombre des Semaines"
                    onChange={(event) => {
                        setNombreSemaines(event.target.value);
                    }} />
            </div>
        </div>
    )
}

export default AjoutSsModule;