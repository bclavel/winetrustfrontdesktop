import web3 from './web3';
import ProductFactory from './build/ProductFactory.json'

const instance = new web3.eth.Contract(ProductFactory.abi, '0xf16b77E11F3771727B078688AC9f82321Ae30Ef8');

export default instance;
