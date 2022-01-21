//function that returns table of contents if there is one
//code adapted from https://www.w3schools.com/js/js_arrays.asp

const generateToc = toc => {
  if (!toc) {

    return '';

  } else {
      toc.map(toc => toc).join(',');
      let toclength = toc.length;
      let text = ''
      for (let i = 0; i < toclength; i++) {
      text +=`* [${toc[i]}](#${toc[i]})\n`
      }

      return `## Table of Contents
${text}`;
  }
}

//function that returns list of programming languages used
const generateLanguages = languages => {
  if (!languages) {

    return '';

  } else {
      languages.map(languages => languages).join(',');
      let languageslength = languages.length;
      let text = ''
      for (let i = 0; i < languageslength; i++) {
      text +=`* ${languages[i]}\n`
      }

      return `
Programming languages used:
${text}`;
  }
}

//function that returns a license if one was selected
const generateLicense = license => {
  if (!license) {
    return '';
  }

  return `
## License
This App is covered under the following license: ${license}`;
};

//function that returns a license badge if license was selected
//links to badges obtained from https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba
const generateLicenseBadge = license => {
  if (!license) {

    return '';

  } else if (license === 'GNU AGPLv3') {
    badge = '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)'
    return `${badge}`;
  
  } else if (license === 'GNU GPLv3') {
    badge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
    return `${badge}`;
  
  } else if (license === 'GNU LGPLv3') {
    badge = '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)'
    return `${badge}`;

  } else if (license === 'Mozilla Public License 2.0') {
    badge = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
    return `${badge}`;

  } else if (license === 'MIT') {
    badge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    return `${badge}`;

  } else if (license === 'The Unlicense') {
    badge = '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)'
    return `${badge}`;
  }
}

//function that returns test instructions if there are any
const generateTests = tests => {
  if (!tests) {
    return '';
  }

  return `
## Tests
${tests}`;
};

// export function to generate entire page
module.exports = templateData => {
  // destructure page data by section
  const { title, toc, description, languages, installation, usage, license, credits, tests, github, email } = templateData;

  return `
# ${title}
${generateLicenseBadge(license)}
${generateToc(toc)}

## Description
${description}
${generateLanguages(languages)}

## Installation
${installation}

## Usage
${usage}
${generateLicense(license)}

## Credits
${credits}

## Tests
${tests}

## Questions
For questions, contact me via email (${email}) or find me on GitHub (https://github.com/${github})
  `
}