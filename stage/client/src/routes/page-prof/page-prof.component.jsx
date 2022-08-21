import PasswordChange from "../../components/change-password/change-password.component"

import { useParams, useLocation } from "react-router-dom"

import './page-prof.styles.scss'



const PageProf = () => {

    const location = useLocation()

    const id = location.state.id
    const nom = location.state.nom

    return (

        <div className="page-prof">

            <div className="container-page-prof">

                <h2>
                    Construire l'emploi

                </h2>
            </div>
            <div className="password-change">
                <PasswordChange id={id} />
            </div>
        </div>
    )
}

export default PageProf