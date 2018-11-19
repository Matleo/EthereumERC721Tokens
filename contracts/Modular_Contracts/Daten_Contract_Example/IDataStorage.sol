pragma solidity ^0.4.24;

// Interface for a data storage contract to act as a simple database to store an Integer.
// Author: Marius Degen

interface IDataStorage {
    function readData() external returns (uint256 _data);
    function saveData(uint256 _data) external;
}