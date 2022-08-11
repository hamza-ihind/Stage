import { useState, useEffect } from 'react'
import ModalDelete from '../modal-delete/modal-delete.component'
import './ajout-prof.styles.scss'
import Axios from 'axios'

const AjoutProf = () => {

    const [openModal, setOpenModal] = useState(false)

    // states des informations des profs
    const [nom, setNom] = useState("")
    const [matricule, setMatricule] = useState("")
    const [email, setEmail] = useState("")
    const [profs, setProfs] = useState([])

    useEffect(() => {
        Axios.get("http://localhost:3001/api/get").then((response) => {
            setProfs(response.data)
        })
    }, [])

    const createProf = () => {
        Axios.post("http://localhost:3001/api/insert", { nom, matricule, email })
    }

    const deleteProf = (prof) => {
        Axios.delete(`http://localhost:3001/api/delete/${prof}`)
    }

    // the UI
    return (
        <div>
            <h1 className='title'>Ajoutez un prof</h1>

            <div className='add-prof'>
                <input type="text" placeholder='Nom' onChange={(event) => { setNom(event.target.value) }} />
                <input type="text" placeholder='Matricule' onChange={(event) => { setMatricule(event.target.value) }} />
                <input type="text" placeholder='Email' onChange={(event) => { setEmail(event.target.value) }} />
                <button onClick={createProf}>Ajouter</button>
            </div>

            <table className='container'>

                <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Matricule</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {profs.map((prof) => {
                        return (
                            <tr className='elems-container'>
                                <td className='elem'>{prof.nom}</td>
                                <td className='elem'>{prof.matricule}</td>
                                <td className='elem'>{prof.email}</td>
                                <td className='list-buttons'>
                                    <button onClick={() => setOpenModal(true)} >Delete</button>
                                    {openModal && <ModalDelete closeModal={setOpenModal} text={prof.nom} deleteVar={deleteProf(prof.matricule)} />}
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default AjoutProf;