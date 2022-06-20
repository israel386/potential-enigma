// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generatePage = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'Provide name of your project'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of your project'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Provide form of installation?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provie instuction and exampales for use'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Provide lisence',
        choices: ['apache-2.0', 'agpl-3.0', 'gpl-3.0', 'lgpl-3.0', 'mpl-2.0', 'mit', 'unlicense']
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'List contributers'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'provide examples on how to run project'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter email address'
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter gitHub username'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
