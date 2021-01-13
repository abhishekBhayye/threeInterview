import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './header.css'

export default class header extends Component {
    render() {
        return (
            <div className="Header">
                <Link to="/">
                    <img className="header_logo" 
                    src="threeLogo.PNG" 
                    alt=""></img>
                </Link>

                <nav className="navigation">
                    <p>Login</p>
                </nav>
            </div>
        )
    }
}
