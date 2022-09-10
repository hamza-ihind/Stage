import { useState, useEffect } from "react";

import ModalDelete from "../../components/modals/modal-delete.component";
import ModalError from "../../components/modals/modal-error.component";

import "./ajout-prof.styles.scss";
import Axios from "axios";

import { Button, Form } from "react-bootstrap";

const AjoutProf = () => {
  // states des informations des profs
  const [nom, setNom] = useState("");
  const [matricule, setMatricule] = useState("");
  const [email, setEmail] = useState("");
  const [profs, setProfs] = useState([]);
  const [message, setMessage] = useState("")

  const refreshProfs = () => {
    Axios.get("http://localhost:3001/api/get/prof").then((response) => {
      setProfs(response.data);
    });
  };

  useEffect(() => {
    refreshProfs();
  }, []);

  // const createProf = () => {
  //   Axios.post("http://localhost:3001/api/insert/prof", {
  //     nom,
  //     matricule,
  //     email,
  //   }).then((response) => {
  //     refreshProfs();
  //     Axios.post("http://localhost:3001/api/initialisation/emploiprof", {
  //       id_prof: response.data,
  //     });
  //   });
  // };

  const EmailValid = () => {
    const createProf = () => {
      Axios.post("http://localhost:3001/api/insert/prof", {
        nom,
        matricule,
        email,
      }).then((response) => {
        refreshProfs();
        Axios.post("http://localhost:3001/api/initialisation/emploiprof", {
          id_prof: response.data,
        });
      });
    };
    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g
    if (regEx.test(email)) {
      setMessage("")
      createProf()
    } else if (!regEx.test(email) && email !== "") {
      setMessage("Email is non Valid")
    } else {
      setMessage("")
    }
  }

  const required = () => {
    if (email === "") {
      setMessage("Veuillez entrer un email")
    }
    else if (matricule === "") {
      setMessage("Veuillez entrer un matricule")
    }
    else if (nom === "") {
      setMessage("Veuillez entrer un nom")
    }
  }

  const mixed = () => {
    EmailValid()
    required()
  }

  const deleteProf = (matricule) => {
    Axios.post("http://localhost:3001/api/delete/prof", { matricule }).then(
      () => {
        refreshProfs();
      }
    );
  };

  // the UI
  return (
    <div className="container-prof">
      <h1 className="title">Ajoutez un prof</h1>

      <div className="add-prof">
        <Form.Control
          key="Nom"
          type="text"
          placeholder="Nom"
          onChange={(event) => {
            setNom(event.target.value);
          }}
        />
        <Form.Control
          key="Matricule"
          type="text"
          placeholder="Matricule"
          onChange={(event) => {
            setMatricule(event.target.value);
          }}
        />
        <Form.Control
          key="email"
          type="email"
          placeholder="Email"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />

        <Button onClick={mixed} className="btn-ajouter">Ajouter</Button>

      </div>

      <div className="message-required">
        {message}
      </div>

      <table className="container">
        <thead>
          <tr>
            <th>Nom</th>
            <th>Matricule</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {profs.map((prof) => {
            return (
              <tr key={prof.matricule} className="elems-container">
                <td className="elem">{prof.nom}</td>
                <td className="elem">{prof.matricule}</td>
                <td className="elem">{prof.email}</td>
                <td className="list-buttons">
                  <ModalDelete
                    text={prof.nom}
                    deleteVar={deleteProf}
                    value={prof.matricule}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AjoutProf;
