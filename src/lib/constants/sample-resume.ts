import i18next from "i18next";
import uniqid from "uniqid";
import { Resume } from "../types/resume";
import { formatTimestamp } from "../utils/date";

export const SAMPLE_RESUME_EN: Resume = {
    id: "sample-resume",
    imageOptions: {
        show: false,
        url: ""
    },
    firstName: "John",
    lastName: "Doe",
    dateOfBirth: "01.01.1990",
    country: "USA",
    city: "New York",
    email: "john@doe.com",
    phone: "+1234567890",
    workExperience: [
        {
            id: uniqid(),
            title: "Software Engineer",
            company: "Tech Company",
            location: "New York, USA",
            startDate: "01.2018",
            endDate: "04.2018",
            duration: "3 months",
            description: "Developed web applications using React and Node.js."
        },
        {
            id: uniqid(),
            title: "Frontend Developer",
            company: "Startup",
            location: "San Francisco, USA",
            startDate: "01.2021",
            endDate: "09.2021",
            duration: "9 months",
            description: "Developed web applications using React."
        }
    ],
    education: [
        {
            id: uniqid(),
            institution: "University",
            startDate: "01.2024",
            endDate: "01.2020",
            duration: "4 years",
            specialization: "Computer Science",
            level: "Bachelor",
            description: "Studied various subjects including algorithms, data structures, and web development."
        },
        {
            id: uniqid(),
            institution: "High School",
            startDate: "01.2025",
            endDate: "01.2028",
            duration: "4 years",
            level: "High School",
            description: "Graduated with honors."
        }
    ],
    languages: [
        { id: uniqid(), language: "English", level: "Native" },
        { id: uniqid(), language: "Spanish", level: "Intermediate" }
    ],
    training: [
        {
            id: uniqid(),
            name: "React Certification",
            issueDate: "01.2026",
            organization: "Online Course",
            description: "Completed an online course on React."
        },
        {
            id: uniqid(),
            name: "Node.js Certification",
            issueDate: "01.2028",
            organization: "Online Course",
            description: "Completed an online course on Node.js."
        }
    ],
    skills: [
        { id: uniqid(), name: "JavaScript" },
        { id: uniqid(), name: "React" },
        { id: uniqid(), name: "Node.js" }
    ],
    activities: [
        {
            id: uniqid(),
            name: "Volunteer",
            location: "Local Community Center",
            startDate: "05.2000",
            endDate: "Present",
            duration: "3 years",
            description: "Organized community events and activities."
        },
        {
            id: uniqid(),
            name: "Hackathon",
            startDate: "01.2020",
            endDate: "01.2021",
            duration: "1 year",
            description: "Participated in a hackathon and developed a web application."
        }
    ],
    interests: "Reading, hiking, and playing guitar.",
    links: [
        { id: uniqid(), description: "LinkedIn", url: "https://www.linkedin.com/" },
        { id: uniqid(), description: "GitHub", url: "https://github.com/rejnowicz281" }
    ],
    createdAt: formatTimestamp(new Date())
};

export const SAMPLE_RESUME_PL: Resume = {
    id: "sample-resume",
    imageOptions: {
        show: false,
        url: ""
    },
    firstName: "Jan",
    lastName: "Kowalski",
    dateOfBirth: "01.01.1990",
    country: "Polska",
    city: "Kraków",
    email: "jan@kowalski.com",
    phone: "+48 123 456 789",
    workExperience: [
        {
            id: uniqid(),
            title: "Web Developer",
            company: "Firma Technologiczna",
            location: "Kraków, Polska",
            startDate: "01.2018",
            endDate: "04.2018",
            duration: "3 miesiące",
            description: "Tworzenie aplikacji webowych przy użyciu React i Node.js."
        },
        {
            id: uniqid(),
            title: "Programista Frontend",
            company: "Startup",
            location: "Wrocław, Polska",
            startDate: "01.2021",
            endDate: "09.2021",
            duration: "9 miesięcy",
            description: "Tworzenie aplikacji webowych przy użyciu React."
        }
    ],
    education: [
        {
            id: uniqid(),
            institution: "Uniwersytet",
            startDate: "01.2024",
            endDate: "01.2020",
            duration: "4 lata",
            specialization: "Informatyka",
            level: "Licencjat",
            description: "Studia algorytmów, struktur danych i tworzenia stron internetowych."
        },
        {
            id: uniqid(),
            institution: "Liceum",
            startDate: "01.2025",
            endDate: "01.2028",
            duration: "4 lata",
            level: "Szkoła średnia",
            description: "Ukończone z wyróżnieniem."
        }
    ],
    languages: [
        { id: uniqid(), language: "Polski", level: "Ojczysty" },
        { id: uniqid(), language: "Angielski", level: "Średnio zaawansowany" }
    ],
    training: [
        {
            id: uniqid(),
            name: "Certyfikat React",
            issueDate: "01.2026",
            organization: "Coursera",
            description: "Ukończyłem kurs online dotyczący React."
        },
        {
            id: uniqid(),
            name: "Certyfikat Node.js",
            issueDate: "01.2028",
            organization: "Coursera",
            description: "Ukończyłem kurs online dotyczący Node.js."
        }
    ],
    skills: [
        { id: uniqid(), name: "JavaScript" },
        { id: uniqid(), name: "React" },
        { id: uniqid(), name: "Node.js" }
    ],
    activities: [
        {
            id: uniqid(),
            name: "Wolontariat",
            location: "Lokalne Centrum Społeczności",
            startDate: "05.2000",
            endDate: "Obecnie",
            duration: "3 lata",
            description: "Organizowałem aktywności społecznościowe."
        },
        {
            id: uniqid(),
            name: "Hackathon",
            startDate: "01.2020",
            endDate: "01.2021",
            duration: "1 rok",
            description: "Brałem udział w hackathonie i tworzeniu aplikacji webowej."
        }
    ],
    interests: "Lubię czytać i grać na gitarze.",
    links: [
        { id: uniqid(), description: "LinkedIn", url: "https://www.linkedin.com" },
        { id: uniqid(), description: "GitHub", url: "https://github.com/rejnowicz281" }
    ],
    createdAt: formatTimestamp(new Date())
};

export const getSampleResume = () => (i18next.language === "pl-PL" ? SAMPLE_RESUME_PL : SAMPLE_RESUME_EN);
