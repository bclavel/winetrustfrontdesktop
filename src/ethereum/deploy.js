const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/ProductFactory.json');

const provider = new HDWalletProvider(
  'addict auction height increase pulp badge crunch total live armed repair profit',
  'https://rinkeby.infura.io/v3/d8c9933f27034aa5b8501f0966ed22df'
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(compiledFactory.abi)
      .deploy({ data: '0x' + compiledFactory.evm.bytecode.object })
      .send({ gas: '1000000', from: accounts[0] });

  console.log('Contract deployed to', result.options.address);
}
deploy()
