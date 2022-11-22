const inquirer = require('inquirer');
const fs = require('fs');

const generateREADME = ({ appName, licenseBadge, descriptionOne, descriptionTwo, descriptionThree, descriptionFour, installation, usage, license, licenseURL, contributing, test, githubUsername, emailAddress }) =>
`# ${appName}

${licenseBadge}

## Description

- Motivation for this project: ${descriptionOne}
- Reason for this project: ${descriptionTwo}
- Problem(s) solved by this project: ${descriptionThree}
- Lessons learned: ${descriptionFour}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${installation}

## Usage

${usage}

## License

[${license}](${licenseURL})

## Contributing

${contributing}

## Tests

${test}

## Questions

- [GitHub profile](https://www.github.com/${githubUsername})
- [${emailAddress}](mailto:${emailAddress})`

inquirer
    .prompt([
        {
            type: 'input',
            name: 'appName',
            message: 'What is the name of your application?',
        },
        {
            type: 'input',
            name: 'descriptionOne',
            message: 'Briefly describe your application. What was your motivation for making this application?',
        },
        {
            type: 'input',
            name: 'descriptionTwo',
            message: 'Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")'
        },
        {
            type: 'input',
            name: 'descriptionThree',
            message: 'What problem does this application solve?'
        },
        {
            type: 'input',
            name: 'descriptionFour',
            message: 'What did you learn?'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'How do you install your application?',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How is your application used?',
        },
        {
            type: 'list',
            name: 'license',
            message: 'What license is your application under?',
            choices: ['GNU General Public License v3.0', 'MIT License', 'Mozilla Public License 2.0', 'The Unlicense']
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'How would you like others to contribute to this project?',
        },
        {
            type: 'input',
            name: 'test',
            message: 'How is your application tested?'
        },
        {
            type: 'input',
            name: 'githubUsername',
            message: 'What is your GitHub username?'
        },
        {
            type: 'input',
            name: 'emailAddress',
            message: 'What is your e-mail address?'
        },
        {
            type: 'input',
            name: 'questions',
            message: 'What is the best way for you to be reached with any further questions?'
        },
    ])
    .then((answers) => {
        if (answers.license === 'GNU General Public License v3.0') {
            answers.licenseURL = 'https://www.gnu.org/licenses/gpl-3.0';
            answers.licenseBadge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
        }
        else if (answers.license === 'MIT License') {
            answers.licenseURL = 'https://opensource.org/licenses/MIT';
            answers.licenseBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
        }
        else if (answers.license === 'Mozilla Public License 2.0') {
            answers.licenseURL = 'https://www.mozilla.org/en-US/MPL/2.0/';
            answers.licenseBadge = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://www.mozilla.org/en-US/MPL/2.0/)'
        }
        else if (answers.license === 'The Unlicense') {
            answers.licenseURL = 'https://unlicense.org/';
            answers.licenseBadge = '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)'

        };

        const readmePageContent = generateREADME(answers);

        fs.writeFile('README2.md', readmePageContent, (err) =>
            err ? console.log(err) : console.log('Successfully created README.md!')
        );
    });


