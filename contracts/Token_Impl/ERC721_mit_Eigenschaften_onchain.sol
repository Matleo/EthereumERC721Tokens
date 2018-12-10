pragma solidity ^0.5.0;

import "./ERC721_basic.sol";

contract ERC721_mit_Eigenschaften_onchain is ERC721_basic {
    struct Human {
        string name;
        uint256 groesse;
    }
    
    mapping(uint256 => Human) allHumans;
    
    function create_token(address _to, uint256 _tokenId, string calldata _humanName, uint256 _humanGroesse) external {
        super.create_token(_to, _tokenId);
        
        Human storage newHuman = allHumans[_tokenId];
        newHuman.name = _humanName;
        newHuman.groesse = _humanGroesse;
    }   
    
    function getHuman(uint256 _tokenId) public view returns (string memory, uint256) {
        Human memory theHuman = allHumans[_tokenId];
        return (theHuman.name, theHuman.groesse);
    }
    
    function setHuman(uint256 _tokenId, string memory _humanName, uint256 _humanGroesse) public canTransfer(_tokenId){
        Human storage theHuman = allHumans[_tokenId];
        theHuman.name = _humanName;
        theHuman.groesse = _humanGroesse;
    }
}