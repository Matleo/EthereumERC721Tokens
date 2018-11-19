pragma solidity ^0.4.25;

import "./IAttribute.sol";

contract Attribute_Groesse is IAttribute {
    
    mapping(uint256 => string) allGroessen;
    
    function get(uint256 _tokenId) external view returns (string){
        return allGroessen[_tokenId];
    }
    function set(uint256 _tokenId, string _value) external{
        allGroessen[_tokenId] = _value;
    }
}