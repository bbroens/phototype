# Phototype

## A React.js social app for photography

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white) ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![React-router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white) ![Vitest](https://img.shields.io/badge/testing%20library-323330?style=for-the-badge&logo=testing-library&logoColor=red) ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![CSS3](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white) ![NodeJS](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black) ![Express](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge) ![MySQL](https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=whit)

Phototype is an open source social media prototype aimed at the shareable nature of photography.

- Front-end built with React.js, Typescript, React-router, SASS and Vite.
- Back-end API built with Node.js Express on a Docker MySQL database.
- Fully configured linter, git hooks and initial automated testing.
- ✨Highly expandable and customizable ✨

## About the app

Phototype has a responsive UI with global darkmode/lightmode. While post data is fetched from the API, user settings are stored in local browser storage - offloading user settings from the database. The front-end and back-end can be ran locally, the database can quickly be spun up using public Docker images.

![Preview: Light mode](/client/public/preview-light.jpg?raw=true)

> Responsive UI with client-side data fetching for rich media posts and comments.

![Preview: Dark mode](/client/public/preview-dark.jpg?raw=true)

> Global UI dark mode with Sass mixins.

### Front-end

- React TypeScript codebase (.tsx and .ts).
- Re-usable components with type interfaces and SASS styling.
- React-Router and React Query libraries.
- Scripted linting, formatting, git hooks and unit testing

### Back-end

- Node.js Express API with bespoke endpoints.
- MySQL database (Docker) with population and schema scripts.
- Nodemon for realtime API building and debugging.
- Dummy data for initial spin-up provided.

## Installation
