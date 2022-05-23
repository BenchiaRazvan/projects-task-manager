import React from 'react';
import './comments.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAlt } from '@fortawesome/free-solid-svg-icons';


function Comments(props) {

    var comments = props.comments;

    return (

        <div className="comments-container">

            <div className="comments-content">
                <hr />
                {
                   comments ?  comments.map((item, index) => {

                        return (
                            <div className="comment" key={index}>
                                <div className="content">
                                    <div className="display-flex">
                                        <span className="user-alt"><FontAwesomeIcon icon={faUserAlt}></FontAwesomeIcon></span>
                                        <div className="comment-description">
                                            <div className="right-side-comment">
                                                <h5>{item.username}</h5>
                                                <hr></hr>
                                                <p dangerouslySetInnerHTML={{ __html: item.description }}></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )

                    })
                    : ""
                }

            </div>
        </div>
    )
}

export default Comments;