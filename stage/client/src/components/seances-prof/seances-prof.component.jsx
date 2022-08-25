import { useState, useEffect } from "react";
import Axios from "axios";

const SeancesProf = ({ id_prof }) => {

  const [seances, setSeances] = useState([]);

  const refreshSeances = () => {
    Axios.post("http://localhost:3001/api/get/seances", { id_prof }).then(
      (response) => {
        let i = 0;
        const tab = response.data.map((seance) => {
          i++;
          return Object.assign(seance, { i });
        });
        console.log(response.data)
        setSeances(tab);
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
