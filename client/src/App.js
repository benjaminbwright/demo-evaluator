import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import HeaderNav from './components/HeaderNav'

function Welcome() {
  return(
    <div>
      <h1>Welcome to the project evaluator</h1>
      <p>You'll be able to login or register here. If you cant' </p>
    </div>
  );
}

function Projects() {
  return(
    <div>
      <h1>Projects Up For Evaluation</h1>
      <p>This will be a list of projects to be evaluated.</p>
      <p>You'll be able to pick a project to evaluate.</p>
    </div>
  );
}

function Project() {
  return(
    <div>
      <h1>Project Detail Page</h1>
      <p>This is the project detail page.</p>
      <p>You'll be able to pick a project to evaluate.</p>
      <button>Evaluate</button>
    </div>
  );
}

function App() {
  return (
    <div>     
      <Router>
        <HeaderNav />
        <Route exact path="/" component={Welcome} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/project" component={Project} />
      </Router>
    </div>

  );
}

export default App;
