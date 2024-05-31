import Web3 from 'web3';


// const web3 = new Web3(window.web3.currentProvider);

let web3;

// Modern DApp browsers (MetaMask)
if (typeof window !== 'undefined' && window.ethereum) {
  web3 = new Web3(window.ethereum);
  try {
    await window.ethereum.request({ method: 'eth_requestAccounts' });
  } catch (error) {
    console.error("User denied account access");
  }
}
// Legacy DApp browsers (Mist/Mobile)
else if (typeof window !== 'undefined' && window.web3) {
  web3 = new Web3(window.web3.currentProvider);
}
// Non-DApp browsers (use Infura endpoint)
else {
  const provider = new Web3.providers.HttpProvider(
    "https://nd-029-123-710.p2pify.com/ea820edbfd0f2bbd2dfa93615421bac9"
  );
  web3 = new Web3(provider);
}

export default web3;