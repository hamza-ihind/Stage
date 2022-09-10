import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import "./form-module.styles.scss";
import { useLocation, Link } from "react-router-dom";
import DropList from "../droplist/droplist.component.tsx";
import AjoutSsModule from "../Ajout-ss-module/ajout-ss-module.component";
import Axios from "axios";

const FormModule = () => {
  // props
  const location = useLocation();
  const nomFiliere = location.state.nomFiliere;
  const idniveau = location.state.idniveau;
  const niveau = location.state.niveau;
  // states affichage
  const [showOui, setShowOui] = useState(false);
  const [showNon, setShowNon] = useState(false);
  const [disabled, setDisabled] = useState(false);

  //states de module
  const [nomModule, setNomModule] = useState("");
  const [semestre, setSemestre] = useState("");
  const [nmbr_semaines, setNmbr_semaines] = useState("");
  const [prof, setProf] = useState("");
  // functions for radio cases

  const [idModule, setIdModule] = useState("");
  const theOui = () => {
    if (nomModule && semestre) {
      setShowOui(true);
      setDisabled(true);
      createModuleOui();
    }
  };
  const theNon = () => {
    if (nomModule && semestre) {
      setDisabled(true);
      setShowNon(true);
    }
  };
  //
  const createSeanceNon = (id_module) => {
    Axios.post("http://localhost:3001/api/insert/seance/non", {
      prof,
      id_module,
      nomFiliere,
      niveau,
      semestre,
      idniveau,
    });
  };
  const createModuleNon = () => {
    Axios.post("http://localhost:3001/api/insert/module/non", {
      nomModule,
      semestre,
      nmbr_semaines,
      prof,
      idniveau,
    }).then((res) => {
      createSeanceNon(res.data.insertId);
    });
  };
  const createModuleOui = () => {
    Axios.post("http://localhost:3001/api/insert/module/oui", {
      nomModule,
      semestre,
      idniveau,
    }).then((res) => {
      setIdModule(res.data.insertId);
    });
  };

  return (
    <>
      <div className="form-module">

        <h1 className="title-module">
          Modules de {nomFiliere} {niveau}
        </h1>

        <Form className="form-module-group">
          <Form.Group className="mb-3" controlId="nom">
            <Form.Label>Nom</Form.Label>
            <Form.Control
              disabled={disabled}
              type="text"
              placeholder="nom"
              onChange={(event) => {
                setNomModule(event.target.value);
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="semestre">
            <Form.Label>Semestre</Form.Label>
            <div className="checks">
              <Form.Check
                disabled={disabled}
                name="semestre"
                type="radio"
                label="1"
                id="radioCheck"
                onChange={(event) => {
                  setSemestre(1);
                }}
              />
              <Form.Check
                disabled={disabled}
                name="semestre"
                type="radio"
                label="2"
                id="radioCheck"
                onChange={(event) => {
                  setSemestre(2);
                }}
              />
            </div>
          </Form.Group>

          <Form.Group className="mb-3" controlId="sousModules">
            <Form.Label>Est-ce que ce module a des sous modules ?</Form.Label>
            <div className="checks">
              <Form.Check
                disabled={disabled}
                onChange={theOui}
                name="sm"
                type="radio"
                label="Oui"
                id="radioCheck"
              />
              <Form.Check
                disabled={disabled}
                onChange={theNon}
                name="sm"
                type="radio"
                label="Non"
                id="radioCheck"
              />
            </div>
          </Form.Group>
        </Form>

        {showNon && (
          <Form className="form-module-group">
            <Form.Group className="mb-3" controlId="nmbr_semaines">
              <Form.Label>Nombre de semaines</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nombre de semaines"
                onChange={(event) => {
                  setNmbr_semaines(event.target.value);
                }}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>prof</Form.Label>
              <DropList
                onChange={(data) => {
                  setProf(data.value);
                }}
              />
            </Form.Group>
            <Link
              to={`/modules/${nomFiliere}${niveau}`}
              state={{ nomFiliere, idniveau, niveau }}
            >
              <Button className="btn-ajouter btn-ajouter-ss-module" onClick={createModuleNon}>
                Ajouter
              </Button>
            </Link>
          </Form>
        )}
        {showOui && (
          <AjoutSsModule
            id={idModule}
            nomFiliere={nomFiliere}
            idniveau={idniveau}
            niveau={niveau}
            semestre={semestre}
          />
        )}
      </div>
    </>
  );
};

export default FormModule;
