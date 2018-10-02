Link: https://github.com/krishnapanchal94/Portfolio

IDE : Visual Studio Code
Extensions that i have use : Live Server, Prerrier, Live Sass Complier

To run my project i have been use Live Server.

To Setup this site run following commands:
Install Node-sass using command line utility,
npm init
/Below command is used to install node sass package in your working dirctory, it will craete node*modules folder that i already installed in my current project workspace.*/
npm i node-sass

To Run npm
npm run sass

--To deploy our project on githhub
Step 1 : npm i gh-pages
Step 2 : change home page name in package.json
https://username.github.io/repository_name
Step 3 : create a deploye script like sass sceipt in package.json
"scripts": {
"sass": "node-sass -w scss/ -o dist/css/ --recursive",
"deploy": "gh-pages -d dist"
},

--To publish it ,
npm run deploy
Now one can access this website over internet with git url
https://username.github.io/repository_name :)

--To change domain name,
First Register the domain
than got to setting page on git repo.
in Githhub pages section add custom domain
