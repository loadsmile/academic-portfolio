import React from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <div className={styles.contactContainer}>
      <div className={styles.contactInfo}>
        <h1 className={styles.mainTitle}>Contact me:</h1>
        <div className={styles.email}>
          <p>
            <a href="mailto:susana.barradas@uexternado.edu.co">susana.barradas@uexternado.edu.co</a>
          </p>
        </div>
        <div className={styles.linkedin}>
          <p>
            <a href="https://www.linkedin.com/in/susanabarradas/">LinkedIn</a>
          </p>
        </div>
        <div className={styles.twitter}>
          <p>
            <a href="https://www.x.com">X</a>
          </p>
        </div>
      </div>
      <div className={styles.pictureDiv}>
        <img src="https://www.uexternado.edu.co/wp-content/uploads/2022/04/Prf-Susana-Pataco-Zezere.jpg" alt="Susana Barradas" className={styles.profilePic}/>
      </div>
    </div>
  );
}

export default Contact;
