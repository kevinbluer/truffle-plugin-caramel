# Caramel

Adding caramel gooeyness (aka artifact persistence via [Pinata's](http://pinata.cloud/) IPFS pinning service) to [Truffle](https://www.trufflesuite.com/) 🍬

## Installation

Begin by adding to your Truffle project via the following:

```
npm i truffle-plugin-caramel
```

Add the following to your `truffle-config.json`:

```
plugins: [
  "truffle-plugin-caramel"
]
```

Finally, create a `.env` file in the project's root directory with your Pinata API key (PINATA_API_KEY) and secret (PINATA_API_SECRET). These can be found under your [account page](https://pinata.cloud/account). Example as follows:

```
PINATA_API_KEY=deadbeef
PINATA_API_SECRET=1234567890
```

## Usage

To run the plugin, simple run the following command from the root of your Truffle project:

```
truffle run caramel <command>
```

The list available commands is currently as follows:

- [upload](#upload)
- [list](#list)
- [unpin](#unpin)

<a name="upload"></a>
### `Upload`

The following uploads your [Truffle artifacts](https://www.trufflesuite.com/docs/truffle/advanced/networks-and-app-deployment#build-artifacts).

```
truffle run caramel upload [<path>]
```

Options:

- **path** - Specifies the path (either to a directory or a file) that you would like to explicitly upload. If omitted, it will default to uploading your Truffle artifacts.

<a name="list"></a>
### `List`

The following retrieves a list of all your pins currently pinned on Pinata.

```
truffle run caramel list
```

<a name="unpin"></a>
### `Unpin`

The following unpins an ipfs hash currently pinned by Pinata.

```
truffle run caramel unpin <ipfs-hash>
```