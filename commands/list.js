const pinataSDK = require('@pinata/sdk');
const pinata = pinataSDK(process.env.PINATA_API_KEY, process.env.PINATA_API_SECRET);
const gatewayUri = `https://gateway.pinata.cloud/ipfs/`;

const list = async () => {

  try {
    console.log(`Loading your pinned data...`);

    const filters = {
      status : 'pinned'
    };

    const results = await pinata.pinList(filters);
    let rowsWithUri = results.rows.map((row) => { row.uri = `${gatewayUri}${row.ipfs_pin_hash}`; return row; });

    console.log(`${rowsWithUri.length} entries found.`);
    console.log(rowsWithUri);

  } catch (err) {
    console.log(`An error occurred get the list:\n\n${err}`);
  }

}

module.exports = list;