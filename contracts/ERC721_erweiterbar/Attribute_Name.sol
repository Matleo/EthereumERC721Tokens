pragma solidity ^0.4.25;

import "./IAttribute.sol";

contract Attribute_Name is IAttribute {
    
    mapping(uint256 => string) allNames;
    
    function get(uint256 _tokenId) external view returns (string){
        return allNames[_tokenId];
    }
    function set(uint256 _tokenId, string _value) external{
        allNames[_tokenId] = _value;
    }
}