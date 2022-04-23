const IPFS = require('ipfs');
const OrbitDB = require('orbit-db');

// https://github.com/orbitdb/orbit-db/blob/main/GUIDE.md

const ipfsOptions = { repo: './ipfs' };
const tasksKey = 'daota-tasks';

// Create a DB and output the Orbit DB address
// => '/orbitdb/zdpuAocvyjjT8jVrBmgzpst5n1KMVM4PrY6Nz5SVNUcP3ZMV9/${dbKeyName}'
async function createOrbitDb(dbKeyName) {
  const ipfs = await IPFS.create(ipfsOptions);
  const orbitdb = await OrbitDB.createInstance(ipfs);
  const db = await orbitdb.keyvalue(dbKeyName);
  console.log(db.address.toString());
}

// Read from an Orbit DB with a known key name
async function readDb(dbKeyName) {
  const ipfs = await IPFS.create(ipfsOptions);
  const orbitdb = await OrbitDB.createInstance(ipfs);

  const publicOptions = {
    // Give write access to everyone
    accessController: {
      write: ['*'],
    },
  };
  const db = await orbitdb.keyvalue(dbKeyName, publicOptions);

  const identity = db.identity;
  console.log(identity.toJSON());
}

readDb(tasksKey);
