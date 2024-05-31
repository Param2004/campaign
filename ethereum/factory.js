import web3 from './web3';
import campaignFactory from './build/CampaignFactory.json';

export const instance = new web3.eth.Contract(
    JSON.parse(campaignFactory.interface),
    '0x1168C4371cddf5021e1bD69C72bfe0d185d511A2'
)