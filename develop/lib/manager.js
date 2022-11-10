const inquirer = require('inquirer');
const Employees = require("../lib/employee.js");


class Manager extends Employees {
    constructor() {
        super()
        this.officeNumber = "";
    }

    getRole() {
        return "Manager"
    };

    async storeManager(managerMember) {
        this.email = managerMember.email;
        this.id = managerMember.id;
        this.name = managerMember.name;
        this.role = "Manager"
        this.officeNumber = managerMember.officeNumber;
        this.saveManger()
    }

    saveManger() {
        const newMangerObj = {
            email: this.email,
            id: this.id,
            name: this.name,
            role: this.role,
            officeNumber: this.officeNumber
        }
        this.addTeamMembers(newMangerObj)
    }

}


module.exports = Manager;