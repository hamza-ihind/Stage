import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ModalError = ({ text1, text2 }) => {

    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="danger" onClick={handleShow}>
                Delete
            </Button>

            <Modal style={{ color: 'black' }} show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{text1}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{text2}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        OK
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalError;