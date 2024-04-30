import React from 'react';
import styles from './Main.module.css';


const Main = () => {
  return (
    <div className={styles.mainContainer}>
      <div>
        <div className={styles.title}>
        <h1>About</h1>
        <p><b>Susana Barradas</b>, Director of the Psychology program at Universidad de los Andes, Bogota</p>
        </div>
        <div className={styles.banner}>
        <div className={styles.introduction}>
        <p>Holder of a Doctorate and Master's degree in Psychology from the Universidad de los Andes, with a specialization in Clinical Health Psychology from the University of Lisbon, Portugal.</p>
        <p>Completed a postdoctoral research program at the Alberto Lleras Camargo School of Government (EGOB) within the Universidad de los Andes.</p>
        <p>Currently serving as the Director of the Psychology program at the Faculty of Social and Human Sciences at the Universidad Externado de Colombia, and as a Researcher-Teacher at the Centro de Investigaciones sobre Dinámica on Social Dynamics (CIDS).</p>
        <p>Recognized for her impactful social research and as the author of numerous scientific publications in the areas of health psychology and public health. Brings expertise as a peer reviewer for numerous national and international scientific journals, and serves as a representative in the professional and disciplinary field of health psychology at the Colombian College of Psychologists (COLPSIC).</p>
        </div>
          <img src="https://i.imgur.com/V1z6Vs8.jpeg" alt="Susana Barradas" className={styles.profilePic}/>
          </div>
      </div>
    </div>
  );
}

export default Main;
