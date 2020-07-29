const pinataSDK = require('@pinata/sdk');
const pinata = pinataSDK(process.env.PINATA_API_KEY, process.env.PINATA_API_SECRET);

const unpin = async (config) => {

  try {
    let hashToUnpin;
    
    if (config._.length > 1) {
      hashToUnpin = config._[2];
    } else {
      console.log("No hash provided.");
    }

    console.log(`Unpinning ${hashToUnpin}...`);
    const result = await pinata.unpin(hashToUnpin);
    console.log(result === `OK` ? `The data was successfully unpinned.` : `A problem occurred when attempting to unpin.`);

  } catch (err) {
    console.log(`An error occurred when attempting to unpin: ${err}`);
  }

}

module.exports = unpin;