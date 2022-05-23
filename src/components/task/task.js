import React, { useEffect, useState } from 'react';
import './task.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { toolbarOptions } from '../../utils/informations.js';
import { faTasks } from '@fortawesome/free-solid-svg-icons';
import 'react-quill/dist/quill.snow.css';
import Comments from '../comments/comments';
import axios from 'axios';

const ReactQuill = require('react-quill'); // CommonJS

function SingleTask(props) {

    const taskId = useParams().taskId;
    const [commentDescription, setCommentDescription] = useState("");
    const [users, setUsers] = useState([]);
    
    var projectID = useLocation().state.projID;


    const onEditorChange = (e) => {

        setCommentDescription(e)
    }

    const addComment = async () => {

        const comment = {

            'userid': JSON.parse(localStorage.getItem('auth')).userid,
            'taskid': taskId,
            'description': commentDescription
        }

        await axios.post('/comment', comment).then(res => {

            window.location.reload(false);
        })
    }

    const handleSelect = async (e) => {

        const status = e.target.value;
        const data = {

            'status': e.target.value
        }

        await axios.patch(`/task/${taskId}`, data).then(res => {

            if(res.status === 200){

                window.location.reload(false);
            }
        })
    }
    const handleSelectUsers = async (e) => {
        const userId = e.target.value;
        
        const data = {
            'userid': Number(userId)
        }
        console.log(data)
        await axios.patch(`/task/${taskId}`, data).then(res => {

            if(res.status === 200){

                window.location.reload(false)
            }

        })
    }

    var modules = {

        toolbar: toolbarOptions
    }
    
    useEffect(() => {

        axios.get(`/project/assigned/${projectID}`).then(res => {

            if (res.status === 200) {

                setUsers(res.data)
            }
        })


    }, [])

    const data = props.task;



    return (

        <div className="signle-task-container">
            <div className="single-task-content max-width">
                <div className="single-task">
                    <div className="space-between border-bottom">
                        <h1><FontAwesomeIcon icon={faTasks} />{data.name}</h1>
                        <div class="uk-form-controls">
                            <select class="uk-select" id="form-horizontal-select" value={data.status} onChange={handleSelect}>
                                <option className="color-option" value="To Do" >To Do</option>
                                <option value="In Progress">In Progress</option>
                                <option className="color-option" value="Done">Done</option>
                            </select>
                        </div>
                        <div class="uk-form-controls">
                            <select class="uk-select" id="form-horizontal-select" value={data.userid} onChange={handleSelectUsers}>
                            <option value="0">Unassigned</option>
                            {
                                users ? users.map((item, index) => {
                                    return (

                                        <option className="padding-left-right" value={item.userid}><FontAwesomeIcon icon={faUserAlt}></FontAwesomeIcon>{item.username}</option>
                                    )                        
                                }) : ""
                            }
                            </select>
                        </div>
                    </div>
                    <div className="uk-grid" uk-grid>
                        <div className="uk-width-3-5">
                            <div className="task-description">
                                <p dangerouslySetInnerHTML={{ __html: data.description }}></p>
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
                                    onChange={onEditorChange}
                                />
                                <button type="button" onClick={addComment} className="uk-margin-top btn-default btn-background">Add comment</button>
                            </div>
                        </div>
                        <div className="uk-width-2-5">
                            <div className="comments-component">
                                <Comments comments={data.comments} />
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default SingleTask;