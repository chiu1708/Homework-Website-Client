import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import viet from './locales/vi.json';
import eng from './locales/en.json';

const resources = {
  vi: viet,
  en: eng
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "vi",
    fallbackLng: "en",

    interpolation: {
      escapeValue: false
    }
  });

  export default i18n;