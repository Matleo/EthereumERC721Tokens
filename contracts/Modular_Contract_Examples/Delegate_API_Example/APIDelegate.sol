pragma solidity ^0.4.24;

// Contract providing the Implementation of our API. This Contract represents our actual Smart Contract application.
// This Contract can be easely replaced by a newer version of our application without having to update external contracts accessing our API. 
// Author: Marius Degen

import "./API.sol";

contract APIDelegate is API {
    function doSomething() external returns (uint256 _result) {
        return 1;
    }
}