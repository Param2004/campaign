const HDWalletProvider = require('@truffle/hdwallet-provider');
const {Web3} = require('web3');
const compiledFactory = require('./build/CampaignFactory.json');
const mnemonic = 'enemy basket property dawn pyramid ice setup harsh noodle south mean current';
const provider = new HDWalletProvider(mnemonic, 'https://nd-029-123-710.p2pify.com/ea820edbfd0f2bbd2dfa93615421bac9');
const web3 = new Web3(provider);
const deploy = async () => {
    try {
        const accounts = await web3.eth.getAccounts();
        console.log('Attempting to deploy from account', accounts[0]);
        // console.log(interface);

        // console.log(bytecode);

        const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
            .deploy({ data:  compiledFactory.bytecode })  
            .send({ from: accounts[0], gas: '1000000' });

        console.log('Contract deployed to', result.options.address);
    } catch (error) {
        console.error('Deployment failed:', error.message);
    } finally {
        provider.engine.stop();
    }
};
deploy();

