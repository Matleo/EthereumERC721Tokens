pragma solidity ^0.4.25;

import "./IBaseHumanPropertyManager.sol";

contract DataBase_initial is IBaseHumanPropertyManager {
    struct Human {
        string name;
        uint256 groesse;
    }
    
    mapping(uint256 => Human) allHumans;
    
    function createHuman(uint256 _tokenId, string _humanName, uint256 _humanGroesse) external{
        Human storage newHuman = allHumans[_tokenId];
        newHuman.name = _humanName;
        newHuman.groesse = _humanGroesse;
    }
    
    function getHuman(uint256 _tokenId) external view returns (string, uint256){
        Human memory theHuman = allHumans[_tokenId];
        return (theHuman.name, theHuman.groesse);
    }
    function setHuman(uint256 _tokenId, string _humanName, uint256 _humanGroesse) external{
        Human storage theHuman = allHumans[_tokenId];
        theHuman.name = _humanName;
        theHuman.groesse = _humanGroesse;
    }
}