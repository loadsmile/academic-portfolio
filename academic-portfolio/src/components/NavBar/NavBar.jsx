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
        <li className={styles.navbarLink}>
          <Link to="/research" className={styles.linkButton}>Research</Link>
        </li>
        <li className={styles.navbarLink}>
          <Link to="/teaching" className={styles.linkButton}>Teaching</Link>
        </li>
        <li className={styles.navbarLink}>
          <Link to="/publications" className={styles.linkButton}>Publications</Link>
        </li>
        <li className={styles.navbarLink}>
          <Link to="/contact" className={styles.linkButton}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
