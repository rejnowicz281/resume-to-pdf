<p align="center">
  <h1 align="center">resume-to-pdf</h1>
  <h4 align="center">Fully customizable resume generator with PDF export</h4>
</p>

<p align="center">
  <a href="https://react.com/">
    <img alt="react" src="https://shields.io/badge/react-black?logo=react&style=for-the-badge" />
  </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
    <img alt="Typescript" src="https://shields.io/badge/TypeScript-3178C6?logo=TypeScript&logoColor=FFF&style=flat-square" />
  </a>
  <a href="https://tailwindcss.com">
    <img alt="tailwind" src="https://img.shields.io/badge/tailwindcss-0F172A?&logo=tailwindcss" />
  </a>
    <a href="https://ui.shadcn.com/">
    <img alt="shadcn" src="https://img.shields.io/badge/shadcn%2Fui-000?logo=shadcnui&logoColor=fff" />
  </a>
</p>

<p align="center">
  <img alt="Last commit" src="https://img.shields.io/github/last-commit/rejnowicz281/resume-to-pdf?color=%23B5CDA3&logo=github&logoColor=white" />
  <img alt="Commit activity" src="https://img.shields.io/github/commit-activity/y/rejnowicz281/resume-to-pdf?color=%23A76844&logo=github&logoColor=white" />
  <img alt="Repo size" src="https://img.shields.io/github/repo-size/rejnowicz281/resume-to-pdf?color=%23C1AC95&logo=github&logoColor=white" />
</p>

## About

resume-to-pdf allows you to create a minimalistic, clean and personalized CV according to your tastes. It also allows you to save multiple resumes, and to export any of them directly in **PDF** and **JSON** format.

This project is **responsive** and **mobile-friendly**.

For the preview of the PDF and exporting functionality, the **@react-pdf/renderer** package was used.\
To allow the displaying of the PDF on mobile devices, wojtekmaj's **@react-pdf** package was used.

([@react-pdf/renderer Github repo](https://github.com/diegomura/react-pdf)).

([wojtekmaj's react-pdf Github repo](https://github.com/wojtekmaj/react-pdf)).

For the components, the **shadcn** component library was used. For the icons, the **lucide-react** library was used.

## Features

-   [x] PDF Export
-   [x] Local Storage
-   [x] Customization
-   [x] Responsive
-   [x] Multiple resumes
-   [x] JSON Export/Import
-   [x] Localization
-   [x] PWA Offline Functionality
-   [x] PouchDB/CouchDB integration
-   [ ] Cover Letters
-   [ ] Multiple PDF themes

## PouchDB/CouchDB real-time synchronization

The project integrates **PouchDB** and **CouchDB** databases for remote replication and synchronization. This means that your resumes are stored locally in the browser's PouchDB database and synchronized with a remote CouchDB server after logging in. This allows you to access your resumes from any device with changes shown in real-time, as long as you are logged in.

To transport your resumes to another device, you can also download them as a JSON file and then import them on another device.

## Authentication

The project uses access and refresh tokens for authentication.\
The access token is stored in memory and the refresh token is stored in a secure HTTP-only cookie.\
The refresh token is used to generate a new access token when the old one expires.
You can log in after registering an account with a unique username and a password.

## API

The project uses an [express.js API](https://github.com/rejnowicz281/resume-to-pdf-api), mainly for user authentication.

## Localization

The project is available in two languages: **English** and **Polish**.\
You can change the language in the settings.

## Offline Functionality

The project uses **PWA** technology and can be installed on your mobile and desktop device.\
The app is also fully offline-friendly, meaning you don't need an internet connection to use it.

## Demo

Live demo here: [live demo](https://resume-to-pdf.netlify.app)

## Available scripts

In the project directory, you can run:

### `npm i`

To install all the dependencies

### `npm run dev`

To open the app in development mode.\
Open [http://localhost:5173](http://localhost:5173) to view it in your browser.
