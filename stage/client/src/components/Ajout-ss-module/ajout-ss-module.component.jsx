import { Form, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import Axios from "axios";
import DropList from "../droplist/droplist.component.tsx";
import ModalDelete from "../../components/modals/modal-delete.component";
import { Link } from "react-router-dom";
import "./ajout-ss-module.styles.scss";

const AjoutSsModule = ({ id, nomFiliere, idniveau, niveau }) => {
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

    const createSousModule = () => {
        Axios.post("http://localhost:3001/api/insert/ss_module", {
            nom,
            nombreSemaines,
            prof,
            id,
        }).then((response) => {
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
    function getProfById(id) {
        Axios.post("http://localhost:3001/api/get/profbyid", { id }).then(
            (response) => {
                console.log(response.data[0].nom);
                return response.data[0].nom;
            }
        );
    }

    return (
        <div className="oui-choice">
            <h1>Ajouter des Sous modules à id {id}</h1>
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
                    <Button variant="primary" onClick={createSousModule}>
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
                                <td className="elem">{getProfById(sousModule.id_prof)}</td>
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
                <Button variant="primary">Enregistrer</Button>
            </Link>
        </div>
    );
};

export default AjoutSsModule;
