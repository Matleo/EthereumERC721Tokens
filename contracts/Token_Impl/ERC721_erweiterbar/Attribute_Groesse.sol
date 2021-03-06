pragma solidity ^0.5.0;

import "./IAttribute.sol";

contract Attribute_Groesse is IAttribute {
    
    mapping(uint256 => string) allGroessen;
    
    function get(uint256 _tokenId) external view returns (string memory){
        return allGroessen[_tokenId];
    }
    function set(uint256 _tokenId, string calldata _value) external{
        allGroessen[_tokenId] = _value;
    }
}