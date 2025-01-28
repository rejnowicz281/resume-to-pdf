import enTranslation from "./en";

const plTranslation: typeof enTranslation = {
    logout: "Wyloguj się",
    login: "Zaloguj się",
    register: "Zarejestruj się",
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
    present: "Obecnie",
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
        additionalActivity: "Aktywność dodatkowa",
        interests: "Zainteresowania",
        links: "Linki",
        rodoClause:
            "Wyrażam zgodę na przetwarzanie moich danych osobowych dla potrzeb niezbędnych do realizacji procesu rekrutacji (zgodnie z ustawą z dnia 10 maja 2018 roku o ochronie danych osobowych (Dz. Ustaw z 2018, poz. 1000) oraz zgodnie z Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (RODO).",
        consentToFurtherDataProcessing:
            "Wyrażam zgodę na przetwarzanie moich danych osobowych w zakresie przyszłych procesów rekrutacyjnych."
    },
    authForm: {
        username: "Nazwa użytkownika",
        usernamePlaceholder: "jankowalski",
        password: "Hasło",
        passwordMustBeThreeCharacters: "Hasło musi mieć co najmniej 3 znaki",
        orContinueWith: "LUB KONTYNUUJ Z",
        invalidUsernameOrPassword: "Nieprawidłowa nazwa użytkownika lub hasło",
        usernameAlreadyTaken: "Nazwa użytkownika jest już zajęta",
        usernameIsRequired: "Nazwa użytkownika jest wymagana",
        usernameMustBeLowercase: "Nazwa użytkownika musi być pisana małymi literami",
        usernameCannotStartWithUnderscore: "Nazwa użytkownika nie może zaczynać się od podkreślenia (_)",
        usernameCannotContainColon: "Nazwa użytkownika nie może zawierać dwukropka (:)"
    },
    settingsPage: {
        loggedInDescription: "Zalogowano jako <b>{{username}}</b>",
        loginDescription: "Zaloguj się aby zsynchronizować swoje CV na różnych urządzeniach",
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
                "Dane JSON powinny być zgodne z poniższym formatem. <br /> Wszystkie pola są opcjonalne. W przypadku braku niektórych pól (_id, daty utworzenia) zostaną one uzupełnione automatycznie."
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
            confidentiality: {
                title: "Prywatność",
                includeRodoClause: "Dołącz klauzulę RODO",
                includeDataProcessingConsent:
                    "Dołącz zgodę na dalsze przetwarzanie danych w przyszłych procesach rekrutacyjnych"
            },
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
                dateOfBirth: "Data urodzenia",
                firstNameIsRequired: "Imię jest wymagane",
                lastNameIsRequired: "Nazwisko jest wymagane"
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
                invalidEmail: "Nieprawidłowy adres email",
                emailIsRequired: "Email jest wymagany",
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
                duration: "Okres"
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
                dialogDescription: "Zamierzasz usunąć pozycję <b>{{title}}</b>. Tej operacji nie można cofnąć.",
                cancelButton: "Anuluj",
                deleteButton: "Usuń"
            },
            workExperienceForm: {
                title: "Stanowisko",
                company: "Firma",
                location: "Miejsce pracy",
                locationPlaceholder: "Warszawa",
                startDate: "Data rozpoczęcia",
                endDate: "Data zakończenia",
                description: "Opis",
                descriptionPlaceholder: "Opisz swoje obowiązki i osiągnięcia",
                titleIsRequired: "Stanowisko jest wymagane",
                startDateMustBeDate: "Data rozpoczęcia musi być poprawną datą"
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
                dialogDescription: "Zamierzasz usunąć szkolenie <b>{{name}}</b>. Tej operacji nie można cofnąć.",
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
                descriptionPlaceholder: "Opisz swoje doświadczenie szkoleniowe",
                nameIsRequired: "Nazwa jest wymagana",
                issueDateMustBeDate: "Data ukończenia musi być poprawną datą",
                organizationIsRequired: "Organizacja jest wymagana"
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
                dialogDescription: "Zamierzasz usunąć język <b>{{language}}</b>. Tej operacji nie można cofnąć.",
                cancelButton: "Anuluj",
                deleteButton: "Usuń"
            },
            languageForm: {
                language: "Język",
                languagePlaceholder: "Polski",
                level: "Poziom",
                levelPlaceholder: "Wybierz poziom języka",
                languageIsRequired: "Język jest wymagany",
                levelIsRequired: "Doświadczenie językowe jest wymagane"
            },
            education: {
                title: "Wykształcenie",
                level: "Poziom wykształcenia",
                specialization: "Specjalizacja",
                duration: "Okres"
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
                level: "Poziom wykształcenia",
                levelPlaceholder: "Licencjat",
                specialization: "Specjalizacja",
                specializationPlaceholder: "Informatyka",
                startDate: "Data rozpoczęcia",
                endDate: "Data zakończenia",
                description: "Opis",
                descriptionPlaceholder: "Opisz swoje wykształcenie",
                institutionIsRequired: "Instytucja jest wymagana",
                startDateMustBeDate: "Data rozpoczęcia musi być poprawną datą",
                levelIsRequired: "Poziom wykształcenia jest wymagany"
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
                skill: "Umiejętność",
                skillIsRequired: "Proszę wpisać umiejętność"
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
                dialogDescription: "Zamierzasz usunąć link <b>{{url}}</b>. Tej operacji nie można cofnąć.",
                cancelButton: "Anuluj",
                deleteButton: "Usuń"
            },
            linkForm: {
                url: "URL",
                description: "Opis",
                descriptionPlaceholder: "Mój profil LinkedIn",
                urlMustBeValid: "URL musi być poprawnym adresem URL"
            },
            activities: {
                title: "Aktywność dodatkowa",
                location: "Miejsce",
                duration: "Okres"
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
                dialogDescription: "Zamierzasz usunąć aktywność <b>{{name}}</b>. Tej operacji nie można cofnąć.",
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
                descriptionPlaceholder: "Opisz tę aktywność",
                nameIsRequired: "Nazwa jest wymagana",
                startDateMustBeDate: "Data rozpoczęcia musi być poprawną datą"
            }
        },
        stepFour: {
            name: "Pobierz CV",
            title: "Twoje CV jest gotowe!",
            description: "Kliknij poniższy przycisk, aby pobrać swoje CV.",
            downloadButton: "Pobierz CV"
        }
    }
};

export default plTranslation;
