// import dependencies
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

// import styles
import './App.css'

// import pages
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Welcome from './pages/Welcome';

//import components
import HeaderNav from './components/HeaderNav'

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

function NoMatch() {
  return(
    <div>Sorry. Page not found.</div>
  );
}

class App extends Component {

  state = {
    projects: [
      {
        id: 1,
        name: "The best project"
      }
    ]

  }

  render() {
    return(
      <div>     
        <Router>
          <HeaderNav />
          <Switch>
            <Route exact path="/" component={Welcome} />
            <Route exact path="/projects" render={() => <Projects projects={this.state.projects} />} />
            <Route exact path="/project/:id" component={ProjectDetail} />
            <Route exact path="/project/:id/evaluate" component={Evaluation} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
