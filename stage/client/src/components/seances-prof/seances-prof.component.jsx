import { useState, useEffect } from "react";
import Axios from "axios";
import "./seances-prof.styles.scss";
const SeancesProf = ({ id_prof, Nsemestre }) => {
  const [seances, setSeances] = useState([]);

  const refreshSeances = () => {
    Axios.post("http://localhost:3001/api/get/seances", { id_prof }).then(
      (response) => {
        const tab = response.data;
        const tab2 = [];
        for (let j = 0; j < tab.length; j++) {
          if (tab[j].semestre === Nsemestre) {
            tab2.push(tab[j]);
          }
        }
        setSeances(tab2);
        // getData(tab2);
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
    return <>{nom}</>;
  };

  return (
    <>
      <table className="container seances-prof">
        <thead>
          <tr>
            <th>Matière</th>
            <th>Filiere</th>
            <th>niveau</th>
          </tr>
        </thead>

        <tbody>
          {seances.map((seance) => {
            return (
              <tr
                key={seance.id}
                className={
                  "elems-container " + (seance.is_selected ? "selected" : "")
                }
                /* style={
                  seance.is_selected ? { backgroundColor: "lightgreen" } : {}
                } */
              >
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
