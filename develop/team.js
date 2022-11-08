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

    }

}

module.exports = Team;