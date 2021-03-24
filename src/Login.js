import React, {useState} from 'react'
import './Login.css';
import { Button } from '@material-ui/core';
import { useAuth } from "./AuthContext";
import {useHistory} from 'react-router-dom';

function Login() {
    const { login } = useAuth();
    const history = useHistory('');
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault()
        
        try {
          setLoading(true);
          const auth = await login();
          console.log(auth);
          history.push("/");
        } catch {
          alert("Failed to sign in");
        }
        setLoading(false);
    }

    return (
        <div className="login">
            <div className="login__logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png" alt="fb-logo" />
                <img src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg" alt="fb-logo" />
            </div>
            <Button disabled={loading} type="submit" onClick={handleSubmit}>Sign In</Button>
        </div>
    )
}

export default Login
