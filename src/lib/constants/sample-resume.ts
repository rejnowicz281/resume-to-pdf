import i18next from "i18next";
import uniqid from "uniqid";
import { Resume } from "../types/resume";
import { formatDate } from "../utils/date";

export const SAMPLE_RESUME_EN: Resume = {
    _id: "sample-resume",
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
            _id: uniqid(),
            title: "Software Engineer",
            company: "Tech Company",
            location: "New York, USA",
            startDate: "01.2018",
            endDate: "04.2018",
            description: "Developed web applications using React and Node.js."
        },
        {
            _id: uniqid(),
            title: "Frontend Developer",
            company: "Startup",
            location: "San Francisco, USA",
            startDate: "01.2021",
            endDate: "09.2021",
            description: "Developed web applications using React."
        }
    ],
    education: [
        {
            _id: uniqid(),
            institution: "University",
            startDate: "01.2020",
            endDate: "01.2024",
            specialization: "Computer Science",
            level: "Bachelor",
            description: "Studied various subjects including algorithms, data structures, and web development."
        },
        {
            _id: uniqid(),
            institution: "High School",
            startDate: "01.2025",
            endDate: "01.2028",
            level: "High School",
            description: "Graduated with honors."
        }
    ],
    languages: [
        { _id: uniqid(), language: "English", level: "Native" },
        { _id: uniqid(), language: "Spanish", level: "Intermediate" }
    ],
    training: [
        {
            _id: uniqid(),
            name: "React Certification",
            issueDate: "01.2026",
            organization: "Online Course",
            description: "Completed an online course on React."
        },
        {
            _id: uniqid(),
            name: "Node.js Certification",
            issueDate: "01.2028",
            organization: "Online Course",
            description: "Completed an online course on Node.js."
        }
    ],
    skills: [
        { _id: uniqid(), name: "JavaScript" },
        { _id: uniqid(), name: "React" },
        { _id: uniqid(), name: "Node.js" }
    ],
    activities: [
        {
            _id: uniqid(),
            name: "Volunteer",
            location: "Local Community Center",
            startDate: "05.2000",
            description: "Organized community events and activities."
        },
        {
            _id: uniqid(),
            name: "Hackathon",
            startDate: "01.2020",
            endDate: "01.2021",
            description: "Participated in a hackathon and developed a web application."
        }
    ],
    interests: "Reading, hiking, and playing guitar.",
    links: [
        { _id: uniqid(), description: "LinkedIn", url: "https://www.linkedin.com/" },
        { _id: uniqid(), description: "GitHub", url: "https://github.com/rejnowicz281" }
    ],
    createdAt: formatDate(new Date(), "dd.mm.yyyy hh:mm")
};

export const SAMPLE_RESUME_PL: Resume = {
    _id: "sample-resume",
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
            _id: uniqid(),
            title: "Web Developer",
            company: "Firma Technologiczna",
            location: "Kraków, Polska",
            startDate: "01.2018",
            endDate: "04.2018",
            description: "Tworzenie aplikacji webowych przy użyciu React i Node.js."
        },
        {
            _id: uniqid(),
            title: "Programista Frontend",
            company: "Startup",
            location: "Wrocław, Polska",
            startDate: "01.2021",
            endDate: "09.2021",
            description: "Tworzenie aplikacji webowych przy użyciu React."
        }
    ],
    education: [
        {
            _id: uniqid(),
            institution: "Uniwersytet",
            startDate: "01.2020",
            endDate: "01.2024",
            specialization: "Informatyka",
            level: "Licencjat",
            description: "Studia algorytmów, struktur danych i tworzenia stron internetowych."
        },
        {
            _id: uniqid(),
            institution: "Liceum",
            startDate: "01.2025",
            endDate: "01.2028",
            level: "Szkoła średnia",
            description: "Ukończone z wyróżnieniem."
        }
    ],
    languages: [
        { _id: uniqid(), language: "Polski", level: "Ojczysty" },
        { _id: uniqid(), language: "Angielski", level: "Średnio zaawansowany" }
    ],
    training: [
        {
            _id: uniqid(),
            name: "Certyfikat React",
            issueDate: "01.2026",
            organization: "Coursera",
            description: "Ukończyłem kurs online dotyczący React."
        },
        {
            _id: uniqid(),
            name: "Certyfikat Node.js",
            issueDate: "01.2028",
            organization: "Coursera",
            description: "Ukończyłem kurs online dotyczący Node.js."
        }
    ],
    skills: [
        { _id: uniqid(), name: "JavaScript" },
        { _id: uniqid(), name: "React" },
        { _id: uniqid(), name: "Node.js" }
    ],
    activities: [
        {
            _id: uniqid(),
            name: "Wolontariat",
            location: "Lokalne Centrum Społeczności",
            startDate: "05.2000",
            endDate: "Obecnie",
            description: "Organizowałem aktywności społecznościowe."
        },
        {
            _id: uniqid(),
            name: "Hackathon",
            startDate: "01.2020",
            endDate: "01.2021",
            description: "Brałem udział w hackathonie i tworzeniu aplikacji webowej."
        }
    ],
    interests: "Lubię czytać i grać na gitarze.",
    links: [
        { _id: uniqid(), description: "LinkedIn", url: "https://www.linkedin.com" },
        { _id: uniqid(), description: "GitHub", url: "https://github.com/rejnowicz281" }
    ],
    createdAt: formatDate(new Date(), "dd.mm.yyyy hh:mm")
};

export const getSampleResume = () => (i18next.language === "pl-PL" ? SAMPLE_RESUME_PL : SAMPLE_RESUME_EN);
