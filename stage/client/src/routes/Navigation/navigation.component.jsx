import { useState } from 'react';
import { Outlet, Link } from 'react-router-dom'
import Logo from '../../assets/Logo.png';

import './navigation.styles.scss'

const Navigation = () => {

    const [navBar, setNavBar] = useState(false)

    const changeBg = () => {
        if (window.scrollY >= 70) {
            setNavBar(true)
        } else {
            setNavBar(false)
        }
    }

    window.addEventListener('scroll', changeBg)

    return (
        <>
            <div className={navBar ? 'navigation active' : ' navigation'}>
                <Link className='logo-container' to='/'>
                    <img className='logo' src={Logo} alt="logo" />
                </Link>
                <div className='nav-links-container'>
                    <Link className='nav-link' to='/auth'>
                        S'IDENTIFIER
                    </Link>
                    <Link className='nav-link' to='/page-admin'>
                        Page Admin
                    </Link>
                </div>
            </div>
            <Outlet />
        </>
    )
}

export default Navigation;