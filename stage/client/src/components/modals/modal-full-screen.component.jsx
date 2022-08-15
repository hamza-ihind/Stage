import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ModalFullscreen = ({ niv, name, id_niveau }) => {
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);

    function handleShow(breakpoint) {
        setFullscreen(breakpoint);
        setShow(true);
    }

    return (
        <>
            <Button variant="dark" onClick={() => handleShow(true)}>
                Niveau {niv}
            </Button>

            <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Niveau {niv}: {name}
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>{"id niveau " + id_niveau}</Modal.Body>
            </Modal>
        </>
    );
};

export default ModalFullscreen;
