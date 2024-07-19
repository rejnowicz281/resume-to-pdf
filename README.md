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
-   [ ] JSON Import
-   [ ] Localization
-   [ ] PWA Offline Functionality
-   [ ] Multiple resume themes

## Local Storage

The project uses **localStorage** to store the resumes.
This means that the resumes are stored in the browser's local storage and are not shared with any server. This also means that the resumes are not available on other devices.\
You could use the **JSON** export feature to save the resume as a JSON file and then save it to local storage on another device. Although this is not the most convenient solution, it is the only one available at the moment.\
A JSON import feature is in the works. Might also add a dedicated server to store the resumes.

## Demo

Live demo here: [live demo](https://rejnowicz281.github.io/resume-to-pdf/)

## Available scripts

In the project directory, you can run:

### `npm i`

To install all the dependencies

### `npm run dev`

To open the app in development mode.\
Open [http://localhost:5173](http://localhost:5173) to view it in your browser.
