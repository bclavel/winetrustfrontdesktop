pragma solidity ^0.5.1;

contract Product {
    struct Transaction {
        string product_hash;
    }

    Transaction[] public transactions;
    address public owner;
    string public producerHash;

    constructor(address creator, string memory _producer_hash) public {
        owner = creator;
        producerHash = _producer_hash;
    }

    function createTransact(string memory _product_hash, address seller) public {
    require(owner == seller);
    Transaction memory newTransaction = Transaction({
       product_hash: _product_hash
    });
    transactions.push(newTransaction);
    owner = msg.sender;
    }

}
