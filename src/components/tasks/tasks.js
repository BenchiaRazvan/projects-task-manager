import React from 'react';
import './tasks.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import 'react-quill/dist/quill.snow.css';
import { toolbarOptions } from '../../utils/informations.js';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const ReactQuill = require('react-quill'); // CommonJS


function TasksList() {

    var modules = {

        toolbar: toolbarOptions
    }
    return (
        <>
            <div className="tasks-container">
                <div className="tasks-content max-width padding">
                    <div className="space-between">
                        <h2>You can see below the projects you are assigned to...</h2>
                        <button uk-toggle="target: #my-id" className="btn-default btn-background">Create task</button>
                    </div>
                    <hr />
                    <table class="uk-table uk-table-striped tasks-table">
                        <thead className="thead-tasks">
                            <tr>
                                <th>Task ID</th>
                                <th>Title</th>
                                <th>Assigned to</th>
                                <th>Status</th>
                                <th>Created</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><Link to="/task/1" className="text-decoration">UKT-12</Link></td>
                                <td><Link to="/projects" className="text-decoration">[]Get in touch</Link></td>
                                <td><Link to="/projects" className="text-decoration"><FontAwesomeIcon icon={faUser} className="user-icon"></FontAwesomeIcon>Benchia Razvan</Link></td>
                                <td><Link to="/projects" className="text-decoration">To do</Link></td>
                                <td><Link to="/projects" className="text-decoration">2020-05-19</Link></td>
                            </tr>
                            <tr>
                                <td><Link to="/projects" className="text-decoration">UKT-13</Link></td>
                                <td><Link to="/projects" className="text-decoration">[]Get in touch</Link></td>
                                <td><Link to="/projects" className="text-decoration"><FontAwesomeIcon icon={faUser} className="user-icon"></FontAwesomeIcon>Benchia Razvan</Link></td>
                                <td><Link to="/projects" className="text-decoration">To do</Link></td>
                                <td><Link to="/projects" className="text-decoration">2020-05-19</Link></td>
                            </tr>
                            <tr>
                                <td><Link to="/projects" className="text-decoration">UKT-14</Link></td>
                                <td><Link to="/projects" className="text-decoration">[]Get in touch</Link></td>
                                <td><Link to="/projects" className="text-decoration"><FontAwesomeIcon icon={faUser} className="user-icon"></FontAwesomeIcon>Benchia Razvan</Link></td>
                                <td><Link to="/projects" className="text-decoration">To do</Link></td>
                                <td><Link to="/projects" className="text-decoration">2020-05-19</Link></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div id="my-id" uk-modal="true">
                <div class="uk-modal-dialog uk-modal-body">
                    <h2 class="uk-modal-title">Create task for UKT-project</h2>
                    <hr></hr>
                    <form>
                        <div class="uk-margin">
                            <input class="uk-input" type="text" placeholder="Task title" />
                        </div>
                        <div class="uk-margin">
                            <select class="uk-select">
                                <option>Option 01</option>
                                <option>Option 02</option>
                            </select>
                        </div>
                        <ReactQuill
                            theme="snow"
                            modules={modules}
                            placeholder={"Add your task description..."}
                            name="task-description"
                            id="task-description"
                        />
                        <button type="submit" className="btn-default btn-background uk-margin-top">Add</button>
                    </form>
                    <button class="uk-modal-close" style={{ display:'none' }} type="button"></button>
                </div>
            </div>
        </>

    )
}

export default TasksList;