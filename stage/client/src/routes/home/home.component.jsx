import { Button } from 'react-bootstrap'

import Blob from '../../assets/New folder/blob.svg'
import Blob2 from '../../assets/New folder/blob2.svg'
import Vect from '../../assets/New folder/vect.svg'

import Admin from "../../assets/icons/admin.png"
import Teacher from "../../assets/icons/teacher.png"

import { Link } from 'react-router-dom'

import './home.styles.scss'

const Home = () => (
    <div>

        <div className='container-home'>

            <img src={Blob} className="blob" />
            <img src={Blob2} className="blob-2" />

            <div className='first-div'>
                <h1 className='title-home'> Bienvenue au Site de Stage de <span className='span-name'>Tiatro</span> et <span className='span-name'>E11even</span>  </h1>
                <h4>le meilleur site web pour créer des horaires pour les enseignants et les étudiants</h4>
                <div className='buttons-home'>
                    <Link to='/auth-admin'>
                        <Button size='lg' className='button-home'>
                            <img src={Admin} alt="admin" className='icon-button' />
                            Connection Admin
                        </Button>
                    </Link>
                    <Link to='/auth-prof'>
                        <Button size='lg' className='button-home'>
                            <img src={Teacher} alt="prof" className='icon-button' />
                            Connection Prof
                        </Button>
                    </Link>
                </div>
            </div>

            <img src={Vect} className="vect" />

        </div>


        <div className='container-emplois-etudiants'>
            hamza
        </div>
        <div className='container-emplois-etudiants'>
            hamza
        </div>
        <div className='container-emplois-etudiants'>
            hamza
        </div>
        <div className='container-emplois-etudiants'>
            hamza
        </div>
        <div className='container-emplois-etudiants'>
            hamza
        </div>
        <div className='container-emplois-etudiants'>
            hamza
        </div>
        <div className='container-emplois-etudiants'>
            hamza
        </div>
        <div className='container-emplois-etudiants'>
            hamza
        </div>
        <div className='container-emplois-etudiants'>
            hamza
        </div>
        <div className='container-emplois-etudiants'>
            hamza
        </div>
        <div className='container-emplois-etudiants'>
            hamza
        </div>
        <div className='container-emplois-etudiants'>
            hamza
        </div>
        <div className='container-emplois-etudiants'>
            hamza
        </div>
        <div className='container-emplois-etudiants'>
            hamza
        </div>

    </div>
)

export default Home;