import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

import Prof from "../../assets/icons/prof.png"
import Info from "../../assets/icons/info.png"
import Filiere from "../../assets/icons/filiere.png"
import View from "../../assets/icons/eye.png"

import './page-admin.styles.scss'

const PageAdmin = () => {
    return (
        <div className='buttons-container'>

            <h1 className='title'> Bienvenue Page Admin </h1>

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
        </div>
    )
}

export default PageAdmin;