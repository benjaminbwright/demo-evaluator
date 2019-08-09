import React from 'react';

function ProjectListItem() {
  return(
    <div>
      <li>
        <h3>Project 1</h3>
        <p>Some info about project 1</p>
      </li>
      <li>
        <h3>Project 2</h3>
        <p>Some info about project 2</p>
      </li>
      <li>
        <h3>Project 3</h3>
        <p>Some info about project 3</p>
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