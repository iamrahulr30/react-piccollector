import React, { useEffect } from "react"
import { useAuthContext } from "../Hooks/useAuthContext"

export const Profile = () => {

    const { user } = useAuthContext()

    useEffect(() => {

        const fetchUser = async () => {
            const response = await fetch("/api/user/profile",
            {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({ user })
            })

            const json = await response.json()

            if(response.ok) {
                console.log("user data returned",json)
            }

            if (!response.ok) {
                console.log("fetch problem try again")
            }

        }

        fetchUser()
    }, [] )

    console.log(user.email)
    return (
        <div className="form-container">
            { user.email }
            <form action="" className="signup">
                <h3>Profile</h3>

                <label>Username : </label>
                <input type="text" />
                <br />

                <label>password : </label>
                <input type="text" />
                <br />

                <label>Confirm password : </label>
                <input type="text" />
                <br />

                <button>Update</button>
            </form>
        </div>
    )

}