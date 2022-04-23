// require('../user');

/* new User(
    "wallet 1",
    "Doug Dimmadome",
    "doug.dimmadome@aol.com",
    "Doug Dimmadome: owner of the Dimmsdale Dimmadome",
    "Amazing DAO",
    1
)*/
class User {
    constructor(wallet, name, email, bio, daoList, id) {
        this.wallet = wallet;
        this.name = name;
        this.email = email;
        this.bio = bio;
        this.daoList = daoList;
        this._id = id;
    }
}

let sampleUsers = [
    new User(
        "wallet 1",
        "Doug Dimmadome",
        "doug.dimmadome@aol.com",
        "Doug Dimmadome: owner of the Dimmsdale Dimmadome",
        "Amazing DAO",
        1
    ),
    new User(
        "wallet 2",
        "Vicky the Babysitter",
        "vicky@getoutofmyway.com",
        "It's Icky with a V",
        "Amazing DAO",
        2
    ),
    new User(
        "wallet 3",
        "Denzelle Crocker",
        "imontoyouturner@gmail.com",
        "Fairy! God! Parents!",
        "Amazing DAO",
        3
    ),
    new User(
        "wallet 4",
        "Jorgen Von Strangle",
        "muscles@swole.com",
        "I enforce Da Rules",
        "Amazing DAO",
        4
    ),
    new User(
        "wallet 5",
        "The Crimson Chin",
        "chinpowered@hotmail.com",
        "Biggest chin in the world right here",
        "Amazing DAO",
        5
    )
];