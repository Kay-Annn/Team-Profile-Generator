const Employees = require('../employee.js');

describe("Team Class", () => {
    describe("testing team suite", () => {
        it("should return the name of the team", () => {
            const softwareEngineers = new Employees("Software Engineers")
            const teamName = softwareEngineers.getTeamName();
            expect(teamName).toEqual('Software Engineers');
        });
        it("should return the size of the team 0", () => {
            const softwareEngineers = new Employees("Software Engineers")
            const teamSize = softwareEngineers.getTeamSize();
            expect(teamSize).toEqual(0);
        });


        it("should return a team size of equal to 1", () => {
            const softwareEngineers = new Employees("Software Engineers")
        
            const addNewTeamMember = {
                role : "Manager",
                name : "Kay",
                id : 123,
                email : "managerInfo@email.com",
                officeNumber : 1254,
            }
            softwareEngineers.addTeamMembers(addNewTeamMember);
            const teamSize = softwareEngineers.getTeamSize();
            expect(teamSize).toEqual(1);
        });
    });


});
