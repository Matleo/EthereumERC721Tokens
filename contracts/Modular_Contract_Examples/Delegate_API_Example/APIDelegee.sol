pragma solidity ^0.4.24;

// Contract acting as a 'middleware', a fix address to acces our Smart Contract application.
// Author: Marius Degen

import "./API.sol";

contract APIDelegee is API {
    
    // Address of deployed delegate contract providing our business logic
    address public delegate;
    
    // Call delegate
    function doSomething() external returns (uint256 _result) {
        return API(delegate).doSomething();
    }
    
    // Setter to switch delegate at runtime
    function setDelegate(address _delegate) public {
        delegate = _delegate;
    }
}