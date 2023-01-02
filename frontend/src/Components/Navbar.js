import React from "react"
import { Link } from "react-router-dom"
import { useAuthContext } from "../Hooks/useAuthContext"
import { useLogout } from "../Hooks/useLogout"

export const Navbar = () => {

    const { user } = useAuthContext()

    const { logout } = useLogout()

    const handleClick = () => {
        logout()
      }

      console.log(user)

    return (
        <header className="topg">
            <div className="container">
                <h2>Picollector</h2>
            </div>
            <div className="navi">
                <nav>
                    <h2 style={{ "marginRight" : "10px" }}>{ user && user.email }</h2>
                    <Link to="/">
                        <h1>Home</h1>
                    </Link>
                    { user && <Link to="/profile">
                        <h1>Profile</h1>
                    </Link>}
                    { !user && <Link to="/login">
                        <h1>Login</h1>
                    </Link> }
                    { !user && <Link to="/signup">
                        <h1>SignUp</h1>
                    </Link> }
                    {user && <Link to="/profile">
                        <h1 onClick={handleClick}>Logout</h1>
                    </Link>}
                </nav>
           </div>
        </header>
    )
}