const IPFS = require('ipfs');
const OrbitDB = require('orbit-db');

const ipfsOptions = { repo: './ipfs' };

// Create a public DB and output the Orbit DB address
// => '/orbitdb/zdpuB1MbYeikexfs145CXHYDR9JdABQXWu2UGxXsE3c1tTHG4/daota-dao-tasks'
async function createOrbitDb(dbKeyName) {
    const ipfs = await IPFS.create(ipfsOptions);
    const orbitdb = await OrbitDB.createInstance(ipfs);
    const publicOptions = {
      // Give write access to everyone
      accessController: {
        write: ['*'],
      },
    };
    const db = await orbitdb.docs(dbKeyName, publicOptions);
    console.log(db.address.toString());
  }

const tasksKey = "daota-tasks"; // /orbitdb/zdpuAsNQ2TorfhoXPYmaAKQj1n36kHSTyRs6cw7AfLyZ2LynC/test
const usersKey = "daota-users";
const daoKey = "daota-daos";
// createOrbitDb(tasksKey);
// createOrbitDb(usersKey);
// createOrbitDb(daoKey);