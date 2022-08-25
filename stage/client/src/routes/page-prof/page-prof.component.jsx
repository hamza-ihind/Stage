import PasswordChangeProf from "../../components/change-password-prof/change-password-prof.component"

import { useParams, useLocation } from "react-router-dom"

import './page-prof.styles.scss'
import TableProf from "../../components/table-prof/table-prof.component"
import SeancesProf from "../../components/seances-prof/seances-prof.component"



const PageProf = () => {

    const location = useLocation()

    const id = location.state.id
    const nom = location.state.nom

    return (

        <div className="page-prof">

            <div className="container-page-prof">

                <h2>Construction d'emploi</h2>

                <div className="table-emploi-prof">
                    <TableProf />
                </div>

                <h2>Table des séances</h2>

                <div className="table-seances-prof">
                    <SeancesProf />
                </div>
            </div>


            <div className="password-change">
                <PasswordChangeProf id={id} />
            </div>
        </div >
    )
}

export default PageProf