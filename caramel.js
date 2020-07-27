require("dotenv").config();

const list = require("./commands/list");
const upload = require("./commands/upload");

module.exports = (config) => {

  if (config.help) {
    console.log(`Usage: truffle run caramel [command]`);
    console.log(`Commands: upload, list`);
    return;
  }

  if (config._.length < 2) {
    console.log("No command provided. Run truffle run caramel --help to see the full list.");
    return;
  }

  switch (config._[1]) {
    case "upload":
      upload(config);
      break;
    case "list":
      list(config);
      break;
    default:
      console.log("Command not found. Run truffle run caramel --help to see the full list.");
  }
}