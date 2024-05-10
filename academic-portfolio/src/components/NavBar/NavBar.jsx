import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.css';

const NavBar = () => {
  // This function determines the class for NavLink based on its active state
  const getNavLinkClass = (isActive) => {
    return isActive ? `${styles.linkButton} ${styles.linkButtonActive}` : styles.linkButton;
  };

  return (
    <nav className={styles.navBar}>
      <div>
        <h1 className={styles.navbarTitle}><NavLink to="/main">Susana Barradas</NavLink></h1>
      </div>
      <ul className={styles.navbarList}>
        <li className={styles.navbarLink}>
          <NavLink to="/research" className={({ isActive }) => getNavLinkClass(isActive)}>
            Research
          </NavLink>
        </li>
        <li className={styles.navbarLink}>
          <NavLink to="/teaching" className={({ isActive }) => getNavLinkClass(isActive)}>
            Teaching
          </NavLink>
        </li>
        <li className={styles.navbarLink}>
          <NavLink to="/publications" className={({ isActive }) => getNavLinkClass(isActive)}>
            Publications
          </NavLink>
        </li>
        <li className={styles.navbarLink}>
          <NavLink to="/contact" className={({ isActive }) => getNavLinkClass(isActive)}>
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
