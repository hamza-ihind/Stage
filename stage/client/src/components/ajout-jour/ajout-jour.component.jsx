import { useState } from "react"

import './ajout-jour.styles.scss'

const AjoutJour = () => {

    const [nom, newNom] = useState("")
    const [jour, newJour] = useState([])

    return (
        <>
            <h1 className="title-jour">Ajouter des jours</h1>
            <div className="table-jour">
                <table className="container table">
                    <tbody>
                        <tr>
                            <td>Jour</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default AjoutJour