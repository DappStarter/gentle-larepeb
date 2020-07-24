require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess clock other sugar fan renew magic erosion idea climb metal giant'; 
let testAccounts = [
"0x88bbb1c9d69fa11db854a7e7ec2abec6f614af73cdebc5b7df74e8e0dd52b64f",
"0x1fc889e55c2361854a25bec8291fc4d7e4827b0ffedd4e7628c923625a964be3",
"0x2413d7e57ff6aa888fec0ec30b709ac247365526a1dc7c1b950ff3cf5f200379",
"0x98507b61543439042bc4d927c3d3259c2f911eaec6b2f3a18a906bfafcb6fd71",
"0x1e370348e16e1ffb675ce7203d5b91b0d19f333131032f48b1d0595e5d933c03",
"0x165371b69d130a42113ba1c2bf11d169b65db67678a0ff744c106771aa8424b6",
"0x7e2f37e8bbb1def160cb6398ac12acae530cbf8026cb7cc88a02d152fa80784e",
"0xe3a45361178c86ff9218b1e3c444bd347b9d506926cf0b81ea023ef848686f7d",
"0x61e37b7c1d64381e3076eaf3633f16ac71b72f87dbc4841c9c732916ebe32e96",
"0x460138a4cb130f04703a643e191a0d70173d2dfc1bde306ba8331cfef79b356e"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
