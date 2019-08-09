import React from 'react';
import { Link } from 'react-router-dom';


export default function HeaderNav() {
  return(
    <nav style={styles.nav}>
      <li style={styles.li}>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/projects">Projects</Link>
      </li>
    </nav>
  );
}

const styles = {
  nav: {
    "background":"red",
  },
  li: {
    "color":"white"
  }
}