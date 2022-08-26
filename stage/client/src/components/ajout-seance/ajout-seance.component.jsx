import { useState, useEffect } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';

import Axios from 'axios'

import './ajout-seance.styles.scss'

const AjoutSeance = ({ idProf, jour, seance }) => {

    const [show, setShow] = useState(false);

    const [seances, setSeances] = useState([])

    const id_prof = idProf

    const refreshSeances = () => {
        Axios.post("http://localhost:3001/api/get/seances").then((response) => {
            setSeances(response.data);
            console.log(response)
        });
    };

    useEffect(() => {
        refreshSeances();
    }, []);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>


            <Button className='btn-ajout-seance button-Ui' onClick={handleShow}>
                +
            </Button>

            <Modal show={show} onHide={handleClose} centered>

                <Modal.Body className='modal-body-ajout-seance'>


                    <Form.Select aria-label="Default select example">
                        <option>Choisissez la séance</option>
                        <option></option>
                    </Form.Select>

                    <div className='btn-ajt-seance'>
                        <Button onClick={handleClose}>
                            Fermer
                        </Button>
                        <Button onClick={handleClose}>
                            Sauvegarder
                        </Button>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default AjoutSeance