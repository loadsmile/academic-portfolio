import React from 'react';
import styles from './Publications.module.css';

const publicationsData = [
  {
    title: "A prospective longitudinal approach to examine the association between social position in childhood, adolescence, and adulthood with the control of hypertension during adulthood.",
    author: "S Barradas, DI Lucumi, G Mentz, DM Agudelo",
    source: "Frontiers in Public Health 12, 1296593",
    year: "2024"
  },
  {
    title: "A prospective longitudinal approach to examine the association between social position in childhood, adolescence, and adulthood with the control of hypertension during adulthood.",
    author: "S Barradas, DI Lucumi, G Mentz, DM Agudelo",
    source: "Frontiers in Public Health 12, 1296593",
    year: "2024"
  },
  {
    title: "A prospective longitudinal approach to examine the association between social position in childhood, adolescence, and adulthood with the control of hypertension during adulthood.",
    author: "S Barradas, DI Lucumi, G Mentz, DM Agudelo",
    source: "Frontiers in Public Health 12, 1296593",
    year: "2024"
  },
  {
    title: "A prospective longitudinal approach to examine the association between social position in childhood, adolescence, and adulthood with the control of hypertension during adulthood.",
    author: "S Barradas, DI Lucumi, G Mentz, DM Agudelo",
    source: "Frontiers in Public Health 12, 1296593",
    year: "2024"
  },
  {
    title: "A prospective longitudinal approach to examine the association between social position in childhood, adolescence, and adulthood with the control of hypertension during adulthood.",
    author: "S Barradas, DI Lucumi, G Mentz, DM Agudelo",
    source: "Frontiers in Public Health 12, 1296593",
    year: "2024"
  },
  {
    title: "A prospective longitudinal approach to examine the association between social position in childhood, adolescence, and adulthood with the control of hypertension during adulthood.",
    author: "S Barradas, DI Lucumi, G Mentz, DM Agudelo",
    source: "Frontiers in Public Health 12, 1296593",
    year: "2024"
  },
  {
    title: "A prospective longitudinal approach to examine the association between social position in childhood, adolescence, and adulthood with the control of hypertension during adulthood.",
    author: "S Barradas, DI Lucumi, G Mentz, DM Agudelo",
    source: "Frontiers in Public Health 12, 1296593",
    year: "2024"
  },
  {
    title: "A prospective longitudinal approach to examine the association between social position in childhood, adolescence, and adulthood with the control of hypertension during adulthood.",
    author: "S Barradas, DI Lucumi, G Mentz, DM Agudelo",
    source: "Frontiers in Public Health 12, 1296593",
    year: "2024"
  },
];

const Publication = ({ title, author, source, year }) => (
  <div className={styles.publication}>
    <p className={styles.title}>{title}</p>
    <p className={styles.author}>{author}</p>
    <p className={styles.source}>{source}</p>
    <p className={styles.year}>{year}</p>
  </div>
);

const Publications = () => {
  return (
    <div>
      <h1>Publications</h1>
      <p>Welcome to the projects section. Here's where we showcase our work.</p>
      <div className={styles.publicationsContainer}>
        {publicationsData.map((publication, index) => (
          <Publication key={index} {...publication} />
        ))}
      </div>
    </div>
  );
}

export default Publications;
