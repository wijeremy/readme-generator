// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs")
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [];
// Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer
  .prompt([
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
      options: ['BSD', 'MIT', 'GNU']
    },
    {
        type:'input',
        message: 'What was your motivation?',
        name: 'motivation',
    },
    {
        type:'input',
        message: 'Why did you build this project?',
        name: 'why',
    },
    {
        type:'input',
        message: 'What problem does it solve?',
        name: 'problem',
    },
    {
        type:'input',
        message: 'What did you learn?',
        name: 'learn',
    },
    {
        type:'input',
        message: 'What are the steps required to install your project?',
        name: 'install',
    },
    {
        type:'input',
        message: 'Provide instructions and examples for use.',
        name: 'use',
    },
    
  ])
  .then((response) =>
    console.log(response.username)
  );
}

// Function call to initialize app
init();
