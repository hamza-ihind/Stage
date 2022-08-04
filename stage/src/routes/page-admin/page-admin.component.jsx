import { useState, useEffect } from 'react'
import './page-admin.styles.scss'
import { db } from '../../utils/firebase-config'
import { collection, getDocs } from 'firebase/firestore'


function PageAdmin() {

    // the Logic
    const [profs, setProfs] = useState([])
    const profsCollectionRef = collection(db, 'profs')

    useEffect(() => {
        const getProfs = async () => {
            const data = await getDocs(profsCollectionRef)
            setProfs(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        }
        getProfs()
    }, [])

    // the UI
    return (
        <div className='container'>
            {profs.map((prof) => {
                return (
                    <ul className='elems-container'>
                        <li className='elem'>{prof.nom}</li>
                        <li className='elem'>{prof.prénom}</li>
                        <li className='elem'>{prof.CNI}</li>
                        <li className='elem'>{prof.CNE}</li>
                        <li className='list-buttons'>
                            <button>Edit</button>
                            <button>Delete</button>
                        </li>
                    </ul>
                )
            })}
        </div>
    )
}

export default PageAdmin;