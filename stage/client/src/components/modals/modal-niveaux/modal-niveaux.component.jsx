import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Axios from "axios";
import "./modal-niveaux.styles.scss";
import { Link } from "react-router-dom";

// import FormFiliere from "../../form-filiere/form-filiere.component";

function ModalNiveaux({ nomFiliere, id }) {
    const [lgShow, setLgShow] = useState(false);
    const [niveaux, setNiveaux] = useState([]);

    const id_filiere = id;

    // Backend Stuff
    const refreshNiveaux = (id) => {
        Axios.get("http://localhost:3001/api/get/niveau?id_filiere=" + id).then(
            (response) => {
                setNiveaux(response.data);
            }
        );
    };

    useEffect(() => {
        refreshNiveaux(id_filiere);
    }, [id_filiere]);

    return (
        <>
            <Button onClick={() => setLgShow(true)}>Plus de details</Button>
            <Modal
                style={{ color: "black" }}
                size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-P">
                        {nomFiliere}
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <div className="niveaux-buttons gap-2">
                        {niveaux.map((niveau) => {
                            return (
                                <Link
                                    key={niveau.ordonnancement}
                                    to={`/modules/${nomFiliere}${niveau.ordonnancement}`}
                                    state={{
                                        idniveau: niveau.id,
                                        nomFiliere,
                                        niveau: niveau.ordonnancement,
                                    }}
                                >
                                    <Button variant="dark">
                                        niveau: {niveau.ordonnancement}
                                    </Button>
                                </Link>
                            );
                        })}
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default ModalNiveaux;
