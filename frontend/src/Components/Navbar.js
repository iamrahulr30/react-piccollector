import React from "react"
import { Link } from "react-router-dom"

export const Navbar = () => {


    return (
        <header className="topg">
            <div className="container">
                <h2>Picollector</h2>
            </div>
            <div className="navi">
                <nav>
                    <Link to="/signup">
                        <h1>SignUp</h1>
                    </Link>
                    <Link to="/login">
                        <h1>Login</h1>
                    </Link>
                    <Link to="/">
                        <h1>Home</h1>
                    </Link>
                    <Link to="/profile">
                        <h1>Profile</h1>
                    </Link>
                    
                </nav>
           </div>
        </header>
    )
}