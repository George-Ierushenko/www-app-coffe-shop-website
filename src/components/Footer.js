import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';

import { useTranslation } from 'react-i18next';
import styles from '../styles/components/footer.module.css';

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className={styles.footer}>
      <p>{t('© 2024 Coffee Shop. All rights reserved.')}</p>
      <div className={styles.socialIcons}>
        <a href="https://instagram.com"><FontAwesomeIcon icon={faInstagram} /></a>
        <a href="https://facebook.com"><FontAwesomeIcon icon={faFacebook} /></a>
        <a href="https://twitter.com"><FontAwesomeIcon icon={faTwitter} /></a>
      </div>
    </footer>
  );
}

export default Footer;
