const inquirer = require('inquirer');
const fs = require('fs');
const {generateHTML} = require('./src/generateHtml');

class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getRole() {
    return 'Employee';
  }
}

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }

  getOfficeNumber() {
    return this.officeNumber;
  }

  getRole() {
    return 'Manager';
  }
}

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }

  getGithub() {
    return this.github;
  }

  getRole() {
    return 'Engineer';
  }
}

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }

  getSchool() {
    return this.school;
  }

  getRole() {
    return 'Intern';
  }
}

async function addEmployee(type) {
  const questions = [
    {
      type: 'input',
      message: `What is the name of the ${type}?`,
      name: 'name',
    },
    {
      type: 'input',
      message: `What is the ID of the ${type}?`,
      name: 'id',
    },
    {
      type: 'input',
      message: `What is the email address of the ${type}?`,
      name: 'email',
    },
    {
      type: 'input',
      message: `What is the ${
        type === 'Manager' ? 'office number' : 'GitHub username'
      } of the ${type}?`,
      name: type === 'Manager' ? 'officeNumber' : 'github',
    },
  ];

  if (type === 'Intern') {
    questions.push({
      type: 'input',
      message: 'What school does the intern attend?',
      name: 'school',
    });
  }

  let response;

  try {
    response = await inquirer.prompt([
      ...questions,
      {
        type: 'confirm',
        message: 'Would you like to add another team member?',
        name: 'addAnother',
      },
    ]);
  } catch (err) {
    console.error(err);
    return;
  }

  const { name, id, email, officeNumber, github, school } = response;

  switch (type) {
    case 'Manager':
      team.push(new Manager(name, id, email, officeNumber));
      break;
    case 'Engineer':
      team.push(new Engineer(name, id, email, github));
      break;
    case 'Intern':
      team.push(new Intern(name, id, email, school));
      break;
  }

  if (response.addAnother) {
    await addEmployee(
      await inquirer.prompt([
        {
          type: 'list',
          message: 'What type of team member would you like to add?',
          choices: ['Engineer', 'Intern'],
          name: 'type',
        },
      ]).then((res) => res.type),
    );
  } else {
    generateHTML();
  }
}

async function init() {
  console.log('Please build your team!');
  await addEmployee('Manager');
}

const team = [];
init();
