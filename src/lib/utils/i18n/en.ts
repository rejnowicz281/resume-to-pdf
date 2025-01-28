const enTranslation = {
    logout: "Logout",
    login: "Login",
    register: "Register",
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
    present: "Present",
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
        links: "Links",
        rodoClause: "I hereby consent to my data being processed for the purpose of considering this application.",
        consentToFurtherDataProcessing:
            "I consent to the processing of my personal data for multiple recruitment processes."
    },
    authForm: {
        username: "Username",
        usernamePlaceholder: "johndoe",
        password: "Password",
        passwordMustBeThreeCharacters: "Password must be at least 3 characters",
        orContinueWith: "OR CONTINUE WITH",
        invalidUsernameOrPassword: "Invalid username or password",
        usernameAlreadyTaken: "Username already taken",
        usernameIsRequired: "Username is required",
        usernameMustBeLowercase: "Username must be lowercase",
        usernameCannotStartWithUnderscore: "Username cannot start with an underscore (_)",
        usernameCannotContainColon: "Username cannot contain a colon (:)"
    },
    settingsPage: {
        loggedInDescription: "Logged in as <b>{{username}}</b>",
        loginDescription: "Log in to sync your resumes across devices",
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
                "Your JSON data should adhere to the following format. <br /> All fields are optional. Some fields like (_id, creation dates) will be automatically filled in if missing."
        }
    },
    editResume: {
        title: "Edit Resume"
    },
    deleteResume: {
        title: "Are you sure?",
        description: "You are about to delete the <b>{{name}}</b> resume. This action cannot be undone.",
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
            confidentiality: {
                title: "Confidentiality",
                includeRodoClause: "Include RODO clause",
                includeDataProcessingConsent:
                    "Include consent to further data processing for multiple recruitment processes"
            },

            imagePicker: {
                showImage: "Show Image",
                upload: "Upload an image from disk",
                uploadOr: "Or drag and drop an image here",
                supportedFormats: "Supported formats: JPG, PNG (max. 6 MB)"
            },
            basicInfoForm: {
                title: "Basic Information",
                firstName: "First Name",
                firstNamePlaceholder: "John",
                lastName: "Last Name",
                lastNamePlaceholder: "Doe",
                dateOfBirth: "Date of Birth",
                firstNameIsRequired: "First name is required",
                lastNameIsRequired: "Last name is required"
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
                invalidEmail: "Invalid email address",
                emailIsRequired: "Email is required",
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
                descriptionPlaceholder: "Describe your responsibilities and achievements",
                titleIsRequired: "Title is required",
                startDateMustBeDate: "Start date must be a valid date"
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
                descriptionPlaceholder: "Describe your training experience",
                nameIsRequired: "Name is required",
                issueDateMustBeDate: "Issue date must be a valid date",
                organizationIsRequired: "Organization is required"
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
                levelPlaceholder: "Select language level",
                languageIsRequired: "Language is required",
                levelIsRequired: "Language experience level is required"
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
                descriptionPlaceholder: "Describe your education",
                institutionIsRequired: "Institution is required",
                startDateMustBeDate: "Start date must be a valid date",
                levelIsRequired: "Level of education is required"
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
                skill: "Skill",
                skillIsRequired: "Skill is required"
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
                dialogDescription: "You are about to delete the <b>{{url}}</b> link. This action cannot be undone.",
                cancelButton: "Cancel",
                deleteButton: "Delete"
            },
            linkForm: {
                url: "URL",
                description: "Description",
                descriptionPlaceholder: "My LinkedIn Profile",
                urlMustBeValid: "URL must be a valid URL"
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
                descriptionPlaceholder: "Describe this activity",
                nameIsRequired: "Name is required",
                startDateMustBeDate: "Start date must be a valid date"
            }
        },
        stepFour: {
            name: "Download Resume",
            title: "Your Resume is ready!",
            description: "Click the button below to download your resume.",
            downloadButton: "Download Resume"
        }
    }
};

export default enTranslation;
