const IPFS = require('ipfs');
const OrbitDB = require('orbit-db');

// https://github.com/orbitdb/orbit-db/blob/main/GUIDE.md

const ipfsOptions = { repo: './ipfs' };
const tasksKey = 'daota-tasks';

// Create a DB and output the Orbit DB address
// => '/orbitdb/zdpuAu8akzqHGfJRU49Y6Wp9Gnr7iUR1LTmUupLYbUEsRosiD/daota-tasks'
async function createOrbitDb(dbKeyName) {
  const ipfs = await IPFS.create(ipfsOptions);
  const orbitdb = await OrbitDB.createInstance(ipfs);
  const publicOptions = {
    // Give write access to everyone
    accessController: {
      write: ['*'],
    },
  };
  const db = await orbitdb.keyvalue(dbKeyName, publicOptions);
  console.log(db.address.toString());
}

//createOrbitDb(tasksKey);

// Read from an Orbit DB with a known key name
async function writeDb(dbKeyName) {
  const ipfs = await IPFS.create(ipfsOptions);
  const orbitdb = await OrbitDB.createInstance(ipfs);

  const db = await orbitdb.keyvalue(dbKeyName);

  // const identity = db.identity;
  // console.log(identity.toJSON());

  await db.put('name', 'tina', { pin: true });
}

// writeDb(tasksKey);

async function getField(dbKeyName, field) {
  const ipfsOptions = { repo: './ipfs' };
  const ipfs = await IPFS.create(ipfsOptions);
  const orbitdb = await OrbitDB.createInstance(ipfs);
  const db = await orbitdb.keyvalue(dbKeyName);
  const value = db.get(field);
  console.log(value);
}

getField(tasksKey, 'name');
