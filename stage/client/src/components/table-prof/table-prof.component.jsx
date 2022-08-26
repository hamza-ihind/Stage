import { useState, useEffect } from "react";
import Axios from "axios";

import AjoutSeance from '../ajout-seance/ajout-seance.component.jsx'

import './table-prof.styles.scss'

const TableProf = ({ id_prof }) => {

  const [jours, setJours] = useState([])

  const idProf = id_prof

  const refreshJours = () => {
    Axios.get("http://localhost:3001/api/get/jours").then((response) => {
      setJours(response.data);
      console.log(response.data)
    });
  };

  useEffect(() => {
    refreshJours();
  }, []);

  const days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi']

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
          {
            days.map((day) => {
              return (
                <tr className="seance" key={day}>
                  <td> <div className="table-td">
                    <div className="cell-content">
                      {day}
                    </div>
                  </div> </td>

                  <td>
                    <div className="table-td">
                      <div className="cell-content">
                        hamza
                        <AjoutSeance idProf={idProf} jour={day} seance='seance1' className="ajout-seance" />
                      </div>

                    </div>
                  </td>

                  <td>
                    <div className="table-td">
                      <div className="cell-content">
                        hamza
                        <AjoutSeance idProf={idProf} jour={day} seance='seance1' className="ajout-seance" />
                      </div>

                    </div>
                  </td>

                  <td>
                    <div className="table-td">
                      <div className="cell-content">
                        hamza
                        <AjoutSeance idProf={idProf} jour={day} seance='seance1' className="ajout-seance" />
                      </div>

                    </div>
                  </td>

                  <td>
                    <div className="table-td">
                      <div className="cell-content">
                        hamza
                        <AjoutSeance idProf={idProf} jour={day} seance='seance1' className="ajout-seance" />
                      </div>

                    </div>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </>
  );
};

export default TableProf;