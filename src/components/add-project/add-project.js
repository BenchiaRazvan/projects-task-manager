import axios from 'axios';
import React, { useState } from 'react';
import './add-project.scss';

function AddProject() {

    const [projectName, setProjectName] = useState("")

    const handleInput = (e) => {

        setProjectName(e.target.value);
    }

    const addProject = (e) => {

        e.preventDefault();

        const data = {

            'name': projectName
        }

        axios.post('/project', data).then(res => {

            console.log(data)

            if(res.status === 200){

                window.location.reload(false);
            }
        })
        
    }
    return (

        <div className="add-project-container">
            <div className="add-project-content max-width">
                <h3>Add project</h3>
                <form>
                    <div className="uk-margin">
                        <input className="uk-input" type="text" name="name" placeholder="Project title" value={projectName} onChange={handleInput}/>
                    </div>
                    <button type="submit" onClick={addProject} className="btn-default btn-background">Add project</button>
                </form>
            </div>
        </div>
    )
}

export default AddProject;