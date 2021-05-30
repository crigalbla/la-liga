# La Liga Project
Aplication created with React about information of a La Liga

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Project Clarifications

### General information

The project show a list of users and the details of each of them. Each user can be edited and deleted (simulated according to the API).
It has been used React 17.0.2, Redux 4.1.0, Redux-Saga 1.1.3, Hooks and Functionals components. Other important libraries:

Dependencies
"node-sass": "^6.0.0" => To be able to use sass and scss.
"bootstrap": "^5.0.1" => For quick styles.
"react-bootstrap": "^1.6.0" => To have components created and styled.
"react-router-dom": "^5.2.0" => To manage the routers.

Dev dependencies:
"eslint": "^7.27.0"
"prettier": "2.3.0"
"husky": "^6.0.0"
"lint-staged": "^11.0.0"

### Structure

The project is structured with views and components. The views are the pages that we see and these use the components if is necessary.
All the request are called from redux-saga except the login request that it call the service fetch.service.
The token is managed with the service storage.service.
React-router-dom was use to router the web located in App.jsx.
The project have a file .env with a unique constant => REACT_APP_API.

### Views

The project only have 3 views, Login, Home(the list) and UserDetails.

### Components

The project have 2 components, Modal(to show alert messages) and Header.
