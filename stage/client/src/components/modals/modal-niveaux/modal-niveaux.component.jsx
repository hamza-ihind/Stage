import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Axios from 'axios';
import './modal-niveaux.styles.scss'

import ModalFullscreen from '../modal-full-screen.component';

function ModalNiveaux({ nomFiliere, id }) {

    const [lgShow, setLgShow] = useState(false);
    const [niveaux, setNiveaux] = useState([])

    // Quelques fonctions
    const id_filiere = id;

    // Backend Stuff
    const refreshNiveaux = () => {
        Axios.get("http://localhost:3001/api/get/niveau").then((response) => {
            setNiveaux(response.data);
        });
    };

    useEffect(() => {
        refreshNiveaux();
    }, []);

    return (
        <>
            <Button onClick={() => setLgShow(true)}>Plus de details</Button>

            <Modal
                size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        {nomFiliere}
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <div className='niveaux-buttons gap-2' >
                        {niveaux.map((niveau) => {
                            if ((niveau.id_filiere) === (id_filiere)) {
                                return (
                                    <ModalFullscreen niv={niveau.ordonnancement} name={nomFiliere} />
                                )
                            }
                        })}
                    </div>
                </Modal.Body>

            </Modal>
        </>
    );
}

export default ModalNiveaux;