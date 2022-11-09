const createHTML = require('create-html');
const fs = require('fs');

class Team {
    constructor(teamName) {
        this.teamName = teamName;
        this.teamMembers = []
    }
    /**
     * 
     * @returns team name
     */
    getTeamName() {
        return this.teamName
    }

     /**
     * 
     * @returns team size
     */
    getTeamSize() {
        return this.teamMembers.length
    }

     /**
     * 
     * @returns team members
     */
    getTeamMembers() {
        return this.teamMembers
    }

     /**
     * 
     * @returns add team member 
     */
    addTeamMembers(newTeamMember) {
        this.teamMembers.push(newTeamMember)
    }

     /**
     * 
     * @returns creates team profile
     */
    generateTeamProfile() {
        const cardMembers = this.getTeamMembers()
        let cardString = '';
        let i;
        for (i = cardMembers.length - 1; i >= 0; i--) {
            let list = '';
            if (cardMembers[i].role === "Manager") {
                list = ` <li class="list-group-item">Id: ${cardMembers[i].id}</li>
                <li class="list-group-item">E-mail: ${cardMembers[i].email}</li>
                <li class="list-group-item">Office Number: ${cardMembers[i].officeNumber}</li>`
            }
            else {
                list = ` <li class="list-group-item">Id: ${cardMembers[i].id}</li>
            <li class="list-group-item">E-mail: ${cardMembers[i].email}</li>
            <li class="list-group-item">GitHub: ${cardMembers[i].gitHub}</li>`
            }
            let card = `<div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-name">${cardMembers[i].name}</h5>
                <p class="card-role">Role: ${cardMembers[i].role}</p>
            </div>
            <ul class="list-group">
               ${list}
             </ul>
        </div>`

            cardString += card;
        }

      
        var html = createHTML({
            title: 'example',
            scriptAsync: true,
            script: 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.min.js',
            css: ['style.css', 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css'],
            lang: 'en',
            dir: 'rtl',
            head: '<meta name="description" content="example">',
            body: `<h1>${this.getTeamName()}<h1> <div class="card-container"> ${cardString}</div>`,
            favicon: 'favicon.png'

        })

        fs.writeFile('index.html', html, function (err) {
            if (err) console.log(err)
        })
    }

}

module.exports = Team;