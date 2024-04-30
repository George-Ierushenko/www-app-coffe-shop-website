
import React from 'react';

import styles from '../../styles/pages/home/discovery.module.css';

const DiscoverSection = () => {
  const scrollToGetInTouchSection = () => {
    const element = document.getElementById('get-in-touch-section');

    element && element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <section className={styles.discoverSection}>
      <div className={styles.textContent}>
        <h2 className={styles.title}>Experience the perfect blend</h2>
        <p className={styles.description}>
          At Coffee Zen, we are dedicated to providing a tranquil and inviting space where coffee lovers can unwind, connect, and indulge in the finest coffee in Wroclaw. Our carefully curated menu, serene ambiance, and exceptional service create an oasis of calm in the heart of the city. Come and discover the perfect blend of tranquility and flavor at Coffee Zen.
        </p>

        <button
          onClick={scrollToGetInTouchSection}
          className={styles.touchButton}>
            Get in touch
        </button>
      </div>
      <div className={styles.imageContent}>
        <div className={styles.coffeeImage} />
      </div>
    </section>
  );
};

export default DiscoverSection;
