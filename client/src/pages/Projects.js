import React from 'react';
import { Link } from 'react-router-dom';

function ProjectListItem({project}) {
  return(
    <div>
      
      <li>
        <h3>{project.name}</h3>
        <p><Link to={`/project/${project.id}/evaluate`}>Some info about {project.name}</Link></p>
      </li>
    </div>
  );
}

function ProjectList({projects}) {
  return(
    <ul>
      {projects.map((project, index) => (
        <ProjectListItem key={index} project={project} />
      ))}
      
    </ul>
  );
}

export default function Projects(props) {
  return(
    <div className="container">
      <h1>Projects Up For Evaluation</h1>
      <ProjectList {...props} />
      <p>You'll be able to pick a project to evaluate.</p>
    </div>
  );
}