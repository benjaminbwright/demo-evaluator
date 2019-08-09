import React from 'react';
import { Link } from 'react-router-dom';
import './HeaderNav.scss';


export default function HeaderNav() {
  return(
    <nav id="HeaderNav">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
      </ul>
    </nav>
  );
}
