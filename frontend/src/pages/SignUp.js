import React, { useState } from "react"
import { Link } from "react-router-dom"
import { useSignup } from "../Hooks/useSignup"

export const SignUp = () => {

    const [ email , setEmail ] = useState("")
    const [ password , setPassword ] = useState("")
    const [ equals , setEquals ] = useState(false)
    const [ confirmPassword , setConfirmPassword ] = useState("")
    const { error , signup , isLoading } = useSignup()

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        if ( password !== confirmPassword ){
            setEquals(true)
        }

        if ( password === confirmPassword ){
            setEquals(false)
            await signup(email , password)
        }
    }

    return (
        <div className="form-container">
            <form action="" 
            className="signup" onSubmit={handleSubmit}
            >
                <h3>SignUp</h3>

                <label>Email : </label>
                <input type="text" 
                onChange={e => {setEmail(e.target.value)}}
                value={email}
            
                />
                <br />

                <label>password : </label>
                <input type="password" 
                value={password}
                onChange={e => {setPassword(e.target.value)}}
                />
                <br />

                <label>Confirm password : </label>
                <input type="password" 
                value={confirmPassword}
                onChange={e => {setConfirmPassword(e.target.value)}}
                />
                <br />

                <button disabled={isLoading}>SignUp</button>
                {error && <div className="error">{ error }</div>}
                {equals && <div className="error">Confirm password doesn't match Password</div>}
                <Link className="topage"  to="/login">Already have an Account? Login</Link>  
            </form>
        </div>
    )

}