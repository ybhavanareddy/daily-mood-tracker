import React from 'react'
import {useState } from "react"
import { useNavigate , Navigate} from "react-router-dom"
import Cookies from "js-cookie"
import { loginUser } from "../../services/authService"
import './Login.css'

function Login (){

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowpassword] = useState(false)
    const [errorMsg, setErrorMsg] = useState('')


    const navigate = useNavigate()

    
    const token = Cookies.get("jwt_token")
    if(token){
        return <Navigate to="/" replace />
    }


    const handleLogin = async()=>{
        setErrorMsg('')
        try{
            await loginUser(username,password)
            navigate('/',{replace:true })

        }
        catch(error){
            setErrorMsg(error.message)
        }
    }

    return (
        <div className="login-container">
            <div className="login-card">
                <h1>Daily Mood Tracker</h1>
                <div className="login-field">
                    <label htmlFor="username">USERNAME</label>
                    <input 
                        id="username"
                        type="text"
                        value={username}
                        onChange={event => setUsername(event.target.value)}
                    />
                </div>
                
            
                <div className="login-field">
                    <label htmlFor="password">PASSWORD</label>
                    <input 
                        id="password"
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={event => setPassword(event.target.value)}
                    />
                </div>

                <div className="show-password">
                    <input 
                        id="showPassword"
                        type="checkbox"
                        checked={showPassword}
                        onChange={event => setShowpassword(event.target.checked)}
                    />
                    <label htmlFor="showPassword">Show Password</label>
                </div>

                <button className="login-button" type="button" onClick={handleLogin}>Login</button>
                {errorMsg && <p className="login-error">{errorMsg}</p>}
            </div>
        </div>
    )
}

export default Login