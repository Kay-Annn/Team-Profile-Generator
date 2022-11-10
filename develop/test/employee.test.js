const Employees = require('../lib/employee.js');

describe("Employee Class", () => {
    describe("testing employee class", () => {

        it("should return employee name ", async () => {
            const employee = new Employees("Kay", "Intern", "1", "kay@yahoo.com")
            expect(employee.getName()).toEqual('Kay');
        });
        it("should return  employee Role ", async () => {
            const employee = new Employees("Kay", "Intern", "1", "kay@yahoo.com")
            expect(employee.getRole()).toEqual('Employee');
        });
        it("should return employee Id ", async () => {
            const employee = new Employees("Kay", "Intern", "1", "kay@yahoo.com")
            expect(employee.getId()).toEqual('1');
        });
        it("should return employee email ", async () => {
            const employee = new Employees("Kay", "Intern", "1", "kay@yahoo.com")
            expect(employee.getEmail()).toEqual('kay@yahoo.com');
        });

    });


});
