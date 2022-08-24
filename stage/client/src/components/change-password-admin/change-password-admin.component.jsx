import { useState } from "react"
import { Form, Button } from 'react-bootstrap'

import Axios from 'axios'

import './change-password-admin.styles.scss'

const PasswordChangeAdmin = ({ id }) => {

    const [show, setShow] = useState(false)
    const [newPassword, setNewPassword] = useState('')

    const id_admin = id

    const updatePassword = (id_admin) => {
        Axios.put("http://localhost:3001/api/update/admin", {
            id_admin,
            newPassword
        })
    }

    return (
        <div className="password-change">

            <Button variant="dark" className="btn-change-password" onClick={() => setShow(!show)}>
                Changer votre mot de passe ?
            </Button>

            {show && <Form className="form-change-password">

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Nouveau Mot de passe</Form.Label>
                    <Form.Control type="password" placeholder="Mot de passe" onChange={(e) => setNewPassword(e.target.value)} />
                </Form.Group>

                <Button variant="success" onClick={() => updatePassword(id_admin)}>
                    Enregistrer
                </Button>

            </Form>}
        </div>
    )
}


export default PasswordChangeAdmin