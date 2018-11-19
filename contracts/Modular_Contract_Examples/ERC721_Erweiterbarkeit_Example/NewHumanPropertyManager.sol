pragma solidity ^0.4.25;

import "./IBaseHumanPropertyManager.sol";
import "./DataBase_haarfarbe.sol";

contract NewHumanPropertyManager is IBaseHumanPropertyManager {
    address public dataBase_initial;
    address public database_haarfarbe;
    
    constructor(address _dataBase_initial, address _database_haarfarbe) public {
        dataBase_initial = _dataBase_initial;
        database_haarfarbe = _database_haarfarbe;
    }
    
    //old functions:
    function createHuman(uint256 _tokenId, string _humanName, uint256 _humanGroesse) external{
        IBaseHumanPropertyManager(dataBase_initial).createHuman(_tokenId, _humanName, _humanGroesse);
    }
    
    function getHuman(uint256 _tokenId) external view returns (string, uint256){
        return IBaseHumanPropertyManager(dataBase_initial).getHuman(_tokenId);
    }
    
    function setHuman(uint256 _tokenId, string _humanName, uint256 _humanGroesse) external{
        IBaseHumanPropertyManager(dataBase_initial).setHuman(_tokenId, _humanName, _humanGroesse);
    }
    
    //new functions:
    function setHaarfarbe(uint256 _tokenId, string _haarfarbe) external{
        DataBase_haarfarbe(database_haarfarbe).setHaarfarbe(_tokenId, _haarfarbe);
    }
    
    function getHaarfarbe(uint256 _tokenId) external view returns (string){
        return DataBase_haarfarbe(database_haarfarbe).getHaarfarbe(_tokenId);
    }
}