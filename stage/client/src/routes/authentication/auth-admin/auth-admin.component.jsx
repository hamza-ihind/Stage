import { useState } from 'react'

import { Form, Button } from 'react-bootstrap'

import Blob3 from '../../../assets/New folder/blob3.svg'
import Blob4 from '../../../assets/New folder/blob4.svg'

import { useNavigate, useLocation } from 'react-router-dom'

import Axios from 'axios'

import './auth-admin.styles.scss'

const AuthAdmin = () => {

    let navigate = useNavigate()

    const [nom, setNom] = useState('')
    const [password, setPassword] = useState('')

    const [loginStatus, setLoginStatus] = useState('')

    const login = () => {
        Axios.post('http://localhost:3001/api/login/admin', {
            nom,
            password
        }).then((response) => {
            if (response.data.length) {
                setLoginStatus('')
                navigate(`/page-admin`, { state: { nom } })
            }
            else {
                setLoginStatus('L\'admin n\'existe pas dans la base des données')
            }
        })
    }


    return (
        <div className='container-auth'>
            <img src={Blob3} alt="blob" className='blob-3' />
            <img src={Blob4} alt="blob" className='blob-4' />

            <div className='auth-admin'>

                <h1>Authetication Administrateur</h1>

                <p>{loginStatus}</p>



                <Form className='form-prof'>

                    <Form.Group className="mb-4" controlId="nom">
                        <Form.Label>Nom Complet</Form.Label>
                        <Form.Control type="text" placeholder="Nom" onChange={(e) => { setNom(e.target.value) }} />
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="password">
                        <Form.Label>Mot de Passe</Form.Label>
                        <Form.Control type="password" placeholder="password" onChange={(e) => { setPassword(e.target.value) }} />
                    </Form.Group>

                    <Button className='btn-auth-prof' onClick={login}>
                        Connecter
                    </Button>

                </Form>
            </div>
        </div>
    )
}

export default AuthAdmin