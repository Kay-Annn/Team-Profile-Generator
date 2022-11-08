const createHTML = require('create-html');
const fs = require('fs');

class Team {
    constructor(teamName) {
        this.teamName = teamName;
        this.teamMembers = []
    }

    getTeamName() {
        return this.teamName
    }

    getTeamSize() {
        return this.teamMembers.length
    }

    getTeamMembers() {
        return this.teamMembers
    }

    getTeamMemberById(id) {
        return this.teamMembers.filter(id => id.id = id)
    }

    addTeamMembers(newTeamMember) {
        this.teamMembers.push(newTeamMember)
    }

    generateTeamProfile() {
        const cardMembers = this.getTeamMembers()
        let cardString = '';
        let i = 0;
        for (i = 0; i < cardMembers.length; i++) {
            let list = '';
            if (cardMembers.role === "Manager") {
                list = ` <li class="list-group-item">Id: ${cardMembers[i].id}</li>
                <li class="list-group-item">E-mail: ${cardMembers[i].email}</li>
                <li class="list-group-item">E-mail: ${cardMembers[i].officeNumber}</li>`
            }
            else {
                list = ` <li class="list-group-item">Id: ${cardMembers[i].id}</li>
            <li class="list-group-item">E-mail: ${cardMembers[i].email}</li>
            <li class="list-group-item">E-mail: ${cardMembers[i].gitHub}</li>`
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

        console.log(this.getTeamMembers());
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