//function that returns table of contents if there is one
const generateToc = toc => {
  if (!toc) {
    return '';
  }

  return `
    <section class="my-3" id="about">
      <h2 class="text-dark bg-primary p-2 display-inline-block">Table of Contents</h2>
      <ul>${toc.map(toc => toc).join(',')}</ul>
    </section>
  `;
};

//function that returns badges if there are any
const generateBadges = badges => {
  if (!badges) {
    return '';
  }

  return `
    <section class="my-3" id="about">
      <h2 class="text-dark bg-primary p-2 display-inline-block">Badges</h2>
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
    <section class="my-3" id="about">
      <h2 class="text-dark bg-primary p-2 display-inline-block">Tests</h2>
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
    <section class="my-3" id="about">
      <h2 class="text-dark bg-primary p-2 display-inline-block">Questions</h2>
      <p>${questions}</p>
    </section>
  `;
};

const generatePage = pageArr => {
  return `
    <section class="my-3" id="portfolio">
      <h1 class="text-dark bg-primary p-2 display-inline-block">README</h1>
      <div class="flex-row justify-space-between">
      ${pageArr
        .map(({ description, installation, usage, license, credits, questions, }) => {
          return `
          <div class="col-12 mb-2 bg-dark text-light p-3">
            <h2 class="portfolio-item-title text-light">${description}</h2>
            <h2 class="portfolio-item-title text-light">${installation}</h2>
            <h2 class="portfolio-item-title text-light">${usage}</h2>
            <h2 class="portfolio-item-title text-light">${license}</h2>
            <h2 class="portfolio-item-title text-light">${credits}</h2>
          </div>
        `;
        })
        .join('')} 
      </div>
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
      <h2 class="text-dark bg-primary p-2 display-inline-block">Description</h2>
        <p>${description}</p>
      <h2 class="text-dark bg-primary p-2 display-inline-block">Installation</h2>
        <p>${installation}</p>
      <h2 class="text-dark bg-primary p-2 display-inline-block">Usage</h2>
        <p>${usage}</p>
      ${generateBadges(badges)}
      <h2 class="text-dark bg-primary p-2 display-inline-block" >License</h2>
        <p>${license}</p>
      <h2 class="text-dark bg-primary p-2 display-inline-block">Credits</h2>
        <p>${credits}</p>
      ${generateTests(tests)}
      ${generateQuestions(questions)}
    </main>
  </body>
  </html>
  `;
};