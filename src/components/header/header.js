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
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
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