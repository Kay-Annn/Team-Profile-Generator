const Manager = require('../manager.js');

describe("Employee Class", () => {
    describe("testing employee class", () => {

        it("should return manager Role ", async () => {
            const manager = new Manager()
            expect(manager.getRole()).toEqual('Manager');
        });
        it("should store manager Information in employee class ", async () => {
            const manager = new Manager()
            const managerMember = {
                name: "kay",
                id: "1",
                email: "kay@yahoo.com",
                officeNumber: "6479"
            }
           await manager.storeManager(managerMember)
            expect(manager.getEmail()).toEqual('kay@yahoo.com');
            expect(manager.getId()).toEqual('1');
            expect(manager.getRole()).toEqual('Manager');
            expect(manager.officeNumber).toEqual('6479');
        });

    });


});
