// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');
// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub username?',
            validate: githubInput => {
                if (githubInput){
                    return true;

                } else {
                    console.log('Enter your GitHub Username');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email-address?',
            validate: emailInput => {
                if (emailInput){
                    return true;
                }   else{
                    console.log('Enter your e-mail adress');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Write a short description of your project',
            validate: descriptionInput => {
                if (descriptionInput){
                    return true;
                } else {
                    console.log('Please provide a short description of your project');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
            validate: titleInput => {
                if (descriptionInput){
                    return true;
                }  else{
                    console.log('Please enter the title of your project');
                    return false; 
                }
            }
        },
        {
            type: 'list',
            name: 'License',
            messgae: 'Which License does your project have?',
            choices: ['MIT', 'GNU AGPLv3','GNU GPLv3', 'GNU LGPLv3','Apache 2.0', 'Mozilla 2.0', 'Boost Software', 'Unlicense', 'None'],
            default: ['MIT']
        },
        {
            type: 'input',
            name: 'install',
            message: 'if applicable, list the steps required to install your project'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide a short description on how to use the app',
        },
        {
            type: 'input',
            name: 'test',
            message: 'What commands should be run to execute tests?',
        },
        {
            type: 'input',
            name: 'contributors',
            message: 'Provide guidelines for users about contributing to the repo'
        }
    ]);
};

    // TODO: Create a function to write README file
    const init = () => {
        questions()
        //get user answers
        .then(answers => {
            return generateMarkdown(answers);
    })
        //use data ti display on page
        .then(data => {
        return generateMarkdown(answers);
    })
    //use data to display on page
}
// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
