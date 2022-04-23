const IPFS = require('ipfs')
const OrbitDB = require('orbit-db')

// TODO get orbit wired in and working
async function main () {
  // Create IPFS instance
  const ipfsOptions = { repo : './ipfs', }
  const ipfs = await IPFS.create(ipfsOptions)

  // Create OrbitDB instance
  const orbitdb = await OrbitDB.createInstance(ipfs)
  this.docstore = await orbitdb.docstore('DAOtabase')

  console.log("Orbit instance generated")

}

function createUser(user) {
  docstore.put(user);
  console.log(`Added new user ${user} to data store`)
}

function createTask(task) {
  docstore.put(task);
  console.log(`Added new task ${task} to data store`)
}

function createDAO(dao) {
  docstore.put(dao);
  console.log(`Added new dao ${dao} to data store`)
}
