import React from 'react'
import { Link, useNavigate } from "react-router-dom"
import Cookies from 'js-cookie'
import './Header.css'


function Header(){
    const navigate = useNavigate()

    const handleLogout = () => {
        Cookies.remove('jwt_token')
        navigate("/login",{replace:true})
    }
    return (
        <header className="app-header">
            <h1 className="logo">Daily Mood Tracker</h1>

            <nav className="nav-links">
                <Link to ="/">Home</Link>
                <Link to ="/reports">Reports</Link>
                <button type="button" onClick={handleLogout}>Logout</button>
            </nav>
        </header>
    )
}

export default  Header