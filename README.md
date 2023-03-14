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

## Tech

### Front-end

- React TypeScript codebase (.tsx and .ts).
- Re-usable components with type interfaces and SASS styling.
- React-Router, Axios requests and authentication routes.
- Scripted linting, formatting, git hooks and unit testing
- Responsive layout for desktop, tablet and mobile use.

### Back-end

- Node.js Express API endpoints and controllers.
- MySQL database (Docker) with population and schema scripts.
- Nodemon for realtime API building and debugging.
- SQL import file for local database provided.

## Front- End & Back-End installation

## 1: Front-end

Phototype requires [Node.js](https://nodejs.org/) v14+ to run. The project is built using npm, to enable yarn you need to allow your version in `package.json`. The engine is preset to npm to make sure everyone on your team has a consistent build.

### Get started with local front-end development:

The front-end lives in the /client folder, separate from the api. In your terminal, navigate to the `client` folder in the project root.

```sh
cd client
```

In the `client` folder, install the dependencies and git hooks by running:

```sh
npm i
```

> Note: The back-end is not running yet, so will not run `npm run dev` yet. See section 2 on how to run the api locally.

The project is setup with a few code quality plugins, to help you and your team work code in a consistent way. To run eslint and prettier, run the following command. It is also highly advised to install the `Prettier` plugin for your IDE. A config for VSCode is included in the `.vscode` folder.

```sh
npm run lint
```

> Note that eslint and prettier will auto-run on every Git commit and push, as set in the `Husky git hooks`.

Finally, automated tests from the `./src/tests` folder can be ran running the following command. These tests are hooked into the build process and git workflow as well, triggering them automatically on commits.

```sh
npm run test
```

### For a production front-end build:

To build the front-end into the `/dist` folder, run the build script:

```sh
npm run build
```

## 2: Back-end

Phototype requires [Node.js](https://nodejs.org/) v14+ to run.
To use the back-end you need a MySQL database. You can install [Docker](https://www.docker.com) on your machine to spin up a local database.

All express dependencies will be installed by a single npm install command. Follow the next steps to run the back-end locally next to the Vite front-end.

> DO keep in mind that front-end and back-end need to run in separate terminal instances, or terminal tabs. This is because, even though they live in a single repo, they are separate applications.

### 2.1: Get started with local back-end API:

The back-end lives under the `api/` folder. In your terminal, `open a new tab` and navigate to the `api` folder from the project root:

```sh
cd api
```

In the /api folder, install all packages:

```sh
npm i
```

### 2.2: Spin up a local MySQL database:

Before you run the back-end server, first spin up a docker mysql database:

> ! Change the MySQL password in the command. Remember this password for the next step.

```sh
docker run --name phototype-mysql -p 3306:3306 -v mysql_volume:/var/lib/mysql/ -d -e "MYSQL_ROOT_PASSWORD=your_password_here" mysql
```

This will create a new container named `phototype-mysql`, with the mysql:latest image, and publish the ports 3306 to the local environment.

This also sets up the volume for the container to persist the database's data, so that it doesn't reset on restart of the host system or the container. To manage the volume for long-term use, have a look at [The MySQL docker hub](https://hub.docker.com/_/mysql).

### Create and populate the database with initial schema and data:

To manage the database, spin up in instance of phpMyAdmin, in a separate docker container:

```sh
docker run --name phototype-phpmyadmin -d --link phototype-mysql:db -p 8081:80 phpmyadmin/phpmyadmin
```

Once both MySQL and phpMyadmin are running locally, you can visit http://localhost:8081 to use phpMyAdmin.
When prompted for login, you can login with user `root` and your previously chosen MySQL password.

In phpMyAdmin, navigate to the `Import` tab on the right and there you upload the SQL dump for the app initial tables and data. Click "Browse" and select the file `api/_mysql_initial_data/mysql_create_db.sql` from the repository. Now click the import button and wait for the import to complete. The database is now ready.

### Start the local back-end API server

Using your back-end terminal tab, in the `/api` folder, start the local nodejs express server:

```sh
npm run start
```

You can now start up a local front-end server:

In a new terminal window, within the `client/` folder, run:

```sh
npm run dev
```

Now, when you open the app on http://localhost:5173 (as given by the front-end console) you will be able to use the app with the data imported to the database.

## Development notes

- The .env file contains a number of configuration variables, for both the front-end and the back-end.
- By default, the login function runs automatically for the front-end. This can be disabled in the `client/.env` file.
- Don't forget to change your MySQL password in the `api/connect.js` file.
- This project is not yet finished. Some components use mockup data from a JSON file in the client src folder.

## License

MIT
