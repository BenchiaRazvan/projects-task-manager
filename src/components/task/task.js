import React from 'react';
import './task.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { toolbarOptions } from '../../utils/informations.js';
import { faTasks } from '@fortawesome/free-solid-svg-icons';
import 'react-quill/dist/quill.snow.css';
import Comments from '../comments/comments';

const ReactQuill = require('react-quill'); // CommonJS

function SingleTask() {
    var modules = {

        toolbar: toolbarOptions
    }


    return (

        <div className="signle-task-container">
            <div className="single-task-content max-width">
                <div className="single-task">
                    <div className="space-between border-bottom">
                        <h1><FontAwesomeIcon icon={faTasks} />Get in touch popup</h1>
                        <div class="uk-form-controls">
                            <select class="uk-select" id="form-horizontal-select">
                                <option className="color-option">To do</option>
                                <option>In progress</option>
                                <option className="color-option">Done</option>
                            </select>
                        </div>
                    </div>
                    <div className="uk-grid" uk-grid>
                        <div className="uk-width-3-5">
                            <div className="task-description">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            </div>
                            <p className="task-description"></p>
                            <div className="add-comment">
                                <h3>Add a comment...</h3>
                                <ReactQuill
                                    theme="snow"
                                    modules={modules}
                                    placeholder={"Add your task description..."}
                                    name="task-description"
                                    id="task-description"
                                />
                            </div>
                        </div>
                        <div className="uk-width-2-5">
                        <div className="comments-component">
                                <Comments />
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default SingleTask;