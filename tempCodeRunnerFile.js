// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'Enter the title of your project:',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Enter a description for your project:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Enter the installation instructions:',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Enter the usage information:',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Enter the contribution guidelines:',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Enter the test instructions:',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your project:',
    choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3-Clause', 'None'],
  },
  {
    type: 'input',
    name: 'username',
    message: 'Enter your GitHub username:',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address:',
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log(`${fileName} has been successfully generated!`);
    }
  });
}

// TODO: Create a function to initialize app
async function init() {
  try {
    const userResponses = await inquirer.prompt(questions);
    const readmeContent = generateReadmeContent(userResponses);
    writeToFile('README.md', readmeContent);
  } catch (error) {
    console.error(error);
  }
}

// Function call to initialize app
init();