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
  // Add more terms and descriptions here
];

app.get('/', (req, res) => {
  res.render('index', { glossary });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
