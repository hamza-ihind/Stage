import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';


const AjoutSeance = ({ jour, seance }) => {

    const [show, setShow] = useState(false);



    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Ajouter une séance
            </Button>

            <Modal show={show} onHide={handleClose} centered>

                <Modal.Body>
                    <Form.Select aria-label="Default select example">
                        <option>Open this select menu</option>

                    </Form.Select>

                    <Button variant="secondary" onClick={handleClose}>
                        Fermer
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Sauvegarder
                    </Button>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default AjoutSeance