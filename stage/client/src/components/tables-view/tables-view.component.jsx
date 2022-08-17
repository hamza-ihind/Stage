import { useState, useEffect } from "react";

import Axios from 'axios'

import './tables-view.styles.scss'

const TablesView = () => {

    const [filieres, setFilieres] = useState([]);
    const [profs, setProfs] = useState([]);
    const [modules, setModules] = useState([]);

    const refreshFilieres = () => {
        Axios.get("http://localhost:3001/api/get/filiere").then((response) => {
            setFilieres(response.data);
        });
    };

    const refreshProfs = () => {
        Axios.get("http://localhost:3001/api/get/prof").then((response) => {
            setProfs(response.data);
        });
    };

    const refreshModules = () => {
        Axios.get("http://localhost:3001/api/get/module").then((response) => {
            setModules(response.data);
        });
    };

    useEffect(() => {
        refreshModules();
        refreshProfs();
        refreshFilieres();
    }, []);

    return (
        <div className="container-tables">
            <div className="tables">
                <h1>Filières</h1>
                <table className="container">
                    <thead>
                        <tr>
                            <th>Filière</th>
                            <th>Nombre des niveaux</th>
                        </tr>
                    </thead>

                    <tbody>
                        {filieres.map((filiere) => {
                            return (
                                <tr key={filiere.id} className="elems-container">
                                    <td className="elem">{filiere.nom}</td>
                                    <td className="elem">{filiere.nmbr_niveaux}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>

            <div className="tables">
                <h1>profs</h1>
                <table className="container">
                    <thead>
                        <tr>
                            <th>Prof</th>
                            <th>Matricule</th>
                            <th>Email</th>
                        </tr>
                    </thead>

                    <tbody>
                        {profs.map((prof) => {
                            return (
                                <tr key={prof.id} className="elems-container">
                                    <td className="elem">{prof.nom}</td>
                                    <td className="elem">{prof.matricule}</td>
                                    <td className="elem">{prof.email}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>

            <div className="tables">
                <h1>Modules</h1>
                <table className="container">
                    <thead>
                        <tr>
                            <th>Module</th>
                            <th>nombre des sous Modules</th>
                        </tr>
                    </thead>

                    <tbody>
                        {modules.map((modulee) => {
                            return (
                                <tr key={modulee.id} className="elems-container">
                                    <td className="elem">{modulee.nom}</td>
                                    <td className="elem">{modulee.nmbr_ss_modules}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default TablesView