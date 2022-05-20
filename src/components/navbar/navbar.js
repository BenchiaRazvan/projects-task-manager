import React from 'react';
import './navbar.scss';

function NavBar() {


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
                        <ul className="uk-navbar-nav uk-visible@s">
                            <li><a className="uk-text-large" href="https://shubhamjain.co/about/">about</a></li>
                            <li><a className="uk-text-large" href="https://shubhamjain.co/">blog</a></li>
                        </ul>
                        <a href="#" className="uk-navbar-toggle uk-hidden@s" uk-navbar-toggle-icon uk-toggle="target: #sidenav"></a>
                    </div>
                </nav>
                <div id="sidenav" uk-offcanvas="flip: true" className="uk-offcanvas">
                    <div className="uk-offcanvas-bar">
                        <ul className="uk-nav">
                            <li><a className="uk-text-large" href="https://shubhamjain.co/about/">about</a></li>
                            <li><a className="uk-text-large" href="https://shubhamjain.co/">blog</a></li>
                        </ul>
                    </div>
                </div>
            </div>

 

    )
}

export default NavBar;