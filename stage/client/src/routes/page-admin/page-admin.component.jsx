import { Link, useLocation } from 'react-router-dom'
import { Button } from 'react-bootstrap'

import Prof from "../../assets/icons/prof.png"
import Info from "../../assets/icons/info.png"
import Filiere from "../../assets/icons/filiere.png"
import View from "../../assets/icons/eye.png"

import './page-admin.styles.scss'
import PasswordChangeAdmin from '../../components/change-password-admin/change-password-admin.component'

const PageAdmin = () => {

    let location = useLocation()
    const id = location.state.nom

    return (
        <>
            <h1 className='title-admin'> Bienvenue {id} </h1>

            <div className='buttons-container'>

                <div className="links-container">
                    <Link to="/infos" >
                        <Button size='lg' className="link">
                            <img src={Info} alt="info" className='icon-button-admin' />
                            Ajouter des infos
                        </Button>
                    </Link>

                    <Link to="/profs" >
                        <Button size='lg' className="link">
                            <img src={Prof} alt="prof" className='icon-button-admin' />

                            Ajouter un prof
                        </Button>
                    </Link>

                    <Link to="/filieres" >
                        <Button size='lg' className="link">
                            <img src={Filiere} alt="filiere" className='icon-button-admin' />

                            Ajouter des filieres
                        </Button>
                    </Link>

                    <Link to="/view-infos" >
                        <Button size='lg' className="link">
                            <img src={View} alt="view" className='icon-button-admin' />

                            Voir des infos
                        </Button>
                    </Link>
                </div>

                <div className='password-change'>
                    <PasswordChangeAdmin id={id} />
                </div>
            </div>
        </>
    )
}

export default PageAdmin;