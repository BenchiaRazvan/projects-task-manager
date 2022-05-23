import React, { useEffect, useState } from 'react';
import './tasks.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useParams, useLocation } from 'react-router-dom';
import 'react-quill/dist/quill.snow.css';
import { faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { toolbarOptions } from '../../utils/informations.js';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import axios from 'axios';

const ReactQuill = require('react-quill'); // CommonJS


function TasksList() {

    const projectName = useLocation().state.prjectName; 
    const projectId = useParams().projectId;
    const [tasksList, setTasksList] = useState([]);
    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);
    const onOpenUserModal = () => setOpenUserModal(true);
    const onCloseUserModal = () => setOpenUserModal(false);
    const [open, setOpen] = useState(false);
    const [openUserModal, setOpenUserModal] = useState(false);
    const [taskDescription, setTaskDescription] = useState("");
    const [users, setUsers] = useState([]);
    const [unassignedUsers, setUnsignedUsers] = useState([])
    const [assignErroMessage, setAssignErrorMessage] = useState("");
    const [taskDetails, setTaskDetails] = useState({

        'name': '',
        'userid': '',

    });

    const [assignedDeveloper, setAssignedDeveloper] = useState({

        'projid': '',
        'userid': '',
    })


    var modules = {

        toolbar: toolbarOptions
    }

    var matches = projectName.match(/\b(\w)/g); // ['J','S','O','N']
    var acronym = matches.join(''); // JSON


    useEffect(() => {

        axios.get(`/tasks/${projectId}`).then(res => {

            if (res.status === 200) {

                setTasksList(res.data)

            }

        })
        axios.get(`/project/assigned/${projectId}`).then(res => {

            if (res.status === 200) {

                setUsers(res.data)
            }
        })
        axios.get(`/project/unassigned/${projectId}`).then(res => {

            setUnsignedUsers(res.data)
            console.log(res.data)
        })
    }, [])


    const handleInput = (e) => {

        e.persist();
        setTaskDetails({ ...taskDetails, [e.target.name]: e.target.value });

    }

    async function inputAssignToProject(e){

        console.log(e.target.value)

        e.persist();
        setAssignedDeveloper({ ...assignedDeveloper, [e.target.name]: e.target.value });

    }

    async function addTask(e) {



        e.preventDefault();


        const data = {

            projID: Number(projectId),
            name: taskDetails.name,
            description: taskDescription,
            userid: Number(taskDetails.userid)

        }

        axios.post('/task', data).then(res => {

            if(res.status === 200){
                window.location.reload(false)
            }
        })
    }

    async function assignDeveloperToProject(e) {

        e.preventDefault();

        const data = { 
            
            projid: projectId,
            userid: Number(assignedDeveloper.userid)
        }

        if(assignedDeveloper.userid == 0) {

            console.log("yes")
            setAssignErrorMessage("Please select a value");
        }
        else{

            await axios.post('/project/add', data).then(res => {

                if(res.status === 200){

                    window.location.reload(false)
                }
            })
        }
    }

    var htmlTable = tasksList.length !== 0 ? tasksList.map((item, index) => {

        return (

            <tr key={index}>
                <td><Link to={`/task/${item.taskid}`} state={{projID: projectId}} className="text-decoration">{acronym}-{item.taskid}</Link></td>
                <td><Link to={`/task/${item.taskid}`} state={{projID: projectId}} className="text-decoration">[]{item.name}</Link></td>
                <td><Link to={`/task/${item.taskid}`} state={{projID: projectId}} className="text-decoration"><FontAwesomeIcon icon={faUser} className="user-icon"></FontAwesomeIcon>{item.userid ? item.username[0].username : "Unassigned"}</Link></td>
                <td><Link to={`/task/${item.taskid}`} state={{projID: projectId}} className="text-decoration">{item.status}</Link></td>
                <td><Link to={`/task/${item.taskid}`} state={{projID: projectId}} className="text-decoration">{item.created_at.slice(0, 19).replace('T', ' ')}</Link></td>
            </tr>
        )
    }) : <h4 className='no-tasks'>No tasks for this project...</h4>

    return (
        <>
            <div className="tasks-container">
                <div className="tasks-content max-width padding">
                    <div className="space-between">

                        <h2>You can see below the list of tasks</h2>
                        <button onClick={onOpenModal} className="btn-default btn-background">Create task</button>
                        {

                            JSON.parse(localStorage.getItem('auth')).role == 1 ? <button onClick={onOpenUserModal} className="btn-default btn-background">Assign user</button> : ""

                        }
                    </div>
                    <hr />
                    <table className="uk-table uk-table-striped tasks-table">
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
                            {
                                htmlTable
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <Modal open={open} onClose={onCloseModal} center>
                <div className="modal-body">
                    <h2 className="uk-modal-title">Create task for UKT-project</h2>
                    <hr></hr>
                    <form>
                        <div className="uk-margin">
                            <input className="uk-input" type="text" name="name" onChange={handleInput} value={taskDescription.name} placeholder="Task title" />
                        </div>
                        <div className="uk-margin">
                            <select className="uk-select" id="form-horizontal-select" name="userid" onChange={handleInput}>
                                <option value="0">Unassigned</option>
                                {

                                    users ? users.map((item, index) => {
                                        return (

                                            <option key={index} className="padding-left-right" value={item.userid}><FontAwesomeIcon icon={faUserAlt}></FontAwesomeIcon>{item.username}</option>
                                        )
                                    }) : ""
                                }
                            </select>
                        </div>
                        <ReactQuill
                            theme="snow"
                            modules={modules}
                            placeholder={"Add your task description..."}
                            name="task-description"
                            id="task-description"
                            onChange={(e) => setTaskDescription(e)}
                        />
                        <button onClick={async (e) => { await addTask(e) }} className="btn-default btn-background uk-margin-top">Add</button>
                    </form>
                    <button className="uk-modal-close" style={{ display: 'none' }} type="button"></button>
                </div>
            </Modal>

            <Modal open={openUserModal} onClose={onCloseUserModal} center>
            <div className="modal-body">
                    <h2 className="uk-modal-title">Assign developer to {projectName} project.</h2>
                    <hr></hr>
                    <form>
                        <div className="uk-margin">
                            <select className="uk-select" name="userid" onChange={async (e) => { await inputAssignToProject(e) }}>
                                <option defaultValue={""} hidden>Select...</option>
                                {

                                    unassignedUsers.length != 0 ? unassignedUsers.map((item, index) => {
                                        return (

                                            <option key={index} className="padding-left-right" value={item.userid}><FontAwesomeIcon icon={faUserAlt}></FontAwesomeIcon>{item.username}</option>
                                        )
                                    }) : <option value="0">All the developers are assigned to this project</option>
                                }
                            </select>
                            { assignErroMessage ? assignErroMessage : ""}
                        </div>
                        <button onClick={async (e) => { await assignDeveloperToProject(e) }} className="btn-default btn-background uk-margin-top">Add</button>
                    </form>
                    <button className="uk-modal-close" style={{ display: 'none' }} type="button"></button>
                </div>
            </Modal>
        </>

    )
}

export default TasksList;