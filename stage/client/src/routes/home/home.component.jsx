import { Button } from 'react-bootstrap'

import './home.styles.scss'

const Home = () => {
    return (
        <div>
            <div className='container-home'>
                <h1 className='title-home'> Bienvenue au Site de Stage de Tiatro et E11even </h1>
                <div className='buttons-home'>
                    <Button size='lg' variant='warning'>Connection Admin</Button>
                    <Button size='lg' variant='primary'>Connection Prof</Button>
                </div>
            </div>
            <div className='container-emplois-etudiants'>
                hamza
            </div>
        </div>
    )
}

export default Home;