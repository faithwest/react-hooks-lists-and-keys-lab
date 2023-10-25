import React from "react";
import ProjectList from "./ProjectList";

function ProjectItem(props) {
  const { projectName, technologies } = props;

  return (
    <div className="project-card">
      <h2>{projectName}</h2>
      <div className="platforms">
        {technologies && Array.isArray(technologies) ? (
          technologies.map((technology, index) => (
            <span key={index}>{technology}</span>
          ))
        ) : (
          <p>No technologies available</p>
        )}
      </div>
    </div>
  );
}
export default ProjectItem;

