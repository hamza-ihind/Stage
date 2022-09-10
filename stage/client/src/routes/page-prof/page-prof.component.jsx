import { useParams, useLocation } from "react-router-dom";

import "./page-prof.styles.scss";
import TableProf from "../../components/table-prof/table-prof.component";
import SeancesProf from "../../components/seances-prof/seances-prof.component";
import ChangePasswordProf from "../../components/change-password-prof/change-password-prof.component";
import { useState } from "react";

const PageProf = () => {
  const Nsemestre = 1;

  const location = useLocation();

  const id = location.state.id;
  const nom = location.state.nom;
  const id_prof = location.state.id_prof;

  return (
    <div className="page-prof">



      <div className="container-page-prof">

        <h1>Bienvenue {nom}</h1>

        <h2 className="title-table">Construction d'emploi</h2>

        <div className="table-emploi-prof">
          <TableProf id_prof={id_prof} Nsemestre={Nsemestre} />
        </div>

        <h2 className="title-table">Toutes les seances</h2>

        <div className="table-seances-prof">
          <SeancesProf id_prof={id_prof} Nsemestre={Nsemestre} />
        </div>
      </div>

      <div className="password-change">
        <ChangePasswordProf id={id} nom={nom} />
      </div>
    </div>
  );
};

export default PageProf;
