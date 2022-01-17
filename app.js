const inquirer = require('inquirer');
const generatePage = require('./src/page-template');
const { writeFile, copyFile } = require('./utils/generateMarkdown.js');

const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'confirm',
      name: 'confirmToc',
      message: 'Would you like to enter a table of contents?',
      default: true
    },
    {
      type: 'checkbox',
      name: 'toc',
      message: 'What sections are in your README? (Check all that apply)',
      choices: ['Installation', 'Usage', 'Credits', 'Badges', 'Licence'],
      when: ({confirmToc}) => confirmToc
    },
    {
      type: 'input',
      name: 'installation',
      message: 'How to install? (Required)',
      validate: installationInput => {
        if (installationInput) {
          return true;
        } else {
          console.log('Please describe installation process!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'usage',
      message: 'How to use? (Required)',
      validate: usageInput => {
        if (usageInput) {
          return true;
        } else {
          console.log('Please describe how to use it!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'credits',
      message: 'Who contributed? (Required)',
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
      name: 'confirmBadges',
      message: 'Would you like to enter badges?',
      default: true
    },
    {
      type: 'input',
      name: 'Badges',
      message: 'Please list your badges? (Required)',
      when: ({confirmBadges}) => confirmBadges
    },
    {
      type: 'input',
      name: 'license',
      message: 'List license? (Required)',
      validate: licenseInput => {
        if (licenseInput) {
        return true;
        } else {
        console.log('Please describe the license!');
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
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .then(writeFileResponse => {
    console.log(writeFileResponse);
    return copyFile();
  })
  .then(copyFileResponse => {
    console.log(copyFileResponse);
  })
  .catch(err => {
    console.log(err);
  });

