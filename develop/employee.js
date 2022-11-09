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

const EmployeeQuestions = [
  {
    type: 'input',
    message: 'Please provide your team member name: ',
    name: 'EmployeeName',
  },

  {
    type: 'list',
    message: 'Please provide your team member role: ',
    choices: ["Engineer", "Intern"],
    name: 'EmployeeRole',
  },

  {
    type: 'input',
    message: 'Please provide your team member ID: ',
    name: 'Employeeid',
  },

  {
    type: 'input',
    message: 'Please provide your team member e-mail: ',
    name: 'Employeeemail',
  },

  {
    type: 'input',
    message: 'Please provide your team member GitHub: ',
    name: 'EmployeeGitHub',
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
    this.officeNumber = ""
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

  async createEmployee() {
    const employeeInfo = await inquirer.prompt(EmployeeQuestions)
    this.name = employeeInfo.EmployeeName;
    this.role = employeeInfo.EmployeeRole;
    this.id = employeeInfo.Employeeid;
    this.email = employeeInfo.Employeeemail;
    this.gitHub = employeeInfo.EmployeeGitHub
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
    else {
      newEmployeeObj.gitHub = this.gitHub
    }

    this.addTeamMembers(newEmployeeObj)
    const menuInfo = await inquirer.prompt(MenuQuestions)
    if (menuInfo.Menu === "Add an engineer" || menuInfo.Menu === "Add an intern") {
      this.createEmployee()

    }
    else {
      this.generateTeamProfile();
    }
  }
}


module.exports = Employees;