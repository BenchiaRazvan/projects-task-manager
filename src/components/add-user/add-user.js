import axios from "axios";
import React, { useState } from "react";
import './add-user.scss';

function AddUser() {
    

    const [user, setUser] = useState({
        'username': '',
        'email': '',
        'password': '',
        'role': ''
    })
    const [message, setMessage] = useState("");

    const handleInput = (e) => {

        e.persist();
        setUser({ ...user, [e.target.name]: e.target.value });

    }

    const addUser = async (e) => {

        e.preventDefault();

        var data = {

            'username': user.username,
            'email': user.email,
            'password': user.password,
            'role': user.role
        }

        await axios.post('/register', data).then(res => {

            if(res.status === 200){

                setMessage("User added successfully!");
            }
        })
    }

    return (

        <div className="add-user-container">
            <div className="add-user-content">
                <h1>Add user</h1>
                <div className="form">
                    <form onSubmit={addUser}>
                        <div class="uk-margin">
                            <input class="uk-input" type="text" onChange={handleInput} value={user.username} placeholder="Username" name="username"/>
                        </div>
                        <div class="uk-margin">
                            <input class="uk-input" type="email" onChange={handleInput} value={user.email} placeholder="Email" name="email" />
                        </div>
                        <div class="uk-margin">
                            <input class="uk-input" type="password" onChange={handleInput} value={user.password} placeholder="Password" name="password"/>
                        </div>
                        <div class="uk-margin">
                            <select class="uk-select" name="role" onChange={handleInput}>
                                <option defaultValue={""} hidden>Select...</option>
                                <option value={0}>Developer</option>
                                <option value={1}>Admin</option>
                            </select>
                        </div>
                        <button type="submit" className="btn btn-default btn-background uk-margin-top">Add user</button>
                    </form>
                    <span className="user-added-message">{message}</span>
                </div>
            </div>
        </div>
    )


}

export default AddUser;