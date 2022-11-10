const Manager = require('./lib/manager.js');
const Engineer = require('./lib/engineer.js');
const Intern = require('./lib/intern.js')
const inquirer = require('inquirer');
const createHTML = require('create-html');
const fs = require('fs');

const Managerquestions = [
    {
        type: 'input',
        message: 'Please provide your team manager name: ',
        name: 'ManagerName',
    },
    {
        type: 'input',
        message: 'Please provide your team manager ID: ',
        name: 'ManagerId',
    },

    {
        type: 'input',
        message: 'Please provide your team manager e-mail: ',
        name: 'ManagerEmail',
    },

    {
        type: 'input',
        message: 'Please provide your team manager office number: ',
        name: 'officeNumber',
    }
]

const EngineerQuestions = [
    {
        type: 'input',
        message: 'Please provide your engineer name: ',
        name: 'EngineerName',
    },

    {
        type: 'input',
        message: 'Please provide your engineer ID: ',
        name: 'EngineerId',
    },

    {
        type: 'input',
        message: 'Please provide your engineer e-mail: ',
        name: 'EngineerEmail',
    },

    {
        type: 'input',
        message: 'Please provide your engineer GitHub: ',
        name: 'EngineerGitHub',
    }
]

const InternQuestions = [
    {
        type: 'input',
        message: 'Please provide your Intern name: ',
        name: 'InternName',
    },

    {
        type: 'input',
        message: 'Please provide your Intern ID: ',
        name: 'InternId',
    },

    {
        type: 'input',
        message: 'Please provide your intern e-mail: ',
        name: 'InternEmail',
    },

    {
        type: 'input',
        message: 'Please provide your intern school: ',
        name: 'InternSchool',
    }
]

const MenuQuestions = [

    {
        type: 'list',
        message: 'Would you like to add an engineer or an intern or finish building your team? ',
        choices: ['Add an engineer', "Add an intern", "Finish building my team"],
        name: "Menu"
    }
]

const manager = new Manager();
const engineer = new Engineer();
const intern = new Intern()

async function addManager() {
    const managerInfo = await inquirer.prompt(Managerquestions)
    const managerMember = {
        name: managerInfo.ManagerName,
        id: managerInfo.ManagerId,
        email: managerInfo.ManagerEmail,
        officeNumber: managerInfo.officeNumber
    }

    await manager.storeManager(managerMember)
    const menuInfo = await inquirer.prompt(MenuQuestions)

    if (menuInfo.Menu === "Add an engineer") {
        addEngineer()
    }
    if (menuInfo.Menu === "Add an intern") {
        addIntern()
    }
    if (menuInfo.Menu != "Add an intern" && menuInfo.Menu != "Add an engineer") {
        generateTeamProfile();
    }
}

async function addEngineer() {

    const engineerInfo = await inquirer.prompt(EngineerQuestions)
    const engineerMember = {
        name: engineerInfo.EngineerName,
        id: engineerInfo.EngineerId,
        email: engineerInfo.EngineerEmail,
        github: engineerInfo.EngineerGitHub
    }
    await engineer.storeEngineer(engineerMember)
    const menuInfo = await inquirer.prompt(MenuQuestions)
    if (menuInfo.Menu === "Add an engineer") {
        addEngineer()
    }
    if (menuInfo.Menu === "Add an intern") {
        addIntern()
    }
    if (menuInfo.Menu != "Add an intern" && menuInfo.Menu != "Add an engineer") {
        generateTeamProfile();
    }
}

async function addIntern() {
    const internInfo = await inquirer.prompt(InternQuestions)
    const internMember = {
        name: internInfo.InternName,
        id: internInfo.InternId,
        email: internInfo.InternEmail,
        school: internInfo.InternSchool
    }
    await intern.storeIntern(internMember)
    const menuInfo = await inquirer.prompt(MenuQuestions)
    if (menuInfo.Menu === "Add an engineer") {
        addEngineer()
    }
    if (menuInfo.Menu === "Add an intern") {
        addIntern()
    }
    if (menuInfo.Menu != "Add an intern" && menuInfo.Menu != "Add an engineer") {
        generateTeamProfile();
    }
}

async function generateTeamProfile() {
    const teamManager = manager.getAllTeamMembers()
    const teamEngineers = engineer.getAllTeamMembers()
    const allInterns = intern.getAllTeamMembers()
    const cardMembers = teamManager.concat(teamEngineers, allInterns);
    let cardString = '';
    let i;
    for (i = cardMembers.length - 1; i >= 0; i--) {
        let list = '';
        if (cardMembers[i].role === "Manager") {
            list = ` <li class="list-group-item">Id: ${cardMembers[i].id}</li>
         <li class="list-group-item">E-mail:<a href="mailto:${cardMembers[i].email}">${cardMembers[i].email}</a></li>
         <li class="list-group-item">Office Number: ${cardMembers[i].officeNumber}</li>`
        }


        if (cardMembers[i].role === "Engineer") {
            list = ` <li class="list-group-item">Id: ${cardMembers[i].id}</li>
         <li class="list-group-item">E-mail:<a href="mailto:${cardMembers[i].email}">${cardMembers[i].email}</a></li>
         <li class="list-group-item">GitHub:<a href=${`https://github.com/${cardMembers[i].github}`} target="_blank">${cardMembers[i].github}</a></li>`
        }


        if (cardMembers[i].role === "Intern") {
            list = ` <li class="list-group-item">Id: ${cardMembers[i].id}</li>
         <li class="list-group-item">E-mail:<a href="mailto:${cardMembers[i].email}">${cardMembers[i].email}</a></li>
         <li class="list-group-item">School: ${cardMembers[i].school}</li>`
        }

        let card = `<div class="card" style="width: 18rem;">
     <div class="card-body">
         <h5 class="card-name">${cardMembers[i].name}</h5>
         <p class="card-role">Role: ${cardMembers[i].role}</p>
     </div>
     <ul class="list-group">
        ${list}
      </ul>
 </div>`

        cardString += card;
    }

    var html = createHTML({
        title: 'example',
        scriptAsync: true,
        script: 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.min.js',
        css: ['./style.css', 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css'],
        lang: 'en',
        dir: 'rtl',
        head: '<meta name="description" content="example">',
        body: `<h1>Software Engineers Team </h1> <div class="card-container"> ${cardString}</div>`,
       })

    fs.writeFile('./dist/index.html', html, function (err) {
        if (err) console.log(err)
    })
}




async function init() {

    addManager()

}
init();
