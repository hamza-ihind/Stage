import { useState, useEffect } from "react";
import Axios from "axios";

import AjoutSeance from '../ajout-seance/ajout-seance.component.jsx'

import './table-prof.styles.scss'

const TableProf = ({ id_prof }) => {

  const [jours, setJours] = useState([])

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
                  <td> {day} </td>

                  <td>
                    <div>

                    </div>
                    <AjoutSeance jour={day} seance='seance1' className="ajout-seance" />

                  </td>

                  <td>
                    <div>

                    </div>
                    <AjoutSeance id={id_prof} jour={day} seance='seance2' />
                  </td>

                  <td>
                    <div>

                    </div>
                    <AjoutSeance id={id_prof} jour={day} seance='seance3' />
                  </td>

                  <td>
                    <div>

                    </div>
                    <AjoutSeance id={id_prof} jour={day} seance='seance4' />
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