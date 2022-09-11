import { Outlet } from "react-router-dom"

import Logo from '../../assets/Logo.png';

import { Link } from "react-router-dom";

import './footer.styles.scss'

const Footer = () => {
    return (
        <>
            <Outlet />
            <div className="footer">
                <div className="upper-section">
                    <img src={Logo} alt="logo" className="logo-footer" />
                    <ul className="container-footer">
                        <li> <Link to='/auth-prof' >Connection Prof</Link> </li>
                        <li> <Link to='/auth-admin' >Connection admin</Link> </li>
                        <li> <Link to='/contact' >Contact</Link> </li>
                    </ul>
                </div>
                <hr className="hr" />
                <div className="lower-section">
                    <h3>E11even x Tiatro</h3>
                    <p>Copyright, All rights reserved.</p>
                </div>
            </div>
        </>
    )
}

export default Footer