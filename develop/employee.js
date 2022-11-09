const inquirer = require('inquirer');
const Team = require("./team.js");

const Managerquestions = [
  {
    type: 'input',
    message: 'Please provide your team manager name: ',
    name: 'ManagerName',
  },
  {
    type: 'input',
    message: 'Please provide your team manager ID: ',
    name: 'id',
  },

  {
    type: 'input',
    message: 'Please provide your team manager e-mail: ',
    name: 'email',
  },

  {
    type: 'input',
    message: 'Please provide your team manager office number: ',
    name: 'officenumber',
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



class Employees extends Team {
  constructor(teamName) {
    super(teamName);
    this.name = "";
    this.role = "";
    this.id = "";
    this.email = "";
    this.gitHub = "";
    this.officeNumber = "";
    this.school = "";
  }

  async createManager() {
    const managerInfo = await inquirer.prompt(Managerquestions)
    this.role = "Manager"
    this.name = managerInfo.ManagerName;
    this.id = managerInfo.id;
    this.email = managerInfo.email;
    this.officeNumber = managerInfo.officenumber;
    this.addToTeam()
  }

  async createEngineer() {
    const employeeInfo = await inquirer.prompt(EngineerQuestions)
    this.name = employeeInfo.EngineerName;
    this.role = "Engineer";
    this.id = employeeInfo.EngineerId;
    this.email = employeeInfo.EngineerEmail;
    this.gitHub = employeeInfo.EngineerGitHub;
    this.addToTeam()
  }

  async createIntern() {
    const employeeInfo = await inquirer.prompt(InternQuestions)
    this.name = employeeInfo.InternName;
    this.role = "Intern";
    this.id = employeeInfo.InternId;
    this.email = employeeInfo.InternEmail;
    this.school = employeeInfo.InternSchool;
    this.addToTeam()
  }

  async addToTeam() {
    const newEmployeeObj = {
      name: this.name,
      role: this.role,
      id: this.id,
      email: this.email,
    }

    if (this.role === "Manager") {
      newEmployeeObj.officeNumber = this.officeNumber
    }
    if (this.role === "Engineer") {
      newEmployeeObj.gitHub = this.gitHub
    }

    if (this.role === "Intern") {
      newEmployeeObj.school = this.school
    }

    this.addTeamMembers(newEmployeeObj)
    const menuInfo = await inquirer.prompt(MenuQuestions)
    if (menuInfo.Menu === "Add an engineer") {
      this.createEngineer()
    }

    if (menuInfo.Menu === "Add an intern") {
      this.createIntern()
    }

    if (menuInfo.Menu != "Add an intern" && menuInfo.Menu != "Add an engineer") {
      this.generateTeamProfile();
    }
  }
}


module.exports = Employees;