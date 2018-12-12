pragma experimental ABIEncoderV2;
pragma solidity ^0.5.0;

import "./ERC721_basic.sol";
import "./IAttribute.sol";

contract ERC721_erweiterbar_onchain is ERC721_basic {
    address[] DBs;
    
    constructor(address _nameDB) public{
        DBs.push(_nameDB);
    }
    
    function createHuman(address _to, uint256 _tokenId, string[] memory properties) public {
        super.create_token(_to, _tokenId);
        
        for (uint i=0; i<properties.length; i++) {
          IAttribute(DBs[i]).set(_tokenId, properties[i]);
        }
    }
    
    function getHuman(uint256 _tokenId) public view returns(string[] memory){
        string[] memory vals = new string[](DBs.length);
        for (uint i=0; i<DBs.length; i++) {
          vals[i] = IAttribute(DBs[i]).get(_tokenId);
        }
        return vals;
    }
    
    function addAttribute(address newAttribute) public {
        DBs.push(newAttribute);
    }
}