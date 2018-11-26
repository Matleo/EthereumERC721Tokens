pragma solidity ^0.4.24;

// This contract calls another contract to perform some calculation, instead of doing it itself.
// Part of testcase to test transaction costs!
// Author: Marius Degen

import "./Receiver.sol";

contract Caller {
    
    address receiver;
    
    constructor(address _receiver) {
        receiver = _receiver;
    }
    
    function callGetValue() public {
        Receiver(receiver).getValue();
    }
    
    function callProcessSomething(uint256 n) public {
        Receiver(receiver).processSomething(n);
    }
    
    function callReturnLargeArrayPublic(uint256 length) public {
        Receiver(receiver).returnLargeArrayPublic(length);
    }
    
    function callReturnLargeArrayExternal(uint256 length) public {
        Receiver(receiver).returnLargeArrayExternal(length);
    }
    
    function callExpectLargeArrayPublic(uint256[] array) public {
        Receiver(receiver).expectLargeArrayPublic(array);
    }
    
    function callExpectLargeArrayExternal(uint256[] array) public {
        Receiver(receiver).expectLargeArrayExternal(array);
    }
}