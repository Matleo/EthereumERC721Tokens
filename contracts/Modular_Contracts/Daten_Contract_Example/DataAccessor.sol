pragma solidity ^0.4.24;

// This contract acts as an intermediary between some data storage and an external contract requiring some data.
// Another use case is this contract processing some data wthout having to store the data locally as a state variable
// but reading it from an external data contract. 
// This way the data storage can be easaly replaced or migrated to another smart contract application.
// -> Contract without state variables. 
// -> Reads all data required for processing from external data-contract.  
// Author: Marius Degen

import "./IDataStorage.sol";

contract DataAccessor is IDataStorage {
    
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
        uint256 data = this.readData();
        return (data + adding);
    }
}