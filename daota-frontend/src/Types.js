class Task {
    constructor(title, description, creator, assignee, dao) {
        this.title = title;
        this.description = description;
        this.creator = creator;
        this.assignee = assignee;
        this.dao = dao;
    }
}

class User {
    constructor(wallet, name, email, bio, daoList) {
        this.wallet = wallet;
        this.name = name;
        this.email = email;
        this.bio = bio;
        this.daoList = daoList;
    }
}

class DAO {
    constructor(name, bio, administrators, members) {
        this.name = name;
        this.bio = bio;
        this.administrators = administrators;
        this.members = members;
    }
}