pragma solidity ^0.4.24;

// This contract is an example for a new version of our DataAccessor contract with 'improved' logic
// but accessing data which was already deployed to the blockchain. 
// This way we do not need to migrate data from a previous version contract.
// Author: Marius Degen

import "./IDataStorage.sol";

contract NewDataAccessor is IDataStorage {
    
    address public dataStorage;
    
    // Access data via an interface to switch data storage at runtime
    function readData() external returns (uint256 data) {
        return IDataStorage(dataStorage).readData();
    }
    
    // Write data to an interface to switch place of storage at runtime
    function saveData(uint256 _data) external {
        IDataStorage(dataStorage).saveData(_data);
    }
    
    // Do some basic addition as an example for processing external stored data. 
    function processData(uint256 adding) public returns (uint256 result) {
        return (this.readData() + adding);
    }
}