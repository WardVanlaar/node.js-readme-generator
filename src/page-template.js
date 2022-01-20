//function that returns table of contents if there is one
//code adapted from https://www.w3schools.com/js/js_arrays.asp

const generateToc = toc => {
  if (!toc) {

    return '';

  } else {
      toc.map(toc => toc).join(',');
      let toclength = toc.length;
      let text = "<ul>";
      for (let i = 0; i < toclength; i++) {
        text += `<li> <a href="#${toc[i]}">  ${toc[i]} </a></li>`
      }
      text += "</ul>"

      return `
        <section class="my-3">
          <h2 class="text-dark bg-primary p-2 display-inline-block">Table of Contents</h2>
          ${text}
        </section>
      `;
  }
}
        
//function that returns badges if there are any
const generateBadges = badges => {
  if (!badges) {
    return '';
  }

  return `
    <section class="my-3">
      <h2 class="text-dark bg-primary p-2 display-inline-block" id="Badges">Badges</h2>
      <p>${badges}</p>
    </section>
  `;
};

//function that returns test instructions if there are any
const generateTests = tests => {
  if (!tests) {
    return '';
  }

  return `
    <section class="my-3">
      <h2 class="text-dark bg-primary p-2 display-inline-block" id="Tests">Tests</h2>
      <p>${tests}</p>
    </section>
  `;
};

//function that returns unresolved questions if there are any
const generateQuestions = questions => {
  if (!questions) {
    return '';
  }

  return `
    <section class="my-3">
      <h2 class="text-dark bg-primary p-2 display-inline-block" id="Questions">Questions</h2>
      <p>${questions}</p>
    </section>
  `;
};

// export function to generate entire page
module.exports = templateData => {
  // destructure page data by section
  const { title, toc, description, installation, usage, badges, license, credits, tests, questions } = templateData;

  return `
  <!DOCTYPE html>
  <html lang="en">
  
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>README</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
  </head>
  
  <body>
    <header>
      <div class="container flex-row justify-space-between align-center py-3">
        <h1 class="page-title text-secondary bg-dark py-2 px-3">${title}</h1>
      </div>
    </header>
    <main class="container my-5">
      ${generateToc(toc)}     
      <h2 class="text-dark bg-primary p-2 display-inline-block" id="Description">Description</h2>
        <p>${description}</p>
      <h2 class="text-dark bg-primary p-2 display-inline-block" id="Installation">Installation</h2>
        <p>${installation}</p>
      <h2 class="text-dark bg-primary p-2 display-inline-block" id="Usage">Usage</h2>
        <p>${usage}</p>
      ${generateBadges(badges)}
      <h2 class="text-dark bg-primary p-2 display-inline-block" id="License">License</h2>
        <p>${license}</p>
      <h2 class="text-dark bg-primary p-2 display-inline-block" id="Credits">Credits</h2>
        <p>${credits}</p>
      ${generateTests(tests)}
      ${generateQuestions(questions)}
    </main>
  </body>
  </html>
  `;
};