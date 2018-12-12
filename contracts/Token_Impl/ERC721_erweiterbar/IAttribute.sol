pragma solidity ^0.5.0;

interface IAttribute {
    function get(uint256 _tokenId) external view returns (string memory);
    function set(uint256 _tokenId, string calldata _value) external;
}