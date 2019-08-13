// import dependencies
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// import styles
import './App.css'

// import pages
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';

//import components
import HeaderNav from './components/HeaderNav'

function Welcome() {
  return(
    <div>
      <h1>Welcome to the project evaluator</h1>
      <p>You'll be able to login or register here. If you cant' </p>
    </div>
  );
}

function Evaluation() {
  return(
    <div>
      <h1>Project Evaluation</h1>
      <p>This is the project evaluation page.</p>
      <p>You'll be able to use sliders rate the projects on various criteria.</p>

      <button>Submit Evaluation</button>
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
        <Route exact path="/project/:id" component={ProjectDetail} />
        <Route exact path="/project/:id/evaluate" component={Evaluation} />
      </Router>
    </div>

  );
}

export default App;
