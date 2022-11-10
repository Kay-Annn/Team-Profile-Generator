const inquirer = require('inquirer');
const Team = require("../lib/team.js");


class Employees {
  constructor(name, role, id, email) {
    this.name = name;
    this.role = role;
    this.id = id;
    this.email = email;
    this.teamMembers = [];
  }

  getName() {
    return this.name
  };

  getId() {
    return this.id
  };

  getEmail() {
    return this.email
  };

  getRole() {
    return "Employee"
  };

  addTeamMembers(newTeamMember) {
    this.teamMembers.push(newTeamMember)
  }

  getAllTeamMembers() {
    return this.teamMembers
  }
}


module.exports = Employees;