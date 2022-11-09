const Employees = require('../employee.js');
const inquirer = require('inquirer');

describe("Employee Class", () => {
    describe("testing employee suite", () => {
        it("should create an employee", async ()  => {
            const softwareEngineers = new Employees("Software Engineers")
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
            inquirer.prompt = (EmployeeQuestions) => Promise.resolve({
                EmployeeName: 'John',
                EmployeeRole: 'Intern',
                Employeeid: 11241,
                Employeeemail: "wqrij@rgj.com",
                EmployeeGitHub: "afi",
            })
            await softwareEngineers.createEmployee();
            const getEmployee = softwareEngineers.getTeamMembers();
            expect(getEmployee[0].name).toEqual('John');
            expect(getEmployee[0].role).toEqual('Intern');
            expect(getEmployee[0].id).toEqual(11241);
            expect(getEmployee[0].email).toEqual("wqrij@rgj.com");
            expect(getEmployee[0].gitHub).toEqual("afi");
        });

        it("should create a manager", async ()  => {
            const softwareEngineers = new Employees("Software Engineers")
           
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

            inquirer.prompt = (Managerquestions) => Promise.resolve({
                ManagerName: 'Kay',
                id: 241,
                email: "kay@kay.com",
                officenumber: 121,
            })
            await softwareEngineers.createManager();
            const getEmployee = softwareEngineers.getTeamMembers();
            expect(getEmployee[0].name).toEqual('Kay');
            expect(getEmployee[0].id).toEqual(241);
            expect(getEmployee[0].email).toEqual("kay@kay.com");
            expect(getEmployee[0].officeNumber).toEqual(121);
        });

    });


});
