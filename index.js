// Run the application from this file
const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const questions = require('./src/questions');

// manager section
let managerQuestions = [];

const managerName = new questions('input', 'managerName', 'What is the name of the manager?');
managerQuestions.push(managerName);

const managerId = new questions('input', 'managerId', 'What is the ID# for the manager');
managerQuestions.push(managerId);

const managerEmail = new questions('input', 'managerEmail', 'What is the email address for the manager?');
managerQuestions.push(managerEmail);

const managerOfficeNum = new questions('input', 'officenumber', 'What is the office number of the manager?');
managerQuestions.push(managerOfficeNum);

// Engineer Questions
let engineerQuestions = [];

const engineerName = new questions('input', 'engineerName', 'What is the name of the engineer?');
engineerQuestions.push(engineerName);

const engineerId = new questions('input', 'engineerId', 'What is the ID# for the engineer?');
engineerQuestions.push(engineerId);

const engineerEmail = new questions('input', 'engineerEmail', 'What is the email address for the engineer?');
engineerQuestions.push(engineerEmail);

const engineerGitHub = new questions('input', 'engineerGitHub', 'What is the GitHub username of the engineer?');
engineerQuestions.push(engineerGitHub);

// Intern Questions
let internQuestions = [];

const internName = new questions('input', 'internName', 'What is the name of the intern?');
internQuestions.push(internName);

const internId = new questions('input', 'internId', 'What is the ID# for the intern?');
internQuestions.push(internId);

const internEmail = new questions('input', 'internEmail', 'What is the email address for the intern?');
internQuestions.push(internEmail);

const internSchool = new questions('input', 'internSchool', 'What is the name of the school that the intern is attending?');
internQuestions.push(internSchool);

// 

// run inquirer

// Manager Section
inquirer
.prompt(managerQuestions)
.then(answers => {
    // create manager
    const teamManager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.officenumber);
})

// inquirer for intern and engineer sections
