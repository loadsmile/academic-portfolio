import React from 'react';
import styles from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a href="https://facebook.com" className={styles.icon}>
        <FontAwesomeIcon icon={faFacebook} />
      </a>
      <a href="https://twitter.com" className={styles.icon}>
        <FontAwesomeIcon icon={faTwitter} />
      </a>
      <a href="https://instagram.com" className={styles.icon}>
        <FontAwesomeIcon icon={faInstagram} />
      </a>
    </footer>
  );
}

export default Footer;
