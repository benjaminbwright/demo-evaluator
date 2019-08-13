import React from 'react';
import { Link } from 'react-router-dom';

function ProjectListItem() {
  return(
    <div>
      <li>
        <h3>Project 1</h3>
        <p><Link to={`/project/1/evaluate`}>Some info about project 1</Link></p>
      </li>
      <li>
        <h3>Project 2</h3>
        <p><Link to={`/project/2/evaluate`}>Some info about project 1</Link></p>
      </li>
      <li>
        <h3>Project 3</h3>
        <p><Link to={`/project/3/evaluate`}>Some info about project 1</Link></p>
      </li>
    </div>
  );
}

function ProjectList() {
  return(
    <ul>
      <ProjectListItem />
    </ul>
  );
}

export default function Projects() {
  return(
    <div className="container">
      <h1>Projects Up For Evaluation</h1>
      <ProjectList />
      <p>You'll be able to pick a project to evaluate.</p>
    </div>
  );
}