import React from "react"
import { Link } from "react-router-dom"

export const SignUp = () => {

    return (
        <div className="form-container">
            <form action="" className="signup">
                <h3>SignUp</h3>

                <label>Username : </label>
                <input type="text" />
                <br />

                <label>password : </label>
                <input type="text" />
                <br />

                <label>Confirm password : </label>
                <input type="text" />
                <br />

                <button>Submit</button>
                <Link className="topage"  to="/login">Already have an Account? Login</Link>  
            </form>
        </div>
    )

}