import React, { useEffect, useState } from 'react';
import './projects.scss';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faDiagramProject, faListCheck } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';


function ProjectsList() {

    const [projectList, setProjectList] = useState([])
    const userId = JSON.parse(localStorage.getItem('auth')).userid;
    const navigate = useNavigate();

    useEffect(() => {

        axios.get(`/projects/${userId}`).then(res => {

            if (res.status === 200) {

                setProjectList(res.data);

            }
        })

    }, [])

    const deleteProject = async (e) => {

        await axios.delete(`project/${e.target.id}`).then(res => {

            navigate('/projects');
        })
    }
    return (
        <>
            <div className="projects-container">
                <div className="projects-content max-width">
                    <div className="space-between">
                        {
                            JSON.parse(localStorage.getItem('auth')).role == 1  ? 
                                <h2>The list of projects...</h2> : 
                                <h2>You can see below the projects you are assigned to...</h2>
                        }
                    </div>
                    <hr />
                    <div className="uk-grid" uk-grid="true">
                        {
                            projectList ? projectList.map((item, index) => {
                                return (
                                    <div className="uk-width-1-3" key={index}>
                                        <div className="project">
                                            <div className="project-content">
                                                <h4><FontAwesomeIcon icon={faDiagramProject}></FontAwesomeIcon>{item.name}</h4>
                                                <p>Click on task button to see all the tasks for this project</p>

                                                <div className={`${localStorage.getItem('auth') ? JSON.parse(localStorage.getItem('auth')).role === 1 ? 'space-between' : "float-right" : "float-right"}`}>
                                                    {
                                                        localStorage.getItem('auth') ? JSON.parse(localStorage.getItem('auth')).role === 1 ?
                                                            <> <button className="btn-danger" id={item.projid} onClick={deleteProject}>delete</button><Link to={`/projects/tasks/${item.projid}`} state={{prjectName: item.name}} className="btn-default float-right"><FontAwesomeIcon icon={faListCheck}></FontAwesomeIcon> tasks</Link></> : <Link to={`/projects/tasks/${item.projid}`}  className="btn-default float-right"><FontAwesomeIcon icon={faListCheck}></FontAwesomeIcon>tasks</Link> : <Link to={`/projects/tasks/${item.projid}`}  className="btn-default float-right"><FontAwesomeIcon icon={faListCheck}></FontAwesomeIcon>tasks</Link>

                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )

                            }) : <h4>No projects available for you</h4>
                        }

                    </div>

                </div>
            </div>
            
        </>


    )
}

export default ProjectsList;