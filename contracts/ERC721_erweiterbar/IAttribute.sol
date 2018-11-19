pragma solidity ^0.4.25;

interface IAttribute {
    function get(uint256 _tokenId) external view returns (string);
    function set(uint256 _tokenId, string _value) external;
}