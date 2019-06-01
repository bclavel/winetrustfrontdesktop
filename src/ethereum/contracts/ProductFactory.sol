pragma solidity ^0.5.1;

import "./Product.sol";

contract ProductFactory {

    Product[] public deployedProducts;

    function createProduct(string memory _producer_hash) public {
        Product newProduct = new Product(msg.sender, _producer_hash);
        deployedProducts.push(newProduct);
    }

    function getDeployedProducts() public view returns (Product[] memory) {
        return deployedProducts;
    }

}
