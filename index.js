// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
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
            
        }

    ])
}




// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
