import web3 from './web3';
import ProductFactory from './build/ProductFactory.json'

const instance = new web3.eth.Contract(ProductFactory.abi, '0x6eD70A06eCCcf1d6de97a17416fdE85826B47F04');

export default instance;
