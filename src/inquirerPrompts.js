const inquirer = require('inquirer');

// Prompt for the team manager's information
const managerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "What is the manager's name?"
    },
    {
        type: 'input',
        name: 'employee_id',
        message: "What is the manager's employee ID?"
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the manager's email address?"
    },
    {
        type: 'input',
        name: 'office_number',
        message: "What is the manager's office number?"
    }
];

inquirer.prompt(managerQuestions)
    .then(managerAnswers => {
        // Prompt for team member information
        const teamQuestions = [
            {
                type: 'list',
                name: 'member_type',
                message: 'Select a team member type to add:',
                choices: ['Engineer', 'Intern', 'Finish']
            },
            {
                type: 'input',
                name: 'name',
                message: "What is the team member's name?"
            },
            {
                type: 'input',
                name: 'employee_id',
                message: "What is the team member's employee ID?"
            },
            {
                type: 'input',
                name: 'email',
                message: "What is the team member's email address?"
            },
            {
                type: 'input',
                name: 'github_username',
                message: "What is the engineer's GitHub username? (leave blank for interns)",
                default: null,
                when: function (answers) {
                    return answers.member_type === 'Engineer';
                }
            },
            {
                type: 'input',
                name: 'school',
                message: "What school does the intern attend? (leave blank for engineers)",
                default: null,
                when: function (answers) {
                    return answers.member_type === 'Intern';
                }
            }
        ];

        return inquirer.prompt(teamQuestions);
    })
    .then(teamAnswers => {
        // Do something with the team member information
        console.log(teamAnswers);
    });
