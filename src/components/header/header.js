import React from 'react';
import './header.scss';
import { Link } from "react-router-dom";
const tasksImg = require('../../assets/images/task.png');

function Header() {

    return (


        <div className="header-container">
            <div className="header-content max-width">
                <div class="uk-grid" uk-grid>
                    <div class="uk-width-1-2 left-side">
                        <h1>Welcome back<br /> {JSON.parse(localStorage.getItem('auth')).username}</h1>
                        <p>Project Task Manager is an application that helps you create projects and tasks. The application has two roles, that of user and that of admin, the difference being in terms of functionality. Below is a button that will guide you to the list of projects.</p>
                        <div className="button-projects">
                            <Link to="/projects" className="btn-default margin-top">SEE THE PROJECTS</Link>
                        </div>
                    </div>
                    <div class="uk-width-1-2 right-side">
                        <img src={tasksImg} className="header-img" alt="Tasks" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Header;