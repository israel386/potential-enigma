// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "apache-2.0") {
    return `
  [![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
    `;
  } if (license === "agpl-3.0") {
    return `
  <img src="https://img.shields.io/badge/License-AGPL%20v3-blue.svg" alt="agpl-3.0-badge">
    `;
  } if (license === "gpl-3.0") {
    return `
  <img src="https://img.shields.io/badge/License-GPL%20v3-blue.svg" alt="gpl-3.0-badge">
    `;
  } if (license === "lgpl-3.0") {
    return `
  <img src="https://img.shields.io/badge/License-LGPL%20v3-blue.svg" alt="lgpl-3.0-badge">
    `;
  } if (license === "mpl-2.0") {
    return `
  <img src="https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg" alt="MPL-2.0-badge">
    `;
  } if (license === "mit") {
    return `
  <img src="https://img.shields.io/badge/License-MIT-yellow.svg" alt="mit-badge">
    `;
  } if (license === "unlicense") {
    return `
  <img src="https://img.shields.io/badge/License-Unlicense-blue.svg" alt="unlicense-badge">
    `;
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return `
  https://choosealicense.com/licenses/${license}/
  `;
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.name}
 
   ${renderLicenseBadge(data.license)}
 
  # Table of Contents
  <ul>
    <li>
      <a href="#description">Description</a>
    </li>
    <li>
      <a href="#installation">Installation</a>
    </li>
    <li>
      <a href="#usage">Usage</a>
    </li>
    <li>
      <a href="#license">License</a>
    </li>
    <li>
      <a href="#contributing">Contributing</a>
    </li>
    <li>
      <a href="#tests">Tests</a>
    </li>
    <li>
      <a href="#questions">Questions</a>
    </li>
  </ul>
 
  ## <h1 id="description">Description</h1>
 
  ${data.description}
 
  ## <h1 id="installation">Installation</h1>
 
  ${data.installation}
 
  ## <h1 id="usage">Usage</h1>
 
  ${data.usage}
 
  ## <h1 id="license">License</h1>
 
  This application is covered under ${data.license} license.
 
  To learn more about ${data.license} go to ${renderLicenseLink(data.license)}
 
  ## <h1 id="contributing">Contributing</h1>
 
  ${data.contributing}
 
  ## <h1 id="tests">Tests</h1>
 
  ${data.tests}
 
  ## <h1 id="questions">Questions</h1>
 
  If you have question contact my email at ${data.email} or on gitHub at ${data.github}
`;
}

module.exports = generateMarkdown;
