pragma solidity ^0.4.24;

// Interface for the API of our Smart Contract application
// Author: Marius Degen

interface API {
    function doSomething() external returns (uint256 _result);
}