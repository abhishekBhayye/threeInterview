import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {

    const [{ basket, user }] = useStateValue();

    const login = () => {
        if (user) {
            auth.signOut();
        }
    };


    return (
        <div className="Header">
            <Link to="/">
                <img className="header_logo" 
                src="threeLogo.PNG" 
                alt=""></img>
            </Link>

            <nav className="navigation">
                <Link to={!user && "/login"} className="header_link">
                    <div onClick={login} className="header_option">
                        <span className="header_optionLineOne">Hello, {user?.email}</span>
                        <span className="header_optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
                    </div>
                </Link>
            </nav>
        </div>
    )
}

export default Header