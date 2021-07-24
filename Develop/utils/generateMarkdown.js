const fs = require("fs")

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
  err ? console.error(err) : console.log('Success!')
);
}

function replaceString(text, string, newString) {
  let arr = text.split(string);
  let newText = arr.join(newString);
  return newText;
}

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'BSD':
      return "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
    case 'MIT':
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    case 'GNU':
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    default:
      return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'BSD':
      return "https://opensource.org/licenses/BSD-3-Clause";
    case 'MIT':
      return "https://opensource.org/licenses/MIT";
    case 'GNU':
      return "https://www.gnu.org/licenses/gpl-3.0";
    default:
      return "";
  }
}

function renderLicenseText(license, year, name) {
  switch (license) {
    case 'BSD':
      fs.readFile('./templates/bsdLicense.txt', 'utf8', (error, data) => {if (error){console.error(error)} else{
        let text = replaceString(data, "[year]", year)
        text = replaceString(data, "[full name]", name)
        writeToFile('license.txt', text)
      }});
    case 'MIT':
      fs.readFile('./templates/bsdLicense.txt', 'utf8', (error, data) => {if (error){console.error(error)} else{
        let text = replaceString(data, "[year]", year)
        text = replaceString(data, "[full name]", name)
        writeToFile('license.txt', text)
      }});
    case 'GNU':
      fs.readFile('./templates/bsdLicense.txt', 'utf8', (error, data) => {if (error){console.error(error)} else{
        let text = replaceString(data, "[year]", year)
        text = replaceString(data, "[full name]", name)
        writeToFile('license.txt', text)
      }});
    default:
      return "";
  }
}
// TODO: Create a function to generate markdown for README
// Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
//The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).
function generateMarkdown(data) {
  let badge = renderLicenseBadge(data.license);
  let link = renderLicenseLink(data.license)
  let licenseText = renderLicenseText(data.license)
  return ` 
# ${data.title}
${badge}
## Description
${data.why}
${data.problem}
${data.learn}
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
## Installation
${data.install}
## Usage
${data.use}
## License
I am using [${data.license}](${link}) to license this app.
## Contributing
${data.contribute}
## Tests
${data.test}
## Questions?
Email me at ${data.email} or visit [my github page](github.com/${data.username})
  `  
}

module.exports = generateMarkdown;
