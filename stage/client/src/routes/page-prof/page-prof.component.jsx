import PasswordChange from "../../components/change-password/change-password.component"

import './page-prof.styles.scss'

const PageProf = ({ id }) => {
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