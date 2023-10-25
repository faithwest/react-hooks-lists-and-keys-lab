import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList(props) {
  
  const { projects } = props;

  return (
    <div> 
      <h2>Projects</h2>  
      <ul>
        {projects.map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </ul>
    </div>
  );
}

export default ProjectList;

