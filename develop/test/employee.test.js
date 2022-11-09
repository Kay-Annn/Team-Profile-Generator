const Employees = require('../employee.js');
const inquirer = require('inquirer');

describe("Employee Class", () => {
    describe("testing employee suite", () => {
        it("should create an engineer", async () => {
            const softwareEngineers = new Employees("Software Engineers")
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

            inquirer.prompt = (EngineerQuestions) => Promise.resolve({
                EngineerName: 'John',
                EngineerRole: 'Engineer',
                EngineerId: 11241,
                EngineerEmail: "wqrij@rgj.com",
                EngineerGitHub: "afi",
            })
            await softwareEngineers.createEngineer();
            const getEmployee = softwareEngineers.getTeamMembers();
            expect(getEmployee[0].name).toEqual('John');
            expect(getEmployee[0].role).toEqual('Engineer');
            expect(getEmployee[0].id).toEqual(11241);
            expect(getEmployee[0].email).toEqual("wqrij@rgj.com");
            expect(getEmployee[0].gitHub).toEqual("afi");
        });

        it("should create a manager", async () => {
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


        it("should create an intern", async () => {
            const softwareEngineers = new Employees("Software Engineers")
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

            inquirer.prompt = (InternQuestions) => Promise.resolve({
                InternName: 'Kay',
                InternRole: 'Intern',
                InternId: 546,
                InternEmail: "kay@kay.com",
                InternSchool: "UofT",
            })
            await softwareEngineers.createIntern();
            const getEmployee = softwareEngineers.getTeamMembers();
            expect(getEmployee[0].name).toEqual('Kay');
            expect(getEmployee[0].role).toEqual('Intern');
            expect(getEmployee[0].id).toEqual(546);
            expect(getEmployee[0].email).toEqual("kay@kay.com");
            expect(getEmployee[0].school).toEqual("UofT");
        });

    });


});
