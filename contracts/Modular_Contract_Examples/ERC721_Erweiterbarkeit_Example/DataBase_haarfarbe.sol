pragma solidity ^0.4.25;

contract DataBase_haarfarbe {
    struct Human {
        string name;
        string haarfarbe;
    }
    
    mapping(uint256 => Human) allHumans;
    
    function setHaarfarbe(uint256 _tokenId, string _haarfarbe) external{
        Human storage theHuman = allHumans[_tokenId];
        theHuman.haarfarbe = _haarfarbe;
    }
    
    function getHaarfarbe(uint256 _tokenId) external view returns (string){
        Human memory theHuman = allHumans[_tokenId];
        return theHuman.haarfarbe;
    }
}