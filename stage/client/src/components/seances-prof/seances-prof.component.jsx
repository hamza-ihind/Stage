import { useState, useEffect } from "react";
import Axios from "axios";
import { Button } from "react-bootstrap";

const SeancesProf = ({ id_prof }) => {
  const Nsemestre = 2;
  const [seances, setSeances] = useState([]);

  /////////////////////

  /*  const isSelected = async (id_seance, id_prof) => {
    const r = await Axios.post(
      "http://localhost:3001/api/insert/is_seance_selected",
      {
        id_seance,
        id_prof,
      }
    );
    return r.data.length != 0;
  }; */

  const refreshSeances = () => {
    Axios.post("http://localhost:3001/api/get/seances", { id_prof }).then(
      (response) => {
        let i = 0;
        const tab = response.data.map((seance) => {
          i++;
          return Object.assign(seance, { i });
        });
        const tab2 = [];
        for (let j = 0; j < tab.length; j++) {
          if (tab[j].semestre === Nsemestre) {
            tab2.push(tab[j]);
          }
        }
        setSeances(tab2);
      }
    );
  };
  useEffect(() => {
    refreshSeances();
  }, []);
  const GetMatiereById = ({ idModule, idSsModule }) => {
    const [nom, setNom] = useState("");
    if (idModule) {
      Axios.post("http://localhost:3001/api/get/modulebyid", {
        id_module: idModule,
      }).then((response) => {
        setNom(response.data[0].nom);
      });
    }
    if (idSsModule) {
      Axios.post("http://localhost:3001/api/get/ss_modulebyid", {
        id_ss_module: idSsModule,
      }).then((response) => {
        setNom(response.data[0].nom);
      });
    }
    return <span>{nom}</span>;
  };

  return (
    <>
      <table className="container seances-prof">
        <thead>
          <tr>
            <th>N°</th>
            <th>Matière</th>
            <th>Filiere</th>
            <th>niveau</th>
          </tr>
        </thead>

        <tbody>
          {seances.map((seance) => {
            return (
              <tr key={seance.id} className="elems-container">
                <td className="elem">{seance.i}</td>
                <td className="elem">
                  <GetMatiereById
                    idModule={seance.id_module}
                    idSsModule={seance.id_ss_module}
                  />
                </td>
                <td className="elem">{seance.nom_filiere}</td>
                <td className="elem">{seance.niveau}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default SeancesProf;
