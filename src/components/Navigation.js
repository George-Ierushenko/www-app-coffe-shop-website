import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faImages } from '@fortawesome/free-solid-svg-icons';

import { languages } from '../i18n';

import styles from '../styles/components/navigation.module.css';

function LanguageSelector() {
  const { i18n } = useTranslation();

  const currentLanguage = i18n.language;

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className={styles.languageSelector}>
      {languages.map((language) => (
        <button
          key={language}
          className={`${styles.languageButton} ${currentLanguage === language ? styles.active : ''}`}
          onClick={() => changeLanguage(language)}
        >
            {language.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

function Navigation() {
  const { t }  = useTranslation()

  return (
    <nav>
      <ul className={styles.navList}>
        <div className={styles.logo} />

        <div className={styles.navItems}>
          <li className={styles.navItem}>
            <NavLink to="/" exact className={styles.navLink} activeClassName={styles.activeLink}>
              <FontAwesomeIcon icon={faHome} /> {t('Home')}
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink to="/gallery" exact className={styles.navLink} activeClassName={styles.activeLink}>
              <FontAwesomeIcon icon={faImages} /> {t('Gallery')}
            </NavLink>
          </li>

        </div>
          <LanguageSelector />
      </ul>
    </nav>
  );
}

export default Navigation;
