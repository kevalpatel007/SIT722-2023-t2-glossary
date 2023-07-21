const express = require('express');
const app = express();
const port = 3000; // You can use any port number you prefer

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

const glossary = [
  {
    id: 1,
    term: 'Node.js',
    definition: 'Node.js is an open-source, server-side JavaScript runtime environment built on Chrome V8 JavaScript engine. It allows developers to execute JavaScript code outside of a web browser, enabling server-side scripting to create dynamic web applications.',
    references: 'Node.js Foundation. (2022, January 25). "Node.js." Node.js Foundation. Available online: https://nodejs.org/ (accessed July 21, 2023).'
  },
  {
    id: 2,
    term: 'Express',
    definition: 'Express.js is a Node.js web application framework that is quick and easy free from bias, and simple. It offers a variety of powerful features and tools for developing online applications and APIs, making it easier to manage HTTP requests, route traffic, use middleware, and serve static files.',
    references: '[Expressjs. (2022, August 10). "Express.js." Expressjs. Available online: https://expressjs.com/ (accessed July 21, 2023)'
  },

  {
    id: 3,
    term: 'Git',
    definition: 'A distributed version control system used to track changes in source code and manage collaborative development projects.',
    references: 'https://git-scm.com/'
  },
  {
    id: 4,
    term: 'DevOps',
    definition: 'DevOps is a set of techniques and tools created to help organizations create apps and services more quickly than with conventional software development methods.DevOps, to put it simply, aims to break down traditional divisions of work between development and operations teams. A DevOps framework involves development and operations teams working across the whole Software development lifecycle and testing to deployment and operations.',
    references: 'Techopedia. (2022, July 15). "DevOps." Techopedia. Available online: https://www.techopedia.com/definition/25995/devops (accessed July 21, 2023).'
  }
  {
    id: 5,
    term: 'Software Development Life Cycle(SDLC)',
    definition: 'Software development teams use the Software Development Life Cycle (SDLC), an organized and methodical process, to design, create, test, deploy, and manage software products. It includes a number of phases, processes, and procedures that ensure the effective and high-quality delivery of software.',
    references: 'IEEE Computer Society. (1991). "IEEE Std 1074-1991: IEEE Standard for Developing Software Life Cycle Processes." IEEE Computer Society. doi: 10.1109/IEEESTD.1991.676105.'
  },
  // Add more terms and descriptions here
];

app.get('/', (req, res) => {
  res.render('index', { glossary });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
