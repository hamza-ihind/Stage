import { useState } from "react";

import { Form, Button } from "react-bootstrap";

import Blob3 from "../../../assets/New folder/blob3.svg";
import Blob4 from "../../../assets/New folder/blob4.svg";

import { useNavigate, useLocation } from "react-router-dom";

import Axios from "axios";

import "./auth-prof.styles.scss";

const AuthProf = () => {
  let location = useLocation();
  let navigate = useNavigate();

  const [nom, setNom] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const propsProf = {
    nom,
    id: password,
  };

  const login = () => {
    Axios.post("http://localhost:3001/api/login/prof", {
      nom,
      password,
    }).then((response) => {
      if (response.data.length) {
        setMessage("");
        navigate(`/page-prof/${nom}`, {
          state: Object.assign(propsProf, {
            id_prof: response.data[0].matricule,
          }),
        });
      } else if (!response.data.length && (password !== '' && nom !== '')) {
        setMessage("Le prof n'existe pas dans la base des données");
      }
    });
  };

  const required = () => {
    if (nom === '') {
      setMessage("Veuillez entrer votre nom")
    }
    else if (password === "") {
      setMessage("Veuillez entrer votre mot de passe")
    }
  }

  const mixed = () => {
    login()
    required()
  }

  return (
    <div className="container-auth">

      <div className="auth-prof">

        <h1 >Authetication Professeur</h1>

        <p className="message-auth">{message}</p>

        <img src={Blob3} alt="blob" className="blob-3" />
        <img src={Blob4} alt="blob" className="blob-4" />

        <Form className="form-prof">
          <Form.Group className="mb-4" controlId="nom">
            <Form.Label>Nom Complet</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nom"
              onChange={(e) => {
                setNom(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group className="mb-4" controlId="password">
            <Form.Label>Mot de Passe</Form.Label>
            <Form.Control
              type="password"
              placeholder="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </Form.Group>

          <Button onClick={mixed} className="btn-auth-prof">
            Connecter
          </Button>
        </Form>
      </div>
    </div>
  )
};

export default AuthProf;
