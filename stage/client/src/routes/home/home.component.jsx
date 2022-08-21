import { Button } from 'react-bootstrap'

import { Link } from 'react-router-dom'

import './home.styles.scss'

const Home = () => {
    return (
        <div>
            <div className='container-home'>
                <h1 className='title-home'> Bienvenue au Site de Stage de Tiatro et E11even </h1>
                <div className='buttons-home'>
                    <Link to='/auth-admin'>
                        <Button size='lg' variant='warning'>Connection Admin</Button>
                    </Link>
                    <Link to='/auth-prof'>
                        <Button size='lg' variant='primary'>Connection Prof</Button>
                    </Link>
                </div>
            </div>
            <div className='container-emplois-etudiants'>
                hamza
            </div>
        </div>
    )
}

export default Home;