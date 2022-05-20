import React from "react";
import { useNavigate } from 'react-router-dom';
import "./login.scss";

function Login() {

    const navigate = useNavigate();

    const login = () => {

        navigate('/home');

    }

    return (
        <div className="login-container">
            <div class="uk-section uk-section-muted uk-flex uk-flex-middle uk-animation-fade" uk-height-viewport>
                <div class="uk-width-1-1">
                    <div class="uk-container">
                        <div class="uk-grid-margin uk-grid uk-grid-stack" uk-grid>
                            <div class="uk-width-1-1@m">
                                <div class="uk-margin uk-width-large uk-margin-auto uk-card uk-card-default uk-card-body uk-box-shadow-large">
                                    <h3 class="uk-card-title uk-text-center">Back to work?</h3>
                                    <hr></hr>
                                    <form onSubmit={login}>
                                        <div class="uk-margin">
                                            <div class="uk-inline uk-width-1-1">
                                                <span class="uk-form-icon" uk-icon="icon: mail"></span>
                                                <input class="uk-input uk-form-large" type="text" />
                                            </div>
                                        </div>
                                        <div class="uk-margin">
                                            <div class="uk-inline uk-width-1-1">
                                                <span class="uk-form-icon" uk-icon="icon: lock"></span>
                                                <input class="uk-input uk-form-large" type="password" />
                                            </div>
                                        </div>
                                        <div class="uk-margin">
                                            <button class="uk-button uk-button-large uk-width-1-1 login-btn">Login</button>
                                        </div>
                                    </form>
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