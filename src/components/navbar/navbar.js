import React from 'react';
import { useNavigate } from 'react-router-dom';
import './navbar.scss';

function NavBar() {
    const navigate = useNavigate();

    const logout = () => {

        localStorage.removeItem("auth");
        navigate('/');
    }
    return (

            <div className="navbar-container">
                <nav className="uk-container uk-navbar">
                    <div className="uk-navbar-left">
                        <ul className="uk-navbar-nav">
                            <li className="uk-active">
                                <a href="#">Task<strong>Manager</strong></a>
                            </li>
                        </ul>
                    </div>
                    <div className="uk-navbar-right">
                        <ul className="uk-navbar-nav uk-visible@s ul-list">
                            <li><a className="uk-text-large" href="#0">projects</a></li>
                            <li><button className="btn-default logout-btn" onClick={logout}>LOGOUT</button></li>
                            
                        </ul>
                        <a href="#" className="uk-navbar-toggle uk-hidden@s" uk-navbar-toggle-icon uk-toggle="target: #sidenav"></a>
                    </div>
                </nav>
                <div id="sidenav" uk-offcanvas="flip: true" className="uk-offcanvas">
                    <div className="uk-offcanvas-bar">
                        <ul className="uk-nav">
                            <li><a className="uk-text-large" href="#0">PROJECTS</a></li>
                        </ul>
                    </div>
                </div>
            </div>


    )
}

export default NavBar;