const Provider = require("@truffle/provider");
const Web3 = require("web3");
const pinataSDK = require('@pinata/sdk');

require("dotenv").config();

const pinata = pinataSDK(process.env.PINATA_API_KEY, process.env.PINATA_API_SECRET);
const gatewayUri = `https://gateway.pinata.cloud/ipfs/`;

module.exports = async (config) => {
  // config._ has the command arguments.
  // config_[0] is the command name, e.g. "hello" here.
  // config_[1] starts remaining parameters.
  if (config.help) {
    console.log(`Usage: truffle run caramel [name]`);
    return;
  }

  const sourcePath = config.contracts_build_directory;
  console.log(`Pinning from ${sourcePath}`);

  try {
    const fs = require('fs');
    const options = {
        pinataMetadata: {
            name: "meta",
            keyvalues: {
                candyName: 'caramel'
            }
        },
        pinataOptions: {
            cidVersion: 0
        }
    };
    const result = await pinata.pinFromFS(sourcePath, options);
    console.log(`Your assets were successfully pinned:\n\n${JSON.stringify(result, null, 2)}\n`);
    console.log(`View your assets at the follow: ${gatewayUri}${result.IpfsHash}`);
  } catch (err) {
      console.log(`An error occurred when attempting to pin:\n\n${JSON.stringify(err), null, 2}`);
  }
}