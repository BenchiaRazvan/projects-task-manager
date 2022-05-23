import React from "react";
import AddProject from "../components/add-project/add-project";
import NavBar from "../components/navbar/navbar";
import ProjectsList from "../components/projects/projects";

export const Projects = () => {

    return (

        <div className="projects-page">
              <NavBar />
              <ProjectsList />
              { JSON.parse(localStorage.getItem('auth')).role === 1 ?  <AddProject /> : ""}
             
        </div>
      
    )

}