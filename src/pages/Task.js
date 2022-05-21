import React from 'react';
import NavBar from '../components/navbar/navbar';
import SingleTask from '../components/task/task';
import './pages.scss';

export const Task = () => {

    return (

        <div className="task-page-container">
            <NavBar />
            <SingleTask />
        </div>
    )
}