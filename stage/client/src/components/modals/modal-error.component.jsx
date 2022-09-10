import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ModalError = ({ text, show, handleClose }) => {
  return (
    <>
      <Modal style={{ color: "black" }} show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>ERREUR !</Modal.Title>
        </Modal.Header>
        <Modal.Body>{text}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalError;
