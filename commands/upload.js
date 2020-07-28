const fs = require('fs');
const pinataSDK = require('@pinata/sdk');
const pinata = pinataSDK(process.env.PINATA_API_KEY, process.env.PINATA_API_SECRET);
const gatewayUri = `https://gateway.pinata.cloud/ipfs/`;


const upload = async (config) => {

  try {

    let sourcePath;
    
    if (config._.length > 1) {
      sourcePath = config._[2];
      if (!fs.existsSync(sourcePath)) {
        console.log(`No file or directory on the provided path: ${sourcePath}`);
        return;
      }
    } else {
      sourcePath = config.contracts_build_directory;
    }

    console.log(`Pinning from ${sourcePath}`);

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

module.exports = upload;