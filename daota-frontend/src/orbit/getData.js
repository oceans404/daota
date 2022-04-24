import React, { useState, useEffect } from 'react';
const IPFS = require('ipfs');
const OrbitDB = require('orbit-db');

const ipfsOptions = {
  EXPERIMENTAL: {
    pubsub: true,
  },
};

function OrbitDBHandler(props) {
  const [ipfs, setIpfs] = useState(null);
  const [orbitdb, setOrbitdb] = useState(null);

  useEffect(() => {
    async function readDoc(dbKeyName) {
      const ipfs = await IPFS.create(ipfsOptions);
      const orbitdb = await OrbitDB.createInstance(ipfs);
      const docstore = await orbitdb.docstore(dbKeyName);
      docstore.load().then(async (abc) => {
        const plz = await docstore.query((s) => true);
        console.log(plz);
      });
    }

    readDoc('daota-tasks');
  }, []);

  return (
    <div>
      <h1>Connect to IPFS and OrbitDB</h1>
    </div>
  );
}
export default OrbitDBHandler;
