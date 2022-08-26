import { useState, useEffect } from "react";
import Axios from "axios";

import AjoutSeance from '../ajout-seance/ajout-seance.component.jsx'

const TableProf = () => {

  const [jours, setJours] = useState([])

  const refreshJours = () => {
    Axios.get("http://localhost:3001/api/get/jours").then((response) => {
      setJours(response.data);
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
                <tr>
                  <td> {day} </td>
                  <td>
                    <div>
                      <div>

                      </div>
                      <AjoutSeance jour={day} seance='seance1' />
                    </div>
                  </td>
                  <td> <AjoutSeance jour={day} seance='seance2' /> </td>
                  <td> <AjoutSeance jour={day} seance='seance3' /> </td>
                  <td> <AjoutSeance jour={day} seance='seance4' /> </td>
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