import { Form, Button } from "react-bootstrap"
import { useState } from 'react'
import './form-module.styles.scss'
import { useLocation } from "react-router-dom"

import AjoutSsModule from "../Ajout-ss-module/ajout-ss-module.component"

const FormModule = () => {

    // props
    const location = useLocation()
    const nomFiliere = location.state.nomFiliere

    // states affichage
    const [showOui, setShowOui] = useState(false)
    const [showNon, setShowNon] = useState(false)

    //states de module
    const [nomModule, setNomModule] = useState('')

    // functions for radio cases
    const theOui = () => {
        setShowOui(true)
        setShowNon(false)
    }
    const theNon = () => {
        setShowOui(false)
        setShowNon(true)
    }

    return (
        <>
            <div className="form-module">
                <h1>Modules de {nomFiliere}</h1>

                <Form class="form-module-group">
                    <Form.Group className="mb-3" controlId="nom">
                        <Form.Label>Nom</Form.Label>
                        <Form.Control type="text" placeholder="nom" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="semestre">
                        <Form.Label>Semestre</Form.Label>
                        <div className="checks">
                            <Form.Check
                                name='semestre'
                                type='radio'
                                label='1'
                                id='radioCheck'
                            />
                            <Form.Check
                                name="semestre"
                                type='radio'
                                label='2'
                                id='radioCheck'
                            />
                        </div>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="sousModules">
                        <Form.Label>Est-ce que ce module a des sous modules ?</Form.Label>
                        <div className="checks">
                            <Form.Check
                                onChange={theOui}
                                name='sm'
                                type='radio'
                                label='Oui'
                                id='radioCheck'
                            />
                            <Form.Check
                                onChange={theNon}
                                name="sm"
                                type='radio'
                                label='Non'
                                id='radioCheck'
                            />
                        </div>
                    </Form.Group>
                </Form>

                {showOui && <ParamModule />}
                {showNon && <AjoutSsModule />}

            </div>
        </>
    )
}

const ParamModule = () => {
    return (
        <div> Hamza ihind </div>
    )
}

export default FormModule