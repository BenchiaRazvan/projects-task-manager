import React, {useEffect, useState} from 'react';
import NavBar from '../components/navbar/navbar';
import SingleTask from '../components/task/task';
import './pages.scss';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export const Task = () => {

    const taskId = useParams().taskId;
    const [taskDetails, setTaskDetails] = useState({});


    useEffect(() => {

        axios.get(`/task/${taskId}`).then(res => {

            setTaskDetails(res.data[0]);

        })
    }, [])
    return (

        <div className="task-page-container">
            <NavBar/>
            <SingleTask task={taskDetails}/>

        </div>
    )
}