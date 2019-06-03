import web3 from './web3';
import Product from './build/Product.json'

export default (address) => {
  return new web3.eth.Contract(Product.abi, address)
};
