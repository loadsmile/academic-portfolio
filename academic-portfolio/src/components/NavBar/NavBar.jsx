import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';

const NavBar = () => {
  return (
    <nav className={styles.navBar}>
      <div>
        <h1 className={styles.navbarTitle}><Link to="/main">Susana Barradas</Link></h1>
      </div>
      <ul className={styles.navbarList}>
        <li className={styles.navbarLink}><Link to="/research">Research</Link></li>
        <li className={styles.navbarLink}><Link to="/teaching">Teaching</Link></li>
        <li className={styles.navbarLink}><Link to="/projects">Projects</Link></li>
        <li className={styles.navbarLink}><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
