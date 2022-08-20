import { Form, Button } from "react-bootstrap"
import './form-module.styles.scss'

const FormModule = () => {

    return (
        <>
            <div className="form-module">
                <h1>Ajouter les modules de </h1>
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
                                name='sm'
                                type='radio'
                                label='Oui'
                                id='radioCheck'
                            />
                            <Form.Check
                                name="sm"
                                type='radio'
                                label='Non'
                                id='radioCheck'
                            />
                        </div>
                    </Form.Group>
                </Form>


            </div>
        </>
    )
}

export default FormModule