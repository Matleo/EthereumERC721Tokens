pragma solidity ^0.4.24;

// Simple interface to delegate some calculation.
// Author: Marius Degen

interface IDelegate {
    function delegate(uint256 number) external returns (bool success);
}