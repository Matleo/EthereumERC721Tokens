pragma solidity ^0.4.24;

// Contract providing the Implementation of our API. This Contract represents our actual Smart Contract application.
// This Contract can be easely replaced by a newer version of our application without having to update external contracts accessing our API. 
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