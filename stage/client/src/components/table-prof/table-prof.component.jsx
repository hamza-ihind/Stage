import { useState } from "react";

const TableProf = () => {
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
          <tr>
            <td> Lundi </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td> Mardi </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td> Mercredi </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td> jeudi </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td> Vendredi </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td> Samedi </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default TableProf;
