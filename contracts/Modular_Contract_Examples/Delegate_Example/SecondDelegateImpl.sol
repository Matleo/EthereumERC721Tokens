pragma solidity ^0.4.24;

// Simple implementation of the IDelegate interface
// Author: Marius Degen

import "./IDelegate.sol";

contract SecondDelegateImpl is IDelegate {
    function delegate(uint256 number) external returns (bool success) {
        return (number % 2 != 0); // Return true on odd numbers
    }
}