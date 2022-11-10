const inquirer = require('inquirer');
const Employees = require("../lib/employee.js");


class Engineer extends Employees {
    constructor() {
        super()
        this.github = "";
    }

    getGithub() {
        return this.github
    };

    getRole() {
        return "Engineer"
    }

    async storeEngineer(engineerMember) {
        this.email = engineerMember.email;
        this.id = engineerMember.id;
        this.name = engineerMember.name;
        this.role = "Engineer"
        this.github = engineerMember.github;
        this.saveEngineer()
    }

    saveEngineer() {
        const newEngineerObj = {
            email: this.email,
            id: this.id,
            name: this.name,
            role: this.role,
            github: this.github
        }
        this.addTeamMembers(newEngineerObj)
    }
}


module.exports = Engineer;