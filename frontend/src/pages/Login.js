import React from "react"
import { Link } from "react-router-dom"

export const Login = () => {

    return (
        <div className="form-container">
        <form action="" className="login">
            <h3>Login</h3>

            <label>Username : </label>
            <input type="text" />
            <br />

            <label>password : </label>
            <input type="text" />
            <br />

            <button>Login</button>
            <Link className="topage"  to="/signup" >Dont have an Account? SignUp</Link>  

        </form>
    </div>
    )

}