import React from 'react';
import { useTranslation } from 'react-i18next';

function LanguageSelector() {
  const { i18n } = useTranslation();

  const buttonStyle = {
    padding: '10px',
    margin: '5px',
    backgroundColor: '#8B4513',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  };

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div>
      <button style={buttonStyle} onClick={() => changeLanguage('en')}>EN</button>
      <button style={buttonStyle} onClick={() => changeLanguage('es')}>ES</button>
    </div>
  );
}

export default LanguageSelector;
