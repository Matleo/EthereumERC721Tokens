pragma solidity ^0.4.24;

// Simple delegee contract calling an external delegate contract via its interface.
// Provides functionality to change code during runtime!
// Author: Marius Degen

import "./IDelegate.sol";

contract Delegee {
    
    address public delegateAddr; // public state variables have a default getter-method
    
    function callDelegate(uint256 number) public returns (bool success) {
        return IDelegate(delegateAddr).delegate(number); // Calls 'delegate' method on IDelegate implementation deployed at address 'delegateAddr'
    }
    
    function setDelegateAddr(address _delegateAddr) public {
        delegateAddr = _delegateAddr;
    }
}