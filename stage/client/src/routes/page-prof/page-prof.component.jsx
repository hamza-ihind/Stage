import PasswordChangeProf from "../../components/change-password-prof/change-password-prof.component";

import { useParams, useLocation } from "react-router-dom";

import "./page-prof.styles.scss";
import TableProf from "../../components/table-prof/table-prof.component";
import SeancesProf from "../../components/seances-prof/seances-prof.component";
import ChangePasswordProf from "../../components/change-password-prof/change-password-prof.component";

const PageProf = () => {
  const location = useLocation();

  const id = location.state.id;
  const nom = location.state.nom;
  const id_prof = location.state.id_prof;

  return (
    <div className="page-prof">

      {console.log(id_prof)}

      <h1>Bienvenue {nom}</h1>

      <div className="container-page-prof">
        <h2>Construction d'emploi</h2>

        <div className="table-emploi-prof">
          <TableProf />
        </div>

        <h2>Table des séances</h2>

        <div className="table-seances-prof">
          <SeancesProf id_prof={id_prof} />
        </div>
      </div>

      <div className="password-change">
        <ChangePasswordProf id={id} nom={nom} />
      </div>
    </div>
  );
};

export default PageProf;
