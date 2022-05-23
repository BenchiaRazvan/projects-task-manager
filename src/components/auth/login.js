import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./login.scss";

function Login() {

    const navigate = useNavigate();

    const [errorMessage, setErrorMessage] = useState("");
    const [userDetails, setUserDetails] = useState({
        'email': '',
        'password': ''
    });

    const handleInput = (e) => {

        e.persist();
        setUserDetails({ ...userDetails, [e.target.name]: e.target.value });

    }
    const login = async (e) => {

        e.preventDefault()

        const data = {

            'email': userDetails.email,
            'password': userDetails.password

        }
        console.log(data)
        await axios.post("/login", data).then(res => {

            if (res.data.length == 0) {

                setErrorMessage("Invalid credentials")
            }
            else {
                let data = {

                    'username': res.data[0].username,
                    'userid': res.data[0].userid,
                    'role': res.data[0].role,
                    'email': res.data[0].email
                }

                localStorage.setItem('auth', JSON.stringify(data));
                navigate('/home')
                window.location.reload(false)
            }

           
        })


    }

    return (
        <div className="login-container">
            <div className="uk-section uk-section-muted uk-flex uk-flex-middle uk-animation-fade" uk-height-viewport>
                <div className="uk-width-1-1">
                    <div className="uk-container">
                        <div className="uk-grid-margin uk-grid uk-grid-stack" uk-grid>
                            <div className="uk-width-1-1@m">
                                <div className="uk-margin uk-width-large uk-margin-auto uk-card uk-card-default uk-card-body uk-box-shadow-large">
                                    <h3 className="uk-card-title uk-text-center">Back to work?</h3>
                                    <hr></hr>
                                    <form onSubmit={login}>
                                        <div className="uk-margin">
                                            <div className="uk-inline uk-width-1-1">
                                                <span className="uk-form-icon" uk-icon="icon: mail"></span>
                                                <input className="uk-input uk-form-large" name="email" onChange={handleInput} value={userDetails.email} type="text" />
                                            </div>
                                        </div>
                                        <div className="uk-margin">
                                            <div className="uk-inline uk-width-1-1">
                                                <span className="uk-form-icon" uk-icon="icon: lock"></span>
                                                <input className="uk-input uk-form-large" name="password" onChange={handleInput} value={userDetails.password} type="password" />
                                            </div>
                                        </div>
                                        <div className="uk-margin">
                                            <button type="submit" className="uk-button uk-button-large uk-width-1-1 login-btn">Login</button>
                                        </div>
                                    </form>
                                    {errorMessage ? <span className="red">{errorMessage}</span> : ""}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Login;