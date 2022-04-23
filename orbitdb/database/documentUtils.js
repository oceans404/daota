const IPFS = require('ipfs');
const OrbitDB = require('orbit-db');

const ipfsOptions = { repo: './ipfs' };

// write a record to the dbKeyName
async function writeDoc(
    dbKeyName,
    record = { _id: 'hello asjdfkljsdfklas', doc: 'meow' }
) {
    const ipfs = await IPFS.create(ipfsOptions);
    const orbitdb = await OrbitDB.createInstance(ipfs);
    const docstore = await orbitdb.docstore(dbKeyName);
    docstore.load().then(async (abc) => {
        await docstore.put(record);
    });
}

// read all records from the dbKeyName
async function readDoc(dbKeyName) {
    const ipfs = await IPFS.create(ipfsOptions);
    const orbitdb = await OrbitDB.createInstance(ipfs);
    const docstore = await orbitdb.docstore(dbKeyName);
    docstore.load().then(async (abc) => {
        const plz = await docstore.query((s) => true);
        console.log(plz);
    });
}

// Get a field in a DB
async function getField(dbKeyName, field) {
    const ipfs = await IPFS.create(ipfsOptions);
    const orbitdb = await OrbitDB.createInstance(ipfs);
  
    const db = await orbitdb.keyvalue(dbKeyName);
    db.load().then(async (abc) => {
      const plz = await db.query((s) => true);
      console.log(plz);
      // console.log(db.query()); //this === undefined
    });
  }

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

class Task {
    constructor(title, description, creatorId, assigneeId, dao, bounty, id) {
        this.title = title;
        this.description = description;
        this.creatorId = creatorId;
        this.assigneeId = assigneeId;
        this.dao = dao;
        this.bounty = bounty;
        this.complete = false;
        this._id = id;
    }
}

class DAO {
    constructor(name, bio, administratorIds, memberIds, id) {
        this.name = name;
        this.bio = bio;
        this.administratorIds = administratorIds;
        this.memberIds = memberIds;
        this._id = id;
    }
}

const sampleUsers = [
    new User(
        "wallet 1",
        "Doug Dimmadome",
        "doug.dimmadome@aol.com",
        "Doug Dimmadome: owner of the Dimmsdale Dimmadome",
        ["FWB"],
        1
    ),
    new User(
        "wallet 2",
        "Vicky the Babysitter",
        "vicky@getoutofmyway.com",
        "It's Icky with a V",
        ["Blu3 DAO"],
        2
    ),
    new User(
        "wallet 3",
        "Denzelle Crocker",
        "imontoyouturner@gmail.com",
        "Fairy! God! Parents!",
        ["H.E.R. DAO", "FWB"],
        3
    ),
    new User(
        "wallet 4",
        "Jorgen Von Strangle",
        "muscles@swole.com",
        "I enforce Da Rules",
        ["Blu3 DAO"],
        4
    ),
    new User(
        "wallet 5",
        "The Crimson Chin",
        "chinpowered@hotmail.com",
        "Biggest chin in the world right here",
        ["H.E.R. DAO", "Blu3 DAO"],
        5
    )
];

const sampleTasks = [
    new Task(
        "Tweet",
        "Send a tweet with the hashtag #blu3dao!",
        2,
        4,
        "Blu3 DAO",
        1,
        1
    ),
    new Task(
        "Hackathon",
        "Attend and participate in the 2022 ETHAmsterdam hackathon",
        2,
        5,
        "Blu3 DAO",
        10,
        2
    ),
    new Task(
        "Tech talk",
        "Hold a tech talk for fellow DAO members",
        2,
        4,
        "Blu3 DAO",
        5,
        3
    ),
    new Task(
        "Discord Recruitment",
        "Recruit a friend to join the Blu3 DAO discord channel",
        2,
        5,
        "Blu3 DAO",
        2,
        4
    ),
];

const sampleDAOs = [
    new DAO(
        "Blu3 DAO",
        "Onboarding gender minorities into web3!",
        [2],
        [1, 2, 4, 5],
        1
    )
];


const usersKey = "daota-users";
async function populateUsers(index) {
    await writeDoc(usersKey, sampleUsers[index]);
}

const daoKey = "daota-daos";
async function populateDAOs(index) {
    await writeDoc(daoKey, sampleDAOs[index]);
}

const tasksKey = "daota-tasks";
async function populateTasks(index) {
    await writeDoc(tasksKey, sampleTasks[index])
}

/*
There were issues with asynchrony, resulting in the below ugly code that
needs to be run line by line
*/

/*
populateUsers(0);
populateUsers(1);
populateUsers(2);
populateUsers(3);
populateUsers(4);
populateUsers(5);

readDoc(usersKey);
*/


/*
populateTasks(0);
populateTasks(1);
populateTasks(2);
populateTasks(3);

readDoc(tasksKey);
*/


/*
populateDAOs(0);
readDoc(daoKey)
*/