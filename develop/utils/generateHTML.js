const fs = require('fs');
const inquirer = ('inquirer')
const index = ('../index.js');

// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = '';
  if (license === 'Apache 2.0') {
    badge = "![Apache](https://img.shields.io/badge/License-Apache_2.0-blue.svg)"
  } else if (license === 'MIT') {
    badge = "![MIT](https://img.shields.io/badge/License-MIT-yellow.svg)"
  } else if (license === 'Boost Software License 1.0') {
    badge = "![Boost](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)"
  } else {
    badge = ''
  }
  return badge;
}

// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let link = '';
  if (license === 'Apache 2.0') {
    link = 'https://opensource.org/licenses/Apache-2.0'
  } else if (license === 'MIT') {
    link = 'https://opensource.org/licenses/MIT'
  } else if (license === 'Boost Software License 1.0') {
    link = 'https://www.boost.org/LICENSE_1_0.txt'
  } else {
    link = ''
  }
  return link;
}

// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = ''
  if (license === 'None') {
    licenseSection = ''
  } else {
    licenseSection = `License:${license}`
  }
  return licenseSection;
}

// Create a function to generate markdown for README
function generateMarkdown(questions,answer) {
  return `
  # ${answer.Title}

  ## License: 
  ${renderLicenseSection(answer.License)} ${renderLicenseBadge(answer.License)}
  ### ${renderLicenseLink(answer.License)}

  ## Table of Content:
  ### * [License](#License)
  ### * [Description](#Description)
  ### * [Usage](#Usage)
  ### * [Contribution](#Contribution)
  ### * [Test](#Test)
  ### * [Questions](#Questions)


## Description:
${answer.Description}

## Installation:
${answer.Installation}

## Usage:
${answer.Usage}

## Contribution:
${answer.Contribution}

## Test: 
${answer.Tests}

## Questions:
${answer.Questions}

`;
}

module.exports = generateMarkdown;
