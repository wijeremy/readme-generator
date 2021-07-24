// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs")
const generateMarkDown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'What is your name?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'What year is it?',
        name: 'year',
    },
    {
        type: 'list',
        message: 'Which license would you like to use?',
        name: 'license',
        choices: ['BSD', 'MIT', 'GNU', 'No License']
    },
    {
        type:'input',
        message: 'Why did you build this project?',
        name: 'why',
        placeholder: 'I built this project because'
    },
    {
        type:'input',
        message: 'What problem does it solve?',
        name: 'problem',
        placeholder: 'This app solves the problem of'
    },
    {
        type:'input',
        message: 'What did you learn?',
        name: 'learn',
        placeholder: 'I learned'
    },
    {
        type:'input',
        message: 'What are the steps required to install your project?',
        name: 'install'
    },
    {
        type:'input',
        message: 'Provide instructions and examples for use.',
        name: 'use'
    },
    {
        type:'input',
        message: 'How can someone contribute? Also, list contributors.',
        name: 'contribute'
    },
    {
        type:'input',
        message: 'Give us testing instructions.',
        name: 'test'
    },
    {
        type:'input',
        message: 'What is your email?',
        name: 'email'
    },
    {
        type:'input',
        message: 'What is your github user name?',
        name: 'username'
    }
];
// Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('Success!')
  );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((response) =>{ 
            let readme = generateMarkDown(response)
            writeToFile("README.md", readme)
        });
}

// Function call to initialize app
init();
