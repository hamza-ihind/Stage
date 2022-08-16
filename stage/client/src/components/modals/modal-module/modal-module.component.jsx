import React, { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';

import Axios from 'axios'
import './modal-module.styles.scss'

const ModalModule = ({ name, id_module }) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // states
    const [nom, setNom] = useState("");
    const [nombreSemaines, setNombreSemaines] = useState("");

    const [sousModules, setSousModules] = useState([])

    const refreshSousModules = () => {
        Axios.get("http://localhost:3001/api/get/ss_module").then((response) => {
            setSousModules(response.data);
        });
    };

    useEffect(() => {
        refreshSousModules();
    }, []);

    const createSousModule = () => {
        Axios.post("http://localhost:3001/api/insert/ss_module", {
            nom,
            nombreSemaines,
            id_module,
        }).then((response) => {
            refreshSousModules();
        });
    };

    // const deleteSousModule = (id) => {
    //     Axios.post("http://localhost:3001/api/delete/ss_module", { id }).then(() => {
    //         refreshSousModules();
    //     });
    // };

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Plus de détails
            </Button>

            <Modal show={show} onHide={handleClose} dialogClassName="dialogModule" contentClassName='contentModule'>

                <Modal.Header closeButton>
                    <Modal.Title>{name}</Modal.Title>
                </Modal.Header>


                <Modal.Body ClassName="bodySM">

                    <h1>Ajouter des sous modules</h1>

                    <div className="container-ss-modules">

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

                        <Form.Group controlId="nmbr_semaines">
                            <Form.Control
                                key="semaines"
                                type="text"
                                placeholder="Nombre des semaines"
                                onChange={(event) => {
                                    setNombreSemaines(event.target.value);
                                }}
                            />
                        </Form.Group>

                        <Button variant="primary" onClick={createSousModule}>
                            Valider
                        </Button>
                    </div>

                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Fermer
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Savegarder
                    </Button>
                </Modal.Footer>

            </Modal>
        </>
    );
}

export default ModalModule;