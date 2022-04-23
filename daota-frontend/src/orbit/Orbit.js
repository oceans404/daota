import './types.js';

try {
  const IPFS = require("ipfs");
  const OrbitDB = require("orbit-db");

  module.exports = exports = new NewPiecePlease(Ipfs, OrbitDB);
} catch (e) {
  window.NPP = new OrbitComponent(window.IPFS, window.OrbitDB);
}

class OrbitComponent {
  constructor(IPFS, OrbitDB) {
    this.OrbitDB = OrbitDB;

    this.node = new IPFS({
      preload: { enabled: false },
      repo: "./ipfs",
      EXPERIMENTAL: { pubsub: true },
      config: {
        Bootstrap: [],
        Addresses: { Swarm: [] }
      }
    });

    this.node.on("error", e => {
      throw e;
    });
    this.node.on("ready", this._init.bind(this));
  }

  async _init() {
    this.orbitdb = await this.OrbitDB.createInstance(this.node);
    this.onready();
    this.docstore = await orbitdb.docstore('DAOtabase');

    console.log("Orbit instance generated")
  }
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
