const express = require('express');
const app = express();
const port = 3000; // You can use any port number you prefer

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

const glossary = [
  {
    id: 1,
    term: 'Node.js',
    definition: 'A JavaScript runtime built on Chrome\'s V8 JavaScript engine.',
    references: 'https://nodejs.org/'
  },
  {
    id: 2,
    term: 'Express',
    definition: 'A web application framework for Node.js.',
    references: 'https://expressjs.com/'
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
    references: '[1] Techopedia. (2022, July 15). "DevOps." Techopedia. Available online: https://www.techopedia.com/definition/25995/devops (accessed July 21, 2023).'
  }
  // Add more terms and descriptions here
];

app.get('/', (req, res) => {
  res.render('index', { glossary });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
