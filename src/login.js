import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { auth } from './firebase'
import './Login.css'

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = (event) => {
        event.preventDefault(); // Stop the refresh
        //Login logic here

        auth.signInWithEmailAndPassword(email, password)
            .then((auth) => {
                // Logged in, redirect to home page
                history.push('/');
            })
            .catch(e => alert(e.message));
    }

    const register = (event) => {
        event.preventDefault(); // Stop the refresh
        
        // Register logic here....
        auth.createUserWithEmailAndPassword(email, password)
            .then(auth => {
                //Create a user and logged in
                history.push('/');
            })
            .catch(e => alert(e.message));
    }

    return (
        <div className="login">

            <Link to="/">
                <img className="header_logo" 
                src="threeLogo.PNG" 
                alt=""></img>
            </Link>
            
            <div className="login_container">
                <h1>Sign in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input value={email} onChange={event => setEmail(event.target.value)} type="email" />
                    <h5>Password</h5>
                    <input value={password} onChange={event => setPassword(event.target.value)} type="password" />
                    <br></br>
                    <br></br>
                    <button onClick={login} type="submit" className="login_signInButton">Sign In</button>
                </form>
                
                <p>
                    By signing-in you agree to Three's conditions of Use and Sale. Please see our Privacy Notice, our Cookies Notice and our Internet-Based Ads Notice.
                </p>
                <button onClick={register} className="loginRegisterButton">Create your Shopping List account</button>
            </div>

        </div>
    )
}

export default Login