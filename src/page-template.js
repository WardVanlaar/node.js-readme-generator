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
      text += `* ${toc[i]}`
      }

      return `
  ## Table of Contents
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
//links to shields obtained from https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba
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

  } else if (license === 'Apache License 2.0') {
    bagde = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
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
  const { title, toc, description, installation, usage, license, credits, tests } = templateData;

  return `
  # ${title}
  ${generateLicenseBadge(license)}
  ${generateToc(toc)}

  ## Description
  ${description}

  ## Installation
  ${installation}

  ## Usage
  ${usage}
  ${generateLicense(license)}

  ## Credits
  ${credits}
  ${generateTests(tests)}
  
  `

  // return `
  // <!DOCTYPE html>
  // <html lang="en">
  
  // <head>
  //   <meta charset="UTF-8">
  //   <meta name="viewport" content="width=device-width, initial-scale=1.0">
  //   <meta http-equiv="X-UA-Compatible" content="ie=edge">
  //   <title>README</title>
  //   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
  //   <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
  //   <link rel="stylesheet" href="style.css">
  // </head>
  
  // <body>
  //   <header>
  //     <div class="container flex-row justify-space-between align-center py-3">
  //       <h1 class="page-title text-secondary bg-dark py-2 px-3">${title}</h1>
  //     </div>
  //     <div>"${generateLicenseBadge(license)}</div>
  //   </header>
  //   <main class="container my-5">
  //     ${generateToc(toc)}     
  //     <h2 class="text-dark bg-primary p-2 display-inline-block" id="Description">Description</h2>
  //       <p>${description}</p>
  //     <h2 class="text-dark bg-primary p-2 display-inline-block" id="Installation">Installation</h2>
  //       <p>${installation}</p>
  //     <h2 class="text-dark bg-primary p-2 display-inline-block" id="Usage">Usage</h2>
  //       <p>${usage}</p>
  //     ${generateLicense(license)}
  //     <h2 class="text-dark bg-primary p-2 display-inline-block" id="Credits">Credits</h2>
  //       <p>${credits}</p>
  //     ${generateTests(tests)}
  //     ${generateQuestions(questions)}
  //   </main>
  // </body>
  // </html>
  // `;
};