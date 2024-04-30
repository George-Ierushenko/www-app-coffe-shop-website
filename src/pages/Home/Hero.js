import React from 'react';

import styles from '../../styles/pages/home/hero.module.css';

function Hero() {
  return (
    <div className={styles.hero}>
      <h1 className={styles.heroTitle}>Welcome to Coffee Zen!</h1>
    </div>
  );
}

export default Hero;
