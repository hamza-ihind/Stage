import { useState } from "react"
import { Axios } from "axios"

const SeancesProf = () => {

    // les states içi attendent jusqu'on termine la saisie de tous les infos

    return (
        <>
            <table className="container seances-prof">
                <thead>
                    <tr>
                        <th>N°</th>
                        <th>Matière</th>
                        <th>Type de séance</th>
                        <th>Classe</th>
                        <th>Groupe</th>
                    </tr>
                </thead>

                <tbody>
                    {/* Quelque chose içi */}
                </tbody>
            </table>
        </>
    )
}

export default SeancesProf