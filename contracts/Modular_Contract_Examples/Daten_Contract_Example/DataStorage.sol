pragma solidity ^0.4.24;

// Implementation of a IDataStorage interface
// Stores a single unsigned Integer and provides read and write methods.
// This Contract only acts as some sort of database without any logic, just storing data!
// Author: Marius Degen

import './IDataStorage.sol';

contract DataStorage is IDataStorage {
    uint256 data;
    
    function saveData(uint256 _data) external {
        data = _data;
    }
    
    function readData() external returns (uint256 _data){
        return data;
    }
}