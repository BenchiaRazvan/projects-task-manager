import React from 'react';
import './projects.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faDiagramProject, faListCheck } from '@fortawesome/free-solid-svg-icons';


function ProjectsList() {


    return (

        <div className="projects-container">
            <div className="projects-content max-width">
                <div className="space-between">
                    <h2>You can see below the projects you are assigned to...</h2>
                    {/* {
                        JSON.parse(localStorage.getItem('auth').role == "admin") ? 
                            <button className="btn-default">Create project</button> : ""

                    } */}
                </div>
                <hr />
                <div className="uk-grid" uk-grid>
                    <div className="uk-width-1-3">
                        <div className="project">
                            <div className="project-content">
                                <h4><FontAwesomeIcon icon={faDiagramProject}></FontAwesomeIcon>UKT Project</h4>
                                <p>Click on task button to see all the tasks for this project</p>
                                
                                <div className={`${localStorage.getItem('auth') ? JSON.parse(localStorage.getItem('auth').role == "admin") ? 'space-between' : "float-right" : "float-right"}`}>
                                    {   
                                        localStorage.getItem('auth') ? JSON.parse(localStorage.getItem('auth').role == "admin") ?
                                           <> <button className="btn-danger">delete</button><Link to="/projects/tasks/2" className="btn-default float-right"><FontAwesomeIcon icon={faListCheck}></FontAwesomeIcon> tasks</Link></> : <Link to="/projects/tasks/2" className="btn-default float-right"><FontAwesomeIcon icon={faListCheck}></FontAwesomeIcon>tasks</Link> :<Link to="/projects/tasks/2" className="btn-default float-right"><FontAwesomeIcon icon={faListCheck}></FontAwesomeIcon>tasks</Link>
                                            
                                    }
                                    
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ProjectsList;