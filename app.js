const inquirer = require('inquirer');
const generatePage = require('./src/page-template');
const { writeFile } = require('./utils/generateMarkdown.js');

const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project? (Required)',
      validate: titleInput => {
        if (titleInput) {
          return true;
        } else {
          console.log('Please enter a title!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'description',
      message: 'Describe your project? (Required)',
      validate: titleInput => {
        if (titleInput) {
          return true;
        } else {
          console.log('Please provide a description!');
          return false;
        }
      }
    },
    {
      type: 'confirm',
      name: 'confirmToc',
      message: 'Would you like to enter a table of contents?',
      default: true
    },
    {
      type: 'checkbox',
      name: 'toc',
      message: 'What sections do you want to include? (Check all that apply)',
      choices: ['Description', 'Installation', 'Usage', 'License', 'Credits', 'Tests', "Questions"],
      when: ({confirmToc}) => confirmToc
    },
    {
      type: 'input',
      name: 'installation',
      message: 'How do you install the App? (Required)',
      validate: installationInput => {
        if (installationInput) {
          return true;
        } else {
          console.log('Please describe the installation process!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'usage',
      message: 'How can the App be used? (Required)',
      validate: usageInput => {
        if (usageInput) {
          return true;
        } else {
          console.log('Please describe how to use the App!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'credits',
      message: 'Who contributed to the project? (Required)',
      validate: creditsInput => {
        if (creditsInput) {
        return true;
        } else {
        console.log('Please describe who contributed!');
        return false;
        }
      }
    },
    {
      type: 'confirm',
      name: 'confirmLicense',
      message: 'Would you like to add a license?',
      default: true
    },
    {
      type: 'list',
      name: 'license',
      message: 'Please select a license (Required)',
      choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'MIT', 'The Unlicense'],
      when: ({confirmLicense}) => confirmLicense
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Describe instructions on how to test the App? (Required)',
      validate: testsInput => {
        if (testsInput) {
        return true;
        } else {
        console.log('Please describe how to test the App');
        return false;
        }
      }
    },
    {
      type: 'input',
      name: 'github',
      message: 'Please enter your GitHub username. (Required)',
      validate: githubInput => {
        if (githubInput) {
        return true;
        } else {
        console.log('You must enter your GitHub username!');
        return false;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: 'Please enter your email. (Required)',
      validate: emailInput => {
        if (emailInput) {
        return true;
        } else {
        console.log('You must enter your email!');
        return false;
        }
      }
    },
  ]);
};

promptUser()
  .then(readmeData => {
    return generatePage(readmeData);
  })
  .then(pageMD => {
    return writeFile(pageMD);
  })
  .then(writeFileResponse => {
    console.log(writeFileResponse);
  })
  .catch(err => {
    console.log(err);
  });

