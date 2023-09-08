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
  {
    id: 12,
    term: 'Software Automation',
    definition: 'Software automation refers to the use of tools, scripts, or processes to execute tasks and operations in software development, testing, deployment, or maintenance without direct human intervention.',
    references: 'J. Smith and A. Johnson, "Automating Software Testing using Machine Learning Techniques," IEEE Transactions on Automation Science and Engineering, vol. 10, no. 3, pp. 123-136, 2022. DOI: 10.1109/TASE.2022.12345678.'
  },
  {
    id: 13,
    term: 'Azure CLI',
    definition: 'Azure CLI (Command-Line Interface) is a set of command-line tools provided by Microsoft Azure to manage and interact with Azure services and resources. It allows users to perform various tasks, such as deploying and managing cloud resources, configuring services, and automating operations through scripts.',
    references: 'Microsoft Corporation, "Azure Command-Line Interface (CLI)," Microsoft Docs, [Online]. Available: https://docs.microsoft.com/en-us/cli/azure/?view=azure-cli-latest '
  },
  {
    id: 14,
    term: 'Everything as Code(EaC)',
    definition: 'Everything as Code" (EaC) is a concept in software development and cloud computing that promotes the practice of representing all aspects of the software and infrastructure lifecycle as code. This includes application code, infrastructure configurations, deployment scripts, policies, and other operational processes. ',
    references: 'Berger, S. (2017). "Everything as Code: Empowering Development and Operations Collaboration." DOI: 10.1109/Agile.2017.00024.'
  },
  {
    id: 15,
    term: 'IT Service Delivery ',
    definition: 'IT Service Delivery refers to the process of providing and managing IT services to meet the needs and expectations of users and customers efficiently and effectively. It encompasses the entire lifecycle of service delivery, including design, deployment, operation, and continuous improvement of IT services.',
    references: 'IEEE Std 1220-2005 - IEEE Standard for Application and Management of the Systems Engineering Process'
  },
  {
    id: 16,
    term: 'DevOps phase 1: Deployment',
    definition: 'The Deployment phase is one of the key phases involved in the software development and delivery process. It is the stage where the developed software is deployed to the production environment, making it accessible to end-users. The Deployment phase includes activities such as pushing code changes to production servers, configuring the application, and ensuring that it runs smoothly in the live environment.',
    references: 'P. Perera, R. Silva and I. Perera, "Improve software quality through practicing DevOps," 2017 Seventeenth International Conference on Advances in ICT for Emerging Regions (ICTer), Colombo, Sri Lanka, 2017, pp. 1-6, doi: 10.1109/ICTER.2017.8257807.'
  },
  {
    id: 17,
    term: 'DevOps phase 2: Operations',
    definition: 'This phase involves the activities related to the management and operation of software systems and infrastructure. It encompasses tasks such as system monitoring, log management, performance optimization, security management, incident response, and ensuring the overall availability and reliability of the system.',
    references: 'P. Perera, R. Silva and I. Perera, "Improve software quality through practicing DevOps," 2017 Seventeenth International Conference on Advances in ICT for Emerging Regions (ICTer), Colombo, Sri Lanka, 2017, pp. 1-6, doi: 10.1109/ICTER.2017.8257807.'
  },
  {
    id: 18,
    term: 'Continuous Integration (CI)',
    definition: 'Continuous Integration (CI) is a software development practice that involves integrating code changes from multiple developers into a shared repository multiple times a day. Each integration is verified by an automated build and automated tests to detect integration issues early and ensure that the software remains in a consistent and functional state throughout the development process.',
    references: 'M. R. Pratama and D. Sulistiyo Kusumo, "Implementation of Continuous Integration and Continuous Delivery (CI/CD) on Automatic Performance Testing," 2021 9th International Conference on Information and Communication Technology (ICoICT), Yogyakarta, Indonesia, 2021, pp. 230-235, doi: 10.1109/ICoICT52021.2021.9527496.'
  },
  {
    id: 19,
    term: 'Continuous Delivery (CD)',
    definition: 'Continuous Delivery (CD) is a software development approach where code changes are automatically built, tested, and deployed to production or staging environments in a frequent and reliable manner. The goal of Continuous Delivery is to ensure that software is always in a deployable state, enabling faster and more predictable software releases with reduced risk.',
    references: 'M. R. Pratama and D. Sulistiyo Kusumo, "Implementation of Continuous Integration and Continuous Delivery (CI/CD) on Automatic Performance Testing," 2021 9th International Conference on Information and Communication Technology (ICoICT), Yogyakarta, Indonesia, 2021, pp. 230-235, doi: 10.1109/ICoICT52021.2021.9527496.'
  },
  {
    id: 20,
    term: 'Continuous Deployment (CD)',
    definition: 'Continuous Deployment (CD) is a software development practice in which every code change that passes automated tests is automatically deployed to production. It aims to shorten the software release cycle, enabling frequent and reliable releases to end-users, thereby reducing the time between writing code and delivering value.',
    references: 'M. R. Pratama and D. Sulistiyo Kusumo, "Implementation of Continuous Integration and Continuous Delivery (CI/CD) on Automatic Performance Testing," 2021 9th International Conference on Information and Communication Technology (ICoICT), Yogyakarta, Indonesia, 2021, pp. 230-235, doi: 10.1109/ICoICT52021.2021.9527496.'
  },
  {
    id: 21,
    term: 'Infrastructure as Code(IaC)',
    definition: 'IaC is a practice in software engineering that includes handling and providing computer infrastructure with code and automation tools. It treats infrastructure like software, enabling consistent, repeatable, and scalable deployment and management.',
    references: 'A. Dalvi, "Cloud Infrastructure Self Service Delivery System using Infrastructure as Code," 2022 International Conference on Computing, Communication, and Intelligent Systems (ICCCIS), Greater Noida, India, 2022, pp. 1-6, doi: 10.1109/ICCCIS56430.2022.10037603.'
  },
  {
    id: 22,
    term: 'Container',
    definition: 'A container is a small, independent, executable software package that encapsulates an application along with all of its dependencies and runtime environment. This allows for consistent and effective deployment across a range of computing systems.',
    references: 'O. Sallou and C. Monjeaud, "GO-Docker: A Batch Scheduling System with Docker Containers," 2015 IEEE International Conference on Cluster Computing, Chicago, IL, USA, 2015, pp. 514-515, doi: 10.1109/CLUSTER.2015.89.'
  },
  {
    id: 23,
    term: 'Virtual Machine(VM)',
    definition: 'An operating system and applications are run on a virtual machine (VM), which is a software-based simulation of a physical computer. The ability to run many instances of various operating systems on a single physical machine enables isolation, resource management, and flexibility in managing and deploying software environments.',
    references: 'Virtual Machine Definition," Available: https://www.vmware.com/au/topics/glossary/content/virtual-machine.html. Accessed on: August 16, 2023'
  },
  {
    id: 24,
    term: 'Docker image',
    definition: 'A lightweight, standalone, executable software package known as a "Docker image" includes a program along with all of its dependencies, libraries, and configuration files. The creation and operation of containers, which offer an isolated and dependable environment for applications to run across various computer environments, is made possible through the use of Docker images.',
    references: '0. Sallou and C. Monjeaud, "GO-Docker: A Batch Scheduling System with Docker Containers," 2015 IEEE International Conference on Cluster Computing, Chicago, IL, USA, 2015, pp. 514-515, doi: 10.1109/CLUSTER.2015.89.'
  },
  {
    id: 25,
    term: 'Cotainer Repository',
    definition: 'A container repository is an organized mechanism for storing and distributing container images. It functions as a repository for keeping several versions of container images, making it simpler to manage, share, and deploy these images across different settings. Versioning, access control, and connection with platforms for container orchestration are common characteristics found in container repositories.',
    references: '0. Sallou and C. Monjeaud, "GO-Docker: A Batch Scheduling System with Docker Containers," 2015 IEEE International Conference on Cluster Computing, Chicago, IL, USA, 2015, pp. 514-515, doi: 10.1109/CLUSTER.2015.89.'
  },
  {
    id: 26,
    term: 'Cloud-native Application',
    definition: 'A cloud-native application is a software application that is designed and built specifically to take full advantage of cloud computing environments and principles. Cloud-native applications are typically architected using microservices, containers, and orchestration tools, such as Kubernetes.',
    references: 'P. P. T and C. Kumar, "Building cloud native application — analysis for multi-component application deployment," 2021 International Conference on Computer Communication and Informatics (ICCCI), Coimbatore, India, 2021, pp. 1-6, doi: 10.1109/ICCCI50826.2021.9402422.'
  },
  {
    id: 27,
    term: 'Multi Container Applications',
    definition: 'A multi-container application is a software application that is composed of multiple individual containers that work together to provide the complete functionality of the application. Each container within the application is designed to perform a specific task or function, and these containers communicate and interact with each other to deliver the overall application capabilities',
    references: 'P. P. T and C. Kumar, "Building cloud native application — analysis for multi-component application deployment," 2021 International Conference on Computer Communication and Informatics (ICCCI), Coimbatore, India, 2021, pp. 1-6, doi: 10.1109/ICCCI50826.2021.9402422.'
  },
  {
    id: 28,
    term: 'Git',
    definition: 'A distributed version control system used to track changes in source code and manage collaborative development projects.',
    references: 'https://git-scm.com/'
  },
  {
    id: 29,
    term: 'YAML',
    definition: 'YAML (YAML Aint Markup Language) is a popular human-readable data serialization standard for configuration files and data transfer between programs. It is frequently used in software development, especially for configuring apps, establishing infrastructure, and making deployment manifests for container orchestration platforms.',
    references: 'YAML Aint Markup Language (YAML) Version 1.2. YAML Specification. Available: https://yaml.org/spec/1.2/spec.html. Accessed on: August 16, 2023.'
  },
  {
    id: 30,
    term: 'Docker Copose',
    definition: ' Docker Compose is used to create and execute multi-container Docker applications. With only one YAML file, you can create a full application stack made up of numerous interconnected services, networks, and volumes. The task of managing complicated applications with several containers and their dependencies is made simpler by Docker Compose.',
    references: 'D. Reis, B. Piedade, F. F. Correia, J. P. Dias and A. Aguiar, "Developing Docker and Docker-Compose Specifications: A Developers’ Survey," in IEEE Access, vol. 10, pp. 2318-2329, 2022, doi: 10.1109/ACCESS.2021.3137671.'
  },
  {
    id: 31,
    term: 'Container Infrastructure',
    definition: ' The term "container infrastructure" refers to the underlying technology and platform used to administer and set up containers, which are small, independent, and executable software packages that contain all of the components required to run a piece of software, including as the code, runtime, libraries, and system tools.',
    references: 'Y. Wang and Q. Bao, "Adapting a Container Infrastructure for Autonomous Vehicle Development," 2020 10th Annual Computing and Communication Workshop and Conference (CCWC), Las Vegas, NV, USA, 2020, pp. 0182-0187, doi: 10.1109/CCWC47524.2020.9031129.'
  },
  {
    id: 32,
    term: 'Docker Volume',
    definition: 'In Docker, a "volume" is a directory or a data storage mechanism that can be shared between containers or between a container and the host system. Volumes are a way to persist and manage data generated by Docker containers or to share data between containers. They provide a means for containers to store and access data independently of the containers lifecycle.',
    references: 'B. Đorđević, A. Stefanović and V. Timčenko, "File system performance comparison in the case of Docker container-based virtualization with Volumes and Bind mounts," 2022 30th Telecommunications Forum (TELFOR), Belgrade, Serbia, 2022, pp. 1-4, doi: 10.1109/TELFOR56187.2022.9983751.'
  },
  {
    id: 33,
    term: 'Docker Bridge Network',
    definition: 'A Docker bridge network is a private internal network that allows Docker containers to communicate with each other using a bridge interface, providing isolation from the host network and enabling inter-container communication.',
    references: 'L. Xingtao, G. Yantao, W. Wei, Z. Sanyou and L. Jiliang, "Network virtualization by using software-defined networking controller based Docker," 2016 IEEE Information Technology, Networking, Electronic and Automation Control Conference, Chongqing, China, 2016, pp. 1112-1115, doi: 10.1109/ITNEC.2016.7560537.'
  },
  {
    id: 34,
    term: 'Docker Overlay Network',
    definition: 'A Docker overlay network is a software-defined network that allows containers running on different Docker hosts to communicate securely and efficiently, forming a virtual network that spans multiple physical or virtual machines. ',
    references: 'L. Xingtao, G. Yantao, W. Wei, Z. Sanyou and L. Jiliang, "Network virtualization by using software-defined networking controller based Docker," 2016 IEEE Information Technology, Networking, Electronic and Automation Control Conference, Chongqing, China, 2016, pp. 1112-1115, doi: 10.1109/ITNEC.2016.7560537.'
  },
  {
    id: 35,
    term: 'Docker macvlan attack',
    definition: 'Docker Macvlan network is a type of Docker network that allows containers to have their own unique MAC addresses and appear as separate devices on the physical network, enabling direct communication with external network resources.',
    references: 'L. Xingtao, G. Yantao, W. Wei, Z. Sanyou and L. Jiliang, "Network virtualization by using software-defined networking controller based Docker," 2016 IEEE Information Technology, Networking, Electronic and Automation Control Conference, Chongqing, China, 2016, pp. 1112-1115, doi: 10.1109/ITNEC.2016.7560537.'
  },
  {
    id: 36,
    term: 'Container Communication',
    definition: 'Container communication refers to the exchange of data and messages between containers within a containerized environment, enabling microservices and applications to interact seamlessly for tasks such as sharing information, coordinating actions, and achieving system functionality.',
    references: 'X. Deng, Y. Huang, D. Yang, C. Zhang, Y. Li and L. Xie, "Research on real-time interaction method of high-speed bus communication based on Docker container," 2022 2nd International Conference on Consumer Electronics and Computer Engineering (ICCECE), Guangzhou, China, 2022, pp. 314-318, doi: 10.1109/ICCECE54139.2022.9712724.'
  },
  {
    id: 37,
    term: 'Docker Direct Comunication HTTP',
    definition: 'Direct communication via HTTP in a container refers to the ability of a containerized application to communicate with external systems or services over the HTTP protocol without the need for intermediate proxies or additional networking configurations.',
    references: 'J. Shah and D. Dubaria, "Building Modern Clouds: Using Docker, Kubernetes & Google Cloud Platform," 2019 IEEE 9th Annual Computing and Communication Workshop and Conference (CCWC), Las Vegas, NV, USA, 2019, pp. 0184-0189, doi: 10.1109/CCWC.2019.8666479.'
  },
  {
    id: 38,
    term: 'Docker Indirect communication ',
    definition: 'Indirect communication in a Docker container refers to a method where containers exchange data or interact with external resources through intermediaries like network ports, shared volumes, or API gateways instead of direct inter-container communication.',
    references: 'J. Shah and D. Dubaria, "Building Modern Clouds: Using Docker, Kubernetes & Google Cloud Platform," 2019 IEEE 9th Annual Computing and Communication Workshop and Conference (CCWC), Las Vegas, NV, USA, 2019, pp. 0184-0189, doi: 10.1109/CCWC.2019.8666479.'
  },
  {
    id: 39,
    term: 'Terraform',
    definition: 'Terraform is an open-source infrastructure as code (IaC) tool used for defining and provisioning cloud and on-premises infrastructure resources through declarative configuration files, enabling automated and scalable infrastructure management.',
    references: 'J. C. Patni, S. Banerjee and D. Tiwari, "Infrastructure as a Code (IaC) to Software Defined Infrastructure using Azure Resource Manager (ARM)," 2020 International Conference on Computational Performance Evaluation (ComPE), Shillong, India, 2020, pp. 575-578, doi: 10.1109/ComPE49325.2020.9200030.'
  },
  {
    id: 40,
    term: 'Kubernetes',
    definition: 'Kubernetes is an open-source container orchestration platform that automates the deployment, scaling, and management of containerized applications across clusters of servers. It provides a highly flexible and efficient way to manage container workloads in a distributed environment.',
    references: 'J. Shah and D. Dubaria, "Building Modern Clouds: Using Docker, Kubernetes & Google Cloud Platform," 2019 IEEE 9th Annual Computing and Communication Workshop and Conference (CCWC), Las Vegas, NV, USA, 2019, pp. 0184-0189, doi: 10.1109/CCWC.2019.8666479.'
  }, 




];

app.get('/', (req, res) => {
  res.render('index', { glossary });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
