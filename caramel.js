/**
 * Outputs `Hello, World!` when running `truffle run hello`,
 * or `Hello, ${name}` when running `truffle run hello [name]`
 * @param {Config} config - A truffle-config object.
 * Has attributes like `truffle_directory`, `working_directory`, etc.
 */

var Provider = require("@truffle/provider");
var Web3 = require("web3");

module.exports = async (config) => {
  // config._ has the command arguments.
  // config_[0] is the command name, e.g. "hello" here.
  // config_[1] starts remaining parameters.
  if (config.help) {
    console.log(`Usage: truffle run caramel [name]`);
    return;
  }

  const endpoint = config.networks.teams.url;
  console.log(config.networks.teams.url);

  const provider = Provider.create({
    provider: new Web3.providers.HttpProvider(endpoint),
  });

  let name = config._.length > 1 ? config._[1] : 'Caramel!';
  console.log(`Hello, ${name}`);
}