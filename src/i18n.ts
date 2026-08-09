import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "./locales/en";
import ar from "./locales/ar";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      ar: { translation: ar },
    },
    fallbackLng: "en",
    lng: "ar",
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
  });

// Set initial direction
const savedLang = localStorage.getItem("i18nextLng") || "en";
document.documentElement.dir = savedLang === "ar" ? "rtl" : "ltr";
document.documentElement.lang = savedLang;

export default i18n;
