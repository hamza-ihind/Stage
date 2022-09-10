import { useState, useEffect } from "react";
import Axios from "axios";

import AjoutSeance from "../ajout-seance/ajout-seance.component.jsx";

import "./table-prof.styles.scss";

const TableProf = ({ id_prof, Nsemestre }) => {
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
      }
    );
  };

  useEffect(() => {
    refreshSeances();
  }, []);

  const days = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];

  return (
    <>
      <table className="container table-prof">
        <thead>
          <tr>
            <th>Jours</th>
            <th>Seance 1</th>
            <th>Seance 2</th>
            <th>Seance 3</th>
            <th>Seance 4</th>
          </tr>
        </thead>

        <tbody>
          {days.map((day) => {
            return (
              <tr className="seance" key={day} style={{ border: "none" }}>
                <td
                  style={{
                    background: "#3c186e",
                    color: "white",
                  }}
                >
                  <div className="table-td">
                    <div className="cell-content">{day}</div>
                  </div>
                </td>

                <td style={{ borderRight: "1px black solid" }}>
                  <div className="table-td">
                    <div className="cell-content">
                      <AjoutSeance
                        key={JSON.stringify(seances)}
                        tabSeances={seances}
                        idProf={id_prof}
                        jour={day}
                        seance={"seance1"}
                        refreshSeances={refreshSeances}
                        className="ajout-seance"
                      />
                    </div>
                  </div>
                </td>

                <td style={{ borderRight: "1px black solid" }}>
                  <div className="table-td">
                    <div className="cell-content">
                      <AjoutSeance
                        key={JSON.stringify(seances)}
                        tabSeances={seances}
                        idProf={id_prof}
                        jour={day}
                        seance={"seance2"}
                        className="ajout-seance"
                        refreshSeances={refreshSeances}
                      />
                    </div>
                  </div>
                </td>

                <td style={{ borderRight: "1px black solid" }}>
                  <div className="table-td">
                    <div className="cell-content">
                      <AjoutSeance
                        key={JSON.stringify(seances)}
                        tabSeances={seances}
                        idProf={id_prof}
                        jour={day}
                        seance={"seance3"}
                        refreshSeances={refreshSeances}
                        className="ajout-seance"
                      />
                    </div>
                  </div>
                </td>

                <td>
                  <div className="table-td">
                    <div className="cell-content">
                      <AjoutSeance
                        key={JSON.stringify(seances)}
                        tabSeances={seances}
                        idProf={id_prof}
                        jour={day}
                        seance={"seance4"}
                        refreshSeances={refreshSeances}
                        className="ajout-seance"
                      />
                    </div>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default TableProf;
