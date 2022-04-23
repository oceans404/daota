const IPFS = require('ipfs');
const OrbitDB = require('orbit-db');

// https://github.com/orbitdb/orbit-db/blob/main/GUIDE.md

const ipfsOptions = { repo: './ipfs' };
const tasksKey = 'daota-dao-tasks';

const dbAddress =
  '/orbitdb/zdpuB1MbYeikexfs145CXHYDR9JdABQXWu2UGxXsE3c1tTHG4/daota-dao-tasks';

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

// createOrbitDb(tasksKey);

// Read from an Orbit DB with a known key name
async function writeDb(dbKeyName) {
  const ipfs = await IPFS.create(ipfsOptions);
  const orbitdb = await OrbitDB.createInstance(ipfs);

  const db = await orbitdb.keyvalue(dbKeyName);

  await db
    .put({ test: 1, cmon: true, pleaseWork: 'yessss' }, { pin: true })
    .then(async () => {
      // const value = await db.get('name');
      console.log(db);
    });
}

// writeDb(tasksKey);

// Get a field in a DB
async function getField(dbKeyName, field) {
  const ipfs = await IPFS.create(ipfsOptions);
  const orbitdb = await OrbitDB.createInstance(ipfs);

  const db = await orbitdb.keyvalue(dbKeyName);
  db.load().then(async (abc) => {
    const plz = db.query((s) => true);
    console.log(plz);
    // console.log(db.query()); //this === undefined
  });
}

// getField(tasksKey, 'name');

async function writeDoc(dbKeyName) {
  const ipfs = await IPFS.create(ipfsOptions);
  const orbitdb = await OrbitDB.createInstance(ipfs);
  const docstore = await orbitdb.docstore(dbKeyName);

  docstore
    .put({ _id: 'hello world', doc: 'all the things' })
    .then(() => docstore.put({ _id: 'sup world', doc: 'other things' }))
    .then(() => docstore.put({ _id: 'hello onyx', doc: 'steph' }))
    .then(() => docstore.get('hello'))
    .then((value) => console.log(value));
  // [{ _id: 'hello world', doc: 'all the things'}]
}

writeDoc(tasksKey);
