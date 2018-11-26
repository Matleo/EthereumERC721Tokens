pragma solidity ^0.4.24;

// This contract will be called by a contract called 'Caller' to perform some calculation.
// Part of testcase to test transaction costs!
// Author: Marius Degen

contract Receiver {
    
    // Simply returns a value without any calculations
    function getValue() public pure returns (bool result) {
        return true;
    }
    
    // Calculates if the given value is a prime to test a more 'complex' calculation on transactions
    function processSomething(uint256 n) public pure returns (bool isPrime) {
        for(uint i=2;i<n;i++) {
            if(n%i==0)
                return false;
        }
        return true;
    }
    
    // Return a large array. Declared as public
    function returnLargeArrayPublic(uint256 length) public pure returns (uint256[] array) {
        return new uint256[](length);
    }
    
    // Return a large array. Declared as external
    function returnLargeArrayExternal(uint256 length) external pure returns (uint256[] array) {
        return new uint256[](length);
    }
    
    // Expect a large array as a parameter. Declared as public
    function expectLargeArrayPublic(uint256[] array) public pure {
        array[1] * 2;
    }
    
    // Expect a large array as a parameter. Declared as external
    function expectLargeArrayExternal(uint256[] array) external pure {
         array[1] * 2;
    }
}