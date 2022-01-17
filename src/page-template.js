//function that returns table of contents if there is one

const generateToc = tocText => {
  if (!tocText) {
    return '';
  }

  return `
    <section class="my-3" id="about">
      <h2 class="text-dark bg-primary p-2 display-inline-block">Table of Contents</h2>
      ${toc.map(toc => toc).join(',')}
    </section>
  `;
};

//function that returns badges if there are any
const generateBadges = badgesText => {
  if (!badgesText) {
    return '';
  }

  return `
    <section class="my-3" id="about">
      <h2 class="text-dark bg-primary p-2 display-inline-block">Badges</h2>
      <p>${badgesText}</p>
    </section>
  `;
};


const generatePage = pageArr => {
  return `
    <section class="my-3" id="portfolio">
      <h1 class="text-dark bg-primary p-2 display-inline-block">README</h1>
      <div class="flex-row justify-space-between">
      ${pageArr
        .filter(({ feature }) => feature)
        .map(({ installation, usage, credits, license }) => {
          return `
          <div class="col-12 mb-2 bg-dark text-light p-3">
            <h2 class="portfolio-item-title text-light">${installation}</h2>
            <h2 class="portfolio-item-title text-light">${usage}</h2>
            <h2 class="portfolio-item-title text-light">${credits}</h2>
            <h2 class="portfolio-item-title text-light">${license}</h2>
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
  const { projects, about, ...header } = templateData;

  return `
  <!DOCTYPE html>
  <html lang="en">
  
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Portfolio Demo</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
  </head>
  
  <body>
    <header>
      <div class="container flex-row justify-space-between align-center py-3">
        <h1 class="page-title text-secondary bg-dark py-2 px-3">${header.name}</h1>
        <nav class="flex-row">
          <a class="ml-2 my-1 px-2 py-1 bg-secondary text-dark" href="https://github.com/${header.github}">GitHub</a>
        </nav>
      </div>
    </header>
    <main class="container my-5">
      ${generateAbout(about)}
      ${generateProjects(projects)}
    </main>
    <footer class="container text-center py-3">
      <h3 class="text-dark">&copy;2020 by ${header.name}</h3>
    </footer>
  </body>
  </html>
  `;
};