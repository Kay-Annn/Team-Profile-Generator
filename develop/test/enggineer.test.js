const Engineer = require('../engineer');

describe("Engineer Class", () => {
    describe("testing Engineer class", () => {

        it("should return Engineer Role ", async () => {
            const engineer = new Engineer()
            expect(engineer.getRole()).toEqual('Engineer');
        });
        it("should store Engineer Information in Engineer class ", async () => {
            const engineer = new Engineer()
            const engineerMember = {
                name: "kay",
                id: "1",
                email: "kay@yahoo.com",
                github: "kay-ann"
            }
           await engineer.storeEngineer(engineerMember)
            expect(engineer.getEmail()).toEqual('kay@yahoo.com');
            expect(engineer.getId()).toEqual('1');
            expect(engineer.getRole()).toEqual('Engineer');
            expect(engineer.github).toEqual('kay-ann');
        });
    });


});
