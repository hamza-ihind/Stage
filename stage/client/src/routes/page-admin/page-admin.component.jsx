import { useState } from 'react'
import './page-admin.styles.scss'
import Axios from 'axios'


const PageAdmin = () => {

    // states des informations des profs
    const [nom, setNom] = useState("")
    const [matricule, setMatricule] = useState("")
    const [email, setEmail] = useState("")

    const [profs, setProfs] = useState([])


    const createProf = () => {
        Axios.post("http://localhost:3001/create", { nom, matricule, email }).then(() => {
            console.log('Working')
        })
    }

    const getProf = () => {
        Axios.get("http://localhost:3001/profs").then((response) => {
            setProfs(response.data)
        })
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
                <button onClick={getProf}>show</button>
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
                                    <button>Edit</button>
                                    <button>Delete</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <h1 className='title'>Ajoutez une filière</h1>
        </div>
    )
}

export default PageAdmin;