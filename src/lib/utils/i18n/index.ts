import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import enTranslation from "./en";
import plTranslation from "./pl";

i18next
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        debug: process.env.NODE_ENV === "development",
        fallbackLng: "en",
        resources: {
            en: {
                translation: enTranslation
            },
            pl: {
                translation: plTranslation
            }
        }
    });
