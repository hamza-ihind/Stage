import { useState } from "react";

import Axios from 'axios'

const FormFiliere = () => {

    // states des informations des modules
    const [nom, setNom] = useState("");
    const [semestre, setSemestre] = useState("");
    const [nombreSM, setNombreSM] = useState("");
    const [modules, setModules] = useState([])

    const refreshModules = () => {
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

}