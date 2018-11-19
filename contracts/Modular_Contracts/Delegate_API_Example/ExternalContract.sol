pragma solidity ^0.4.24;

// A contract which is not necessarily part of our Smart Contract application.
// Just accessing our Smart Contract application via the API interface through the API implementation deplyed at address 'api'
// This address won't change with upcoming version of our application thus no need to update the address 'api'.
// Author: Marius Degen

import "./API.sol";

contract ExternalContract {
    
    address public api;
    
    uint256 public result;
    
    constructor() {
        api = 1;//TODO: hard code address of deployed contract 'APIDelegee'.
    }
    
    function accessAPI() public {
        result = API(api).doSomething();
    }
}