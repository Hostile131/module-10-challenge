const inquirer = require('inquirer');
const fs = require('fs');

const manager = [
  {
    type: "input",
    name: "managerName",
    message: "What is the name of the team manager?",
  },
  {
    type: "input",
    name: "managerID",
    message: "What is your team manager's employeee ID?",
  },
  {
    type: "input",
    name: "managerEmail",
    message: "What is your team manager's email address?",
  },
  {
    type: "input",
    name: "managerOfficeNumber",
    message: "What is your team manager's office number?",
  },
];

const collectInputs2 = async (inputs2 = []) => {
    const questions = [
        {
            type: 'list',
            name: 'menu',
            message: 'Would you like to add an Engineer or an Intern?',
            choices: ['Engineer', 'Intern'],
        },
        {
            type: 'input',
            name: 'employeeName',
            message: "What is this employee's name?",
        },
        {
            type: 'input',
            name: 'employeeID',
            message: "What is this employee's ID?",
        },
        {
            type: 'input',
            name: 'employeeEmail',
            message: "What is this employee's email address?",
        },
        {
            type: 'input',
            name: 'employeeGitHub',
            message: "What is this employee's GitHub username?",
            when: (answers) => {
				if (answers.menu === 'Engineer') {
					return true;
				} else {
					return false;
				}
			}
        },
        {
            type: 'input',
            name: 'employeeSchool',
            message: "What school does this employee attend?",
            when: (answers) => {
				if (answers.menu === 'Intern') {
					return true;
				} else {
					return false;
				}
			}
        },
        {
            type: 'confirm',
            name: 'again',
            message: 'Would you like to add another employee?',
        }
    ]
    const { again, ...answers } = await inquirer.prompt(questions);
    const newInputs = [...inputs2, answers];
    return again ? collectInputs2(newInputs) : newInputs;
};

const main = async () => {
    const inputs = await inquirer.prompt(manager);
    const inputs2 = await collectInputs2();
    const answers = [inputs, inputs2];
    console.log(answers);
};

main()

