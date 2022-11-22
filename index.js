const inquirer = require('inquirer');
const fs = require('fs');
const jest = require('jest');

// generate HTML
const generateHTML = ({ 
    // all the form filled blocks
    managerName, licenseBadge, descriptionOne, descriptionTwo, descriptionThree, descriptionFour, installation, usage, license, licenseURL, contributing, test, githubUsername, emailAddress }) =>
`
// This is where the HTML skeleton goes
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <p>${managerName}</p>
</body>
</html>
`

inquirer
    .prompt([
        {
            type: 'input',
            name: 'managerName',
            message: 'What is the name of your team manager?',
        },
        {
            type: 'input',
            name: 'managerID',
            message: "What is your team manager's employee ID?",
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: "What is your team manager's email address?",
        },
        {
            type: 'input',
            name: 'managerOfficeNumber',
            message: "What is your team manager's office number?",
        },
        {
            type: 'list',
            name: 'addEngineerOrInternOne',
            message: 'Would you like to add an Engineer or an Intern next?',
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'internName',
            message: 'What is the name of this intern?',
            when(answers) {
                return answers.addEngineerOrInternOne === 'Intern'
            }
        },
        {
            type: 'input',
            name: 'internID',
            message: "What is this intern's employee ID?",
            when(answers) {
                return answers.addEngineerOrInternOne === 'Intern'
            }
        },
        {
            type: 'input',
            name: 'internEmail',
            message: "What is this intern's email address?",
            when(answers) {
                return answers.addEngineerOrInternOne === 'Intern'
            }
        },
        {
            type: 'input',
            name: 'internSchool',
            message: "What school does this intern go to?",
            when(answers) {
                return answers.addEngineerOrInternOne === 'Intern'
            }
        },
        {
            type: 'input',
            name: 'engineerName',
            message: 'What is the name of this engineer?',
            when(answers) {
                return answers.addEngineerOrInternOne === 'Engineer'
            }
        },
        {
            type: 'input',
            name: 'engineerID',
            message: "What is this engineer's employee ID?",
            when(answers) {
                return answers.addEngineerOrInternOne === 'Engineer'
            }
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: "What is this engineer's email address?",
            when(answers) {
                return answers.addEngineerOrInternOne === 'Engineer'
            }
        },
        {
            type: 'input',
            name: 'engineerGitHub',
            message: "What is this engineer's GitHub username?",
            when(answers) {
                return answers.addEngineerOrInternOne === 'Engineer'
            }
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

        const htmlPageContent = generateHTML(answers);

        fs.writeFile('index.html', htmlPageContent, (err) =>
            err ? console.log(err) : console.log('Successfully created index.html!')
        );
    });


