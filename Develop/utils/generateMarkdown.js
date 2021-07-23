function replaceString(text, string, newString) {
  let arr = text.split(string);
  let newText = arr.join(newString);
  return newText;
}

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
// Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
//The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
