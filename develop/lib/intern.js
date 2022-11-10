const inquirer = require('inquirer');
const Employees = require("../lib/employee.js");


class Intern extends Employees {
    constructor() {
        super()
        this.school = "";
    }

    getSchool() {
        return this.school
    };

    getRole() {
        return "Intern"
    }

    async storeIntern(internMember) {
        this.email = internMember.email
        this.id = internMember.id;
        this.name = internMember.name;
        this.role = "Intern";
        this.school = internMember.school;
        this.saveIntern()
    }

    saveIntern() {
        const newInternObj = {
            email: this.email,
            id: this.id,
            name: this.name,
            role: this.role,
            school: this.school
        }
        this.addTeamMembers(newInternObj)
    }
}


module.exports = Intern;