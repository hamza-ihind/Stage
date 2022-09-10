import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import Blob from '../../assets/New folder/blob.svg'
import Blob2 from '../../assets/New folder/blob2.svg'
import Vect from '../../assets/New folder/vect.svg'
import Admin from "../../assets/icons/admin.png"
import Prof from "../../assets/icons/prof.png"
import './home.styles.scss'

import EtudiantEmploi from '../../components/etudiant-emploi/etudiant-emploi.component'

const Home = () => (
    <div>

        <div className='container-home'>

            <img src={Blob} className="blob" />
            <img src={Blob2} className="blob-2" />

            <div className='first-div'>
                <h1 className='title-home'> Bienvenue au Site de Stage de <span className='span-name'>Tiatro</span> et <span className='span-name'>E11even</span>  </h1>
                <h4 className='desc'>le meilleur site web pour créer des horaires pour les enseignants et les étudiants</h4>
            </div>

            <img src={Vect} className="vect" />

        </div>
    </div >
)

export default Home;