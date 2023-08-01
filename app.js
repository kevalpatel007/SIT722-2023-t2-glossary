const express = require('express');
const app = express();
const port = 3000; 

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
    term: 'VS Code',
    definition: 'Microsoft created Visual Studio Code, which is a free and open-source source code editor. The environment it offers developers to write, modify, and debug code in a variety of programming languages is extremely flexible and feature-rich. Because it has built-in support for extensions, an expanding market, and version control systems, VS Code is a popular option among developers for software development activities.',
    references: 'Microsoft. (2022, July 21). "Visual Studio Code." Visual Studio Code. Available online: https://code.visualstudio.com/ (accessed July 21, 2023).'
  },
  {
    id: 5,
    term: 'NPM(Node Package Manager)',
    definition: 'Node.js has a command-line tool called Node Package Manager. It functions as a package manager for JavaScript-based projects and enables programmers to quickly install, handle, and share reusable code modules (packages) from the npm registry. ',
    references: 'npm. (2022, July 15). "Node Package Manager (NPM)." npm. Available online: https://www.npmjs.com/ (accessed July 21, 2023).'
  },
  {
    id: 6,
    term: 'DevOps',
    definition: 'DevOps is a set of techniques and tools created to help organizations create apps and services more quickly than with conventional software development methods.DevOps, to put it simply, aims to break down traditional divisions of work between development and operations teams. A DevOps framework involves development and operations teams working across the whole Software development lifecycle and testing to deployment and operations.',
    references: 'Techopedia. (2022, July 15). "DevOps." Techopedia. Available online: https://www.techopedia.com/definition/25995/devops (accessed July 21, 2023).'
  },
  {
    id: 7,
    term: 'Software Development Life Cycle(SDLC)',
    definition: 'Software development teams use the Software Development Life Cycle (SDLC), an organized and methodical process, to design, create, test, deploy, and manage software products. It includes a number of phases, processes, and procedures that ensure the effective and high-quality delivery of software.',
    references: 'IEEE Computer Society. (1991). "IEEE Std 1074-1991: IEEE Standard for Developing Software Life Cycle Processes." IEEE Computer Society. doi: 10.1109/IEEESTD.1991.676105.'
  },
  {
    id: 8,
    term: 'Microservices',
    definition: 'Microservices is an architectural method for software development where a complicated application is broken down into smaller, independent, and loosely connected services. Every service has a distinct business capacity and is able to be independently developed, deployed, and scaled. ',
    references: 'Fowler, M. (2014). "Microservices." martinfowler.com. Available online: https://martinfowler.com/articles/microservices.html (accessed July 21, 2023).'
  },
  {
    id: 9,
    term: 'Web Hosting',
    definition: 'Web hosting refers to the process of storing and serving website files and data on a server connected to the internet. It enables individuals and organizations to make their websites accessible to users worldwide. Web hosting providers offer various hosting services, such as shared hosting, VPS hosting, dedicated hosting, and cloud hosting, each catering to different needs and levels of website traffic.',
    references: 'Sharma, R., & Singh, A. (2019). "Web Hosting Services: A Comprehensive Review." International Journal of Innovative Technology and Exploring Engineering (IJITEE), 8(10), 1582-1587. doi: 10.35940/ijitee.L8498.0981019.'
  },
  {
    id: 10,
    term: 'Agile Methodology',
    definition: 'Software development using the agile methodology places a focus on adaptation, flexibility, and user input. It encourages teamwork and the idea of continuous improvement by having cross-functional teams work in short development cycles known as sprints or iterations.',
    references: 'Cockburn, A. (2001). "Agile Software Development: The People Factor." Computer, 34(11), 131-133. doi: 10.1109/2.962417.'
  },
  {
    id: 11,
    term: 'Software Productivity',
    definition: 'Software productivity refers to the efficiency and effectiveness with which software is developed or maintained, typically measured by the amount of output (e.g., lines of code, features) produced relative to the resources (e.g., time, effort) invested.',
    references: 'IEEE Standard Glossary of Software Engineering Terminology, IEEE Std 610.12-1990.'
  },  
];

app.get('/', (req, res) => {
  res.render('index', { glossary });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
