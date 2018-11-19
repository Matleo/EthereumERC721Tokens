pragma solidity ^0.4.24;

// Contract acting as a 'middleware', a fix address to acces our Smart Contract application.
// Author: Marius Degen

import "./API.sol";

contract APIDelegate is API {
    function doSomething() external returns (uint256 _result) {
        return 1;
    }
}