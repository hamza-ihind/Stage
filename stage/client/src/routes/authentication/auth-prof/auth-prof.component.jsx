import { useState } from 'react'

import { Form, Button } from 'react-bootstrap'

import { useNavigate } from 'react-router-dom'

import Axios from 'axios'
import './auth-prof.styles.scss'

const AuthProf = () => {

    let navigate = useNavigate();

    const [nom, setNom] = useState('')
    const [password, setPassword] = useState('')
    const [loginStatus, setLoginStatus] = useState('')

    const login = () => {
        Axios.post('http://localhost:3001/api/login', {
            nom,
            password
        }).then((response) => {
            if (response.data.length) {
                setLoginStatus('')
                navigate(`/page-prof/${nom}`)
            }
            else {
                setLoginStatus('Le prof n\'existe pas dans la base des données')
            }
        })
    }

    return (
        <div className='auth-prof'>
            <h1>Authetication Professeur</h1>

            <p>{loginStatus}</p>

            <Form className='form-prof'>

                <Form.Group className="mb-3" controlId="nom">
                    <Form.Label>Nom Complet</Form.Label>
                    <Form.Control type="text" placeholder="Nom" onChange={(e) => { setNom(e.target.value) }} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Mot de Passe</Form.Label>
                    <Form.Control type="password" placeholder="password" onChange={(e) => { setPassword(e.target.value) }} />
                </Form.Group>

                <Button variant="success" onClick={login}>
                    Connecter
                </Button>

            </Form>
        </div>
    )
}

export default AuthProf