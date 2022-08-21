import PasswordChange from "../../components/change-password/change-password.component"

import { useParams, useLocation } from "react-router-dom"

import './page-prof.styles.scss'



const PageProf = () => {

    const location = useLocation()
    console.log(location.state.id)

    return (

        <div className="page-prof">

            <div className="container-page-prof">

                <h2>
                    Construire l'emploi

                </h2>
            </div>
            <div className="password-change">
                <PasswordChange />
            </div>
        </div>
    )
}

export default PageProf