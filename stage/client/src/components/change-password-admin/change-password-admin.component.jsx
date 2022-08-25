import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

import PadLock from "../../assets/icons/padlock.png";

import Axios from "axios";

import "./change-password-admin.styles.scss";

const ChangePasswordAdmin = ({ id, nom }) => {
  const [show, setShow] = useState(false);
  const [newPassword1, setNewPassword1] = useState("");
  const [newPassword2, setNewPassword2] = useState("");
  const [text, setText] = useState("");

  const id_admin = id;

  const updatePassword = (id_admin) => {
    Axios.put("http://localhost:3001/api/update/admin", {
      id_admin,
      newPassword1,
    });
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button onClick={handleShow} className="button-Ui padlock-Ui">
        <img
          src={PadLock}
          alt="Changer votre Mot de passe"
          className="padlock"
        />
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        centered
        className="modal-body-auth"
      >
        <Modal.Body>
          <Modal.Title className="form-title-change-password-prof">
            Changer le mot de passe
          </Modal.Title>

          <Form className="form-change-password-prof">
            <Form.Group className="mb-3" controlId="formBasicPassword1">
              <Form.Label>Nouveau Mot de passe</Form.Label>
              <Form.Control
                type="password"
                placeholder="Mot de passe"
                onChange={(e) => setNewPassword1(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword2">
              <Form.Label>Confirmer le mot de passe</Form.Label>
              <Form.Control
                type="password"
                placeholder="Mot de passe"
                onChange={(e) => setNewPassword2(e.target.value)}
              />
            </Form.Group>
          </Form>

          <div>{text}</div>

          <div className="btn-auth-container">
            <Button className="button-Ui btn-auth close" onClick={handleClose}>
              Close
            </Button>

            <Button
              className="button-Ui btn-auth"
              onClick={() => {
                if (newPassword1 === newPassword2) {
                  updatePassword(id_admin);
                  setText("Le mot de passe a été changé avec succes!");
                  setTimeout(() => {
                    setText("");
                    handleClose();
                  }, 2000);
                } else {
                  setText("Les mots de passe sont différents !");
                  setTimeout(setText, 4000, "");
                }
              }}
            >
              Enregistrer
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ChangePasswordAdmin;
