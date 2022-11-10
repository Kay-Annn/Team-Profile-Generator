const Intern = require('../lib/intern.js');

describe("Intern Class", () => {
    describe("testing Intern class", () => {

        it("should return Intern Role ", async () => {
            const intern = new Intern()
            expect(intern.getRole()).toEqual('Intern');
        });
        it("should store intern Information in intern class ", async () => {
            const intern = new Intern()
            const internMember = {
                name: "kay",
                id: "1",
                email: "kay@yahoo.com",
                school: "seneca"
            }
           await intern.storeIntern(internMember)
            expect(intern.getEmail()).toEqual('kay@yahoo.com');
            expect(intern.getId()).toEqual('1');
            expect(intern.getRole()).toEqual('Intern');
            expect(intern.school).toEqual('seneca');
        });
    });


});
