import React from 'react';
import NavBar from '../components/navbar/navbar';
import TasksList from '../components/tasks/tasks';

export const Tasks = () => {

    return (
        <div className="tasks-page-container">
            <NavBar />
            <TasksList />
        </div>

    )
}