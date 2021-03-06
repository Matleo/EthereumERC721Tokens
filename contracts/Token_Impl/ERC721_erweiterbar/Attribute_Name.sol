pragma solidity ^0.5.0;

import "./IAttribute.sol";

contract Attribute_Name is IAttribute {
    
    mapping(uint256 => string) allNames;
    
    function get(uint256 _tokenId) external view returns (string memory){
        return allNames[_tokenId];
    }
    function set(uint256 _tokenId, string calldata _value) external{
        allNames[_tokenId] = _value;
    }
}