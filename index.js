const inquirer = require('inquirer');
const fs = require('fs');

const generateReadmeContent = (answers) => {
  // Use the 'answers' object to dynamically generate the README content
  // Construct the README content based on the input

  const readmeContent = `
# ${answers.title}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Description
${answers.description}

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
![License Badge](https://img.shields.io/badge/License-${answers.license}-brightgreen)
This application is covered under the ${answers.license} license.

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## Questions
For questions or concerns about this project, please contact ${answers.email}.
GitHub: [${answers.username}](https://github.com/${answers.username})
`;

  return readmeContent;
};

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

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log(`${fileName} has been successfully generated!`);
    }
  });
}

async function init() {
  try {
    const userResponses = await inquirer.prompt(questions);
    const readmeContent = generateReadmeContent(userResponses);
    writeToFile('README.md', readmeContent);
  } catch (error) {
    console.error(error);
  }
}

init();
