import React from 'react';
import styles from './Media.module.css';

const articlesData = [
  {
    title: "Expertas internacionales discuten la importancia de la CEDAW en la lucha contra la trata de mujeres",
    link: "https://www.uexternado.edu.co/ciencias-sociales-y-humanas/expertas-internacionales-discuten-la-importancia-de-la-cedaw-en-la-lucha-contra-la-trata-de-mujeres/",
    year: "March, 2023"
  },  {
    title: "Expertas internacionales discuten la importancia de la CEDAW en la lucha contra la trata de mujeres",
    link: "https://www.uexternado.edu.co/ciencias-sociales-y-humanas/expertas-internacionales-discuten-la-importancia-de-la-cedaw-en-la-lucha-contra-la-trata-de-mujeres/",
    year: "March, 2023"
  },  {
    title: "Expertas internacionales discuten la importancia de la CEDAW en la lucha contra la trata de mujeres",
    link: "https://www.uexternado.edu.co/ciencias-sociales-y-humanas/expertas-internacionales-discuten-la-importancia-de-la-cedaw-en-la-lucha-contra-la-trata-de-mujeres/",
    year: "March, 2023"
  },  {
    title: "Expertas internacionales discuten la importancia de la CEDAW en la lucha contra la trata de mujeres",
    link: "https://www.uexternado.edu.co/ciencias-sociales-y-humanas/expertas-internacionales-discuten-la-importancia-de-la-cedaw-en-la-lucha-contra-la-trata-de-mujeres/",
    year: "March, 2023"
  },  {
    title: "Expertas internacionales discuten la importancia de la CEDAW en la lucha contra la trata de mujeres",
    link: "https://www.uexternado.edu.co/ciencias-sociales-y-humanas/expertas-internacionales-discuten-la-importancia-de-la-cedaw-en-la-lucha-contra-la-trata-de-mujeres/",
    year: "March, 2023"
  },  {
    title: "Expertas internacionales discuten la importancia de la CEDAW en la lucha contra la trata de mujeres",
    link: "https://www.uexternado.edu.co/ciencias-sociales-y-humanas/expertas-internacionales-discuten-la-importancia-de-la-cedaw-en-la-lucha-contra-la-trata-de-mujeres/",
    year: "March, 2023"
  }
];

const Article = ({ title, link, year }) => (
  <div className={styles.article}>
    <p className={styles.title}>{title}</p>
    <p className={styles.link}>{link}</p>
    <p className={styles.year}>{year}</p>
  </div>
);

const Media = () => {
  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.pageTitle}>Media</h1>
      <div className={styles.mediaContainer}>
        {articlesData.map((article, index) => (
          <Article key={index} {...article} />
        ))}
      </div>
    </div>
  );
}

export default Media;
