import React from 'react';
import './comments.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAlt } from '@fortawesome/free-solid-svg-icons';


function Comments() {


    return (

        <div className="comments-container">

            <div className="comments-content">
                <hr />
                <div className="comment">
                    <div className="content">
                        <div className="display-flex">
                            <span className="user-alt"><FontAwesomeIcon icon={faUserAlt}></FontAwesomeIcon></span>
                            <div className="comment-description">
                                <div className="right-side-comment">
                                    <h5>Benchia Razvan</h5>
                                    <hr></hr>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Comments;