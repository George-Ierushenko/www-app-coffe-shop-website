import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

export const languages = ["en", "es"];

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          "Home": "Home",
          "Gallery": "Gallery",
          "© 2024 Coffee Shop. All rights reserved.": "© 2024 Coffee Shop. All rights reserved."
        }
      },
      es: {
        translation: {
          "Home": "Inicio",
          "Gallery": "Galería",
          "© 2024 Coffee Shop. All rights reserved.": "© 2024 Coffee Shop. Todos los derechos reservados."
        }
      }
    },
    languages,
    lng: "en",
    fallbackLng: "en",
    debug: true,
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
