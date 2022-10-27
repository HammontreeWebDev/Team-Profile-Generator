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

// menu selection for intern or engineer
const menuSelection = new questions('list', 'menuSelection', 'Do you want to add any more team members?', ['Engineer', 'Intern', 'No, thanks. I am finished for now!'])
// run inquirer

// -----Manager Section------
async function init() {
    const getManager = await inquirer.prompt(managerQuestions);

    const teamManager = new Manager(getManager.managerName, getManager.managerId, getManager.managerEmail, getManager.officenumber);

    // call menu selection function for adding team members
    menu();
    // console.log(teamManager);
}
// -----Menu Choice Section-----

// Menu to choose whether to add more team members or end the application
async function menu() {
    const getMenu = await inquirer.prompt([menuSelection]);
    if (getMenu.menuSelection == 'Engineer') {
        engineerPrompt();
    }
    else if (getMenu.menuSelection == 'Intern'){
        internPrompt();
    }
    else {
        // build HTML (use source template?) and THEN ====>
        console.log('Ok, thanks for using the Team Profile Generator! Check out your team information, located in the lib folder!');
    }
}
// -----Engineer Section-----

// array for engineer personell
let engineerTeam = [];

// Engineer Prompt
async function engineerPrompt() {
    const getEngineer = await inquirer.prompt(engineerQuestions);

    const addEngineer = new Engineer(getEngineer.engineerName, getEngineer.engineerId, getEngineer.engineerEmail, getEngineer.engineerGitHub);

    engineerTeam.push(addEngineer);

    // Call the menu function again to add more team members
    menu();
    // console.log(engineerTeam);
}

// -----Intern Section-----

// array for Intern personell
let internTeam = [];

// Intern Prompt
async function internPrompt() {
    const getIntern = await inquirer.prompt(internQuestions);

    const addIntern = new Intern(getIntern.internName, getIntern.internId, getIntern.internEmail, getIntern.internSchool);

    internTeam.push(addIntern);

    // call menu function to add more team members
    menu();
    // console.log(internTeam);
}

// call init function
init();