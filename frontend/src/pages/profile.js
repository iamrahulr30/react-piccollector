import React from "react"

export const Profile = () => {

    return (
        <div className="form-container">
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