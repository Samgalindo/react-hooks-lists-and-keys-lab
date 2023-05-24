import React from "react";
import ProjectItem from "./ProjectItem";
import user from "../data/user"

function ProjectList({ projects }) {
  console.log(projects);
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{projectArray}</div>
    </div>
  );
}

const projectArray= user.projects.map((projectObj) => {
  return (
     <ProjectItem key={projectObj.id} name= {projectObj.name} 
     about={projectObj.about} technologies={projectObj.technologies}/>
  )  
  })



export default ProjectList;

{/* render ProjectItem components here */}