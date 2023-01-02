import React, { useState } from "react"
import { Link } from "react-router-dom"
import { useLogin } from "../Hooks/useLogin"

export const Login = () => {
    
    const [ email , setEmail ] = useState("")
    const [ password , setPassword ] = useState("")
    const { error , isLoading , login } = useLogin()

    const handleSubmit = async (e) => {
        e.preventDefault()
    
        await login(email, password)
      }


    return (
        <div className="form-container">
        <form action="" className="login" onSubmit={handleSubmit}>
            <h3>Login</h3>

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

            <button disabled={isLoading}>Login</button>
            {error && <div className="error">{ error }</div>}
            <Link className="topage"  to="/signup" >Dont have an Account? SignUp</Link>  

        </form>
    </div>
    )

}