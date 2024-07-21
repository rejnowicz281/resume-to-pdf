import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18next
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        // @ts-ignore
        debug: process.env.NODE_ENV === "development",
        fallbackLng: "en",
        resources: {
            en: {
                translation: {
                    page: "Page",
                    complete: "Complete",
                    created: "Created",
                    parse: "Parse",
                    resume: "Resume",
                    resumes: "Resumes",
                    download: "Download",
                    step: "Step",
                    previousStep: "Previous Step",
                    nextStep: "Next Step",
                    home: "Home",
                    language: "Language",
                    submit: "Submit",
                    settings: "Settings",
                    phone: "Phone",
                    image: "Image",
                    resumePdf: {
                        generating: "Your PDF is being generated...",
                        contact: "Contact",
                        phone: "Phone",
                        dateOfBirth: "Date of Birth",
                        location: "Location",
                        skills: "Skills",
                        languages: "Languages",
                        workExperience: "Work Experience",
                        education: {
                            title: "Education",
                            specialization: "Specialization",
                            level: "Level of education"
                        },
                        training: {
                            title: "Training and Certification",
                            organization: "Organization"
                        },
                        additionalActivity: "Additional activity",
                        interests: "Interests",
                        links: "Links"
                    },
                    settingsPage: {
                        downloadResumes: "Download Resumes",
                        downloadResumesDescription: "Download all of your resumes as a JSON file",
                        changeLanguageDescription: "Change the language of the application"
                    },
                    homepage: {
                        title: "Resumes",
                        create: "Insert Resume",
                        import: "Import Resume"
                    },
                    resumeJsonImport: {
                        buttonContent: "Import Resume",
                        title: "Import Resumes",
                        description: "Here you can add new resumes by importing a JSON file.",
                        importer: {
                            clearButtonContent: "Clear Data",
                            importButtonContent: "Import",
                            upload: "Upload a JSON file from disk",
                            uploadOr: "Or drag and drop a file here",
                            paste: "You can also paste your JSON data here:",
                            lookLikeTitle: "What should my JSON data look like?",
                            lookLikeDescription:
                                "Your JSON data should adhere to the following format (all fields are optional, some will be set automatically if not specified):"
                        }
                    },
                    editResume: {
                        title: "Edit Resume"
                    },
                    deleteResume: {
                        title: "Are you sure?",
                        description:
                            "You are about to delete the <b>{{name}}</b> resume. This action cannot be undone.",
                        cancel: "Cancel",
                        delete: "Delete"
                    },
                    resumeForm: {
                        name: "Custom Name",
                        description: "Description",
                        descriptionPlaceholder: "Resume Description"
                    },
                    resumeCreator: {
                        stepOne: {
                            name: "Basic Info",
                            imagePicker: {
                                showImage: "Show Image",
                                upload: "Upload image from Disk",
                                uploadOr: "Or drag and drop an image here",
                                supportedFormats: "Supported formats: JPG, PNG (max. 6 MB)"
                            },
                            basicInfoForm: {
                                title: "Basic Information",
                                firstName: "First Name",
                                firstNamePlaceholder: "John",
                                lastName: "Last Name",
                                lastNamePlaceholder: "Doe",
                                dateOfBirth: "Date of Birth"
                            },
                            locationForm: {
                                title: "Location Information",
                                country: "Country",
                                countryPlaceholder: "Select a country",
                                noCountry: "No Country Selected",
                                city: "City",
                                cityPlaceholder: "New York"
                            },
                            contactForm: {
                                title: "Contact Information",
                                phone: "Phone",
                                phonePlaceholder: "+11 234 567 890",
                                emailPlaceholder: "john@doe.com"
                            }
                        },
                        stepTwo: {
                            name: "Experience",
                            workExperience: {
                                title: "Work Experience",
                                company: "Company",
                                location: "Location",
                                startDate: "Start Date",
                                endDate: "End Date",
                                description: "Description",
                                duration: "Duration"
                            },
                            addWorkExperience: {
                                buttonContent: "Insert Work Experience",
                                dialogTitle: "Add Experience"
                            },
                            editWorkExperience: {
                                dialogTitle: "Edit Experience"
                            },
                            deleteWorkExperience: {
                                dialogTitle: "Are you sure?",
                                dialogDescription:
                                    "You are about to delete the <b>{{title}}</b> position. This action cannot be undone.",
                                cancelButton: "Cancel",
                                deleteButton: "Delete"
                            },
                            workExperienceForm: {
                                title: "Position",
                                company: "Company",
                                location: "Location",
                                locationPlaceholder: "Mountain View, CA",
                                startDate: "Start Date",
                                endDate: "End Date",
                                description: "Description",
                                descriptionPlaceholder: "Describe your responsibilities and achievements"
                            },
                            training: {
                                title: "Training",
                                issueDate: "Issue Date",
                                organization: "Organization"
                            },
                            addTraining: {
                                buttonContent: "Insert Training",
                                dialogTitle: "Add Training"
                            },
                            editTraining: {
                                dialogTitle: "Edit Training"
                            },
                            deleteTraining: {
                                dialogTitle: "Are you sure?",
                                dialogDescription:
                                    "You are about to delete the <b>{{name}}</b> training. This action cannot be undone.",
                                cancelButton: "Cancel",
                                deleteButton: "Delete"
                            },
                            trainingForm: {
                                name: "Name",
                                namePlaceholder: "Node.js Course",
                                organization: "Organization",
                                organizationPlaceholder: "Coursera",
                                issueDate: "Issue Date",
                                description: "Description",
                                descriptionPlaceholder: "Describe your training experience"
                            },
                            languages: {
                                title: "Languages"
                            },
                            addLanguage: {
                                buttonContent: "Insert Language",
                                dialogTitle: "Add Language"
                            },
                            editLanguage: {
                                dialogTitle: "Edit Language"
                            },
                            deleteLanguage: {
                                dialogTitle: "Are you sure?",
                                dialogDescription:
                                    "You are about to delete the <b>{{language}}</b> language. This action cannot be undone.",
                                cancelButton: "Cancel",
                                deleteButton: "Delete"
                            },
                            languageForm: {
                                language: "Language",
                                languagePlaceholder: "English",
                                level: "Level",
                                levelPlaceholder: "Select language level"
                            },
                            education: {
                                title: "Education",
                                level: "Level",
                                specialization: "Specialization",
                                duration: "Duration"
                            },
                            addEducation: {
                                buttonContent: "Insert Education",
                                dialogTitle: "Add Education"
                            },
                            editEducation: {
                                dialogTitle: "Edit Education"
                            },
                            deleteEducation: {
                                dialogTitle: "Are you sure?",
                                dialogDescription:
                                    "You are about to delete the <b>{{institution}}</b> education. This action cannot be undone.",
                                cancelButton: "Cancel",
                                deleteButton: "Delete"
                            },
                            educationForm: {
                                institution: "Institution",
                                institutionPlaceholder: "University of California",
                                level: "Level",
                                levelPlaceholder: "Bachelor's Degree",
                                specialization: "Specialization",
                                specializationPlaceholder: "Computer Science",
                                startDate: "Start Date",
                                endDate: "End Date",
                                description: "Description",
                                descriptionPlaceholder: "Describe your education"
                            }
                        },
                        stepThree: {
                            name: "Skills",
                            interestsForm: {
                                interests: "Interests",
                                interestsPlaceholder: "Web Development, Machine Learning, AI"
                            },
                            skills: {
                                title: "Skills"
                            },
                            skillForm: {
                                skill: "Skill"
                            },
                            links: {
                                title: "Links"
                            },
                            addLink: {
                                buttonContent: "Insert Link",
                                dialogTitle: "Add Link"
                            },
                            editLink: {
                                dialogTitle: "Edit Link"
                            },
                            deleteLink: {
                                dialogTitle: "Are you sure?",
                                dialogDescription:
                                    "You are about to delete the <b>{{url}}</b> link. This action cannot be undone.",
                                cancelButton: "Cancel",
                                deleteButton: "Delete"
                            },
                            linkForm: {
                                url: "URL",
                                description: "Description",
                                descriptionPlaceholder: "My LinkedIn Profile"
                            },
                            activities: {
                                title: "Additional Activities",
                                location: "Location",
                                duration: "Duration"
                            },
                            addActivity: {
                                buttonContent: "Insert Activity",
                                dialogTitle: "Add Activity"
                            },
                            editActivity: {
                                dialogTitle: "Edit Activity"
                            },
                            deleteActivity: {
                                dialogTitle: "Are you sure?",
                                dialogDescription:
                                    "You are about to delete the <b>{{name}}</b> activity. This action cannot be undone.",
                                cancelButton: "Cancel",
                                deleteButton: "Delete"
                            },
                            activityForm: {
                                name: "Name",
                                namePlaceholder: "Volunteer Work",
                                location: "Location",
                                locationPlaceholder: "Local Community Center",
                                startDate: "Start Date",
                                endDate: "End Date",
                                description: "Description",
                                descriptionPlaceholder: "Describe this activity"
                            }
                        },
                        stepFour: {
                            name: "Download Resume",
                            title: "Your Resume is ready!",
                            description: "Click the button below to download your resume.",
                            downloadButton: "Download Resume"
                        }
                    }
                }
            },
            pl: {
                translation: {
                    page: "Strona",
                    complete: "Ukończono",
                    created: "Utworzono",
                    parse: "Przetwórz",
                    resume: "CV",
                    resumes: "CV",
                    download: "Pobierz",
                    step: "Krok",
                    previousStep: "Poprzedni krok",
                    nextStep: "Następny krok",
                    home: "Strona główna",
                    language: "Język",
                    submit: "Zatwierdź",
                    settings: "Ustawienia",
                    phone: "Telefon",
                    image: "Zdjęcie",
                    resumePdf: {
                        generating: "Generowanie PDF...",
                        contact: "Kontakt",
                        phone: "Telefon",
                        dateOfBirth: "Data urodzenia",
                        location: "Miejscowość",
                        skills: "Umiejętności",
                        languages: "Języki",
                        workExperience: "Doświadczenie zawodowe",
                        education: {
                            title: "Wykształcenie",
                            specialization: "Specjalizacja",
                            level: "Poziom wykształcenia"
                        },
                        training: {
                            title: "Szkolenia i certyfikaty",
                            organization: "Organizacja"
                        },
                        additionalActivity: "Dodatkowa aktywność",
                        interests: "Zainteresowania",
                        links: "Linki"
                    },
                    settingsPage: {
                        downloadResumes: "Pobierz CV",
                        downloadResumesDescription: "Pobierz wszystkie CV jako plik JSON",
                        changeLanguageDescription: "Zmień język aplikacji"
                    },
                    homepage: {
                        title: "CV",
                        create: "Dodaj CV",
                        import: "Importuj CV"
                    },
                    resumeJsonImport: {
                        buttonContent: "Importuj CV",
                        title: "Importuj CV",
                        description: "Tutaj możesz dodać nowe CV importując plik JSON.",
                        importer: {
                            clearButtonContent: "Wyczyść dane",
                            importButtonContent: "Importuj",
                            upload: "Załaduj plik JSON z dysku",
                            uploadOr: "lub przeciągnij i upuść plik tutaj",
                            paste: "Możesz również wkleić dane JSON tutaj:",
                            lookLikeTitle: "Jak powinny wyglądać dane JSON?",
                            lookLikeDescription:
                                "Dane JSON powinny być zgodne z poniższym formatem (wszystkie pola są opcjonalne, niektóre będą ustawione automatycznie, jeśli nie zostaną określone):"
                        }
                    },
                    editResume: {
                        title: "Edytuj CV"
                    },
                    deleteResume: {
                        title: "Czy na pewno?",
                        description: "Zamierzasz usunąć CV <b>{{name}}</b>. Tej operacji nie można cofnąć.",
                        cancel: "Anuluj",
                        delete: "Usuń"
                    },
                    resumeForm: {
                        name: "Nazwa",
                        description: "Opis",
                        descriptionPlaceholder: "Opis CV"
                    },
                    resumeCreator: {
                        stepOne: {
                            name: "Podstawowe informacje",
                            imagePicker: {
                                showImage: "Pokaż zdjęcie",
                                upload: "Wgraj zdjęcie z dysku",
                                uploadOr: "Lub przeciągnij i upuść zdjęcie tutaj",
                                supportedFormats: "Obsługiwane formaty: JPG, PNG (max. 6 MB)"
                            },
                            basicInfoForm: {
                                title: "Podstawowe informacje",
                                firstName: "Imię",
                                firstNamePlaceholder: "Jan",
                                lastName: "Nazwisko",
                                lastNamePlaceholder: "Kowalski",
                                dateOfBirth: "Data urodzenia"
                            },
                            locationForm: {
                                title: "Miejscowość",
                                country: "Kraj",
                                countryPlaceholder: "Wybierz kraj",
                                noCountry: "Brak wybranego kraju",
                                city: "Miasto",
                                cityPlaceholder: "Warszawa"
                            },
                            contactForm: {
                                title: "Kontakt",
                                phone: "Telefon",
                                phonePlaceholder: "+48 123 456 789",
                                emailPlaceholder: "jan@kowalski.com"
                            }
                        },
                        stepTwo: {
                            name: "Doświadczenie",
                            workExperience: {
                                title: "Doświadczenie zawodowe",
                                company: "Firma",
                                location: "Miejsce pracy",
                                startDate: "Data rozpoczęcia",
                                endDate: "Data zakończenia",
                                description: "Opis",
                                duration: "Czas trwania"
                            },
                            addWorkExperience: {
                                buttonContent: "Dodaj doświadczenie",
                                dialogTitle: "Dodaj doświadczenie"
                            },
                            editWorkExperience: {
                                dialogTitle: "Edytuj doświadczenie"
                            },
                            deleteWorkExperience: {
                                dialogTitle: "Czy na pewno?",
                                dialogDescription:
                                    "Zamierzasz usunąć pozycję <b>{{title}}</b>. Tej operacji nie można cofnąć.",
                                cancelButton: "Anuluj",
                                deleteButton: "Usuń"
                            },
                            workExperienceForm: {
                                title: "Pozycja",
                                company: "Firma",
                                location: "Miejsce pracy",
                                locationPlaceholder: "Warszawa",
                                startDate: "Data rozpoczęcia",
                                endDate: "Data zakończenia",
                                description: "Opis",
                                descriptionPlaceholder: "Opisz swoje obowiązki i osiągnięcia"
                            },
                            training: {
                                title: "Szkolenia, kursy, certyfikaty",
                                issueDate: "Data ukończenia",
                                organization: "Organizacja"
                            },
                            addTraining: {
                                buttonContent: "Dodaj szkolenie",
                                dialogTitle: "Dodaj szkolenie"
                            },
                            editTraining: {
                                dialogTitle: "Edytuj szkolenie"
                            },
                            deleteTraining: {
                                dialogTitle: "Czy na pewno?",
                                dialogDescription:
                                    "Zamierzasz usunąć szkolenie <b>{{name}}</b>. Tej operacji nie można cofnąć.",
                                cancelButton: "Anuluj",
                                deleteButton: "Usuń"
                            },
                            trainingForm: {
                                name: "Nazwa",
                                namePlaceholder: "Kurs Node.js",
                                organization: "Organizacja",
                                organizationPlaceholder: "Coursera",
                                issueDate: "Data ukończenia",
                                description: "Opis",
                                descriptionPlaceholder: "Opisz swoje doświadczenie szkoleniowe"
                            },
                            languages: {
                                title: "Języki"
                            },
                            addLanguage: {
                                buttonContent: "Dodaj język",
                                dialogTitle: "Dodaj język"
                            },
                            editLanguage: {
                                dialogTitle: "Edytuj język"
                            },
                            deleteLanguage: {
                                dialogTitle: "Czy na pewno?",
                                dialogDescription:
                                    "Zamierzasz usunąć język <b>{{language}}</b>. Tej operacji nie można cofnąć.",
                                cancelButton: "Anuluj",
                                deleteButton: "Usuń"
                            },
                            languageForm: {
                                language: "Język",
                                languagePlaceholder: "Polski",
                                level: "Poziom",
                                levelPlaceholder: "Wybierz poziom języka"
                            },
                            education: {
                                title: "Wykształcenie",
                                level: "Poziom",
                                specialization: "Specjalizacja",
                                duration: "Czas trwania"
                            },
                            addEducation: {
                                buttonContent: "Dodaj wykształcenie",
                                dialogTitle: "Dodaj wykształcenie"
                            },
                            editEducation: {
                                dialogTitle: "Edytuj wykształcenie"
                            },
                            deleteEducation: {
                                dialogTitle: "Czy na pewno?",
                                dialogDescription:
                                    "Zamierzasz usunąć wykształcenie <b>{{institution}}</b>. Tej operacji nie można cofnąć.",
                                cancelButton: "Anuluj",
                                deleteButton: "Usuń"
                            },
                            educationForm: {
                                institution: "Instytucja",
                                institutionPlaceholder: "Uniwersytet Warszawski",
                                level: "Poziom",
                                levelPlaceholder: "Licencjat",
                                specialization: "Specjalizacja",
                                specializationPlaceholder: "Informatyka",
                                startDate: "Data rozpoczęcia",
                                endDate: "Data zakończenia",
                                description: "Opis",
                                descriptionPlaceholder: "Opisz swoje wykształcenie"
                            }
                        },
                        stepThree: {
                            name: "Umiejętności",
                            interestsForm: {
                                interests: "Zainteresowania",
                                interestsPlaceholder: "Web Development, Machine Learning, AI"
                            },
                            skills: {
                                title: "Umiejętności"
                            },
                            skillForm: {
                                skill: "Umiejętność"
                            },
                            links: {
                                title: "Linki"
                            },
                            addLink: {
                                buttonContent: "Dodaj link",
                                dialogTitle: "Dodaj link"
                            },
                            editLink: {
                                dialogTitle: "Edytuj link"
                            },
                            deleteLink: {
                                dialogTitle: "Czy na pewno?",
                                dialogDescription:
                                    "Zamierzasz usunąć link <b>{{url}}</b>. Tej operacji nie można cofnąć.",
                                cancelButton: "Anuluj",
                                deleteButton: "Usuń"
                            },
                            linkForm: {
                                url: "URL",
                                description: "Opis",
                                descriptionPlaceholder: "Mój profil LinkedIn"
                            },
                            activities: {
                                title: "Dodatkowa aktywność",
                                location: "Miejsce",
                                duration: "Czas trwania"
                            },
                            addActivity: {
                                buttonContent: "Dodaj aktywność",
                                dialogTitle: "Dodaj aktywność"
                            },
                            editActivity: {
                                dialogTitle: "Edytuj aktywność"
                            },
                            deleteActivity: {
                                dialogTitle: "Czy na pewno?",
                                dialogDescription:
                                    "Zamierzasz usunąć aktywność <b>{{name}}</b>. Tej operacji nie można cofnąć.",
                                cancelButton: "Anuluj",
                                deleteButton: "Usuń"
                            },
                            activityForm: {
                                name: "Nazwa",
                                namePlaceholder: "Wolontariat",
                                location: "Miejsce",
                                locationPlaceholder: "Lokalne centrum społeczne",
                                startDate: "Data rozpoczęcia",
                                endDate: "Data zakończenia",
                                description: "Opis",
                                descriptionPlaceholder: "Opisz tę aktywność"
                            }
                        },
                        stepFour: {
                            name: "Pobierz CV",
                            title: "Twoje CV jest gotowe!",
                            description: "Kliknij poniższy przycisk, aby pobrać swoje CV.",
                            downloadButton: "Pobierz CV"
                        }
                    }
                }
            }
        }
    });
