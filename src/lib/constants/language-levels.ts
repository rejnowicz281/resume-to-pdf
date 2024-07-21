import i18next from "i18next";

export const LANGUAGE_LEVELS_EN = ["Basic", "Intermediate", "Upper Intermediate", "Advanced", "Proficient", "Native"];
export const LANGUAGE_LEVELS_PL = [
    "Podstawowy",
    "Średni",
    "Średnio zaawansowany",
    "Zaawansowany",
    "Biegły",
    "Ojczysty"
];

export const getLanguageLevels = () => (i18next.language === "pl-PL" ? LANGUAGE_LEVELS_PL : LANGUAGE_LEVELS_EN);
