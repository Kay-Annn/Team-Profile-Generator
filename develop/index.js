const Employees = require ('./employee.js');
const fs = require ('fs');
const util = require('util');
const generateHTML = require("./utils/generateHTML");
const questions = require ('./employee.js');
const inquirer = require ('inquirer');
const Team = require ('./team.js');



//Create a function to write README file
const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
      fs.writeFile('./index.html', fileContent, err => {
        if (err) {
          reject(err);
          return;
        }
        resolve({
          ok: true
        });
      });
    });
  };

  async function init() {

    const softwareEngineers = new Employees("softwareEngineers")
  
    await softwareEngineers.createManager()
    
    inquirer.prompt(questions)
      .then(function (answer) {
        console.log(answer);
        let fileContent = generateHTML(questions,answer);
        writeFile(fileContent)
      });
  }
  
  init();
