pragma solidity ^0.4.25;

import "./IBaseHumanPropertyManager.sol";

contract HumanPropertyManager is IBaseHumanPropertyManager {
    address public dataBase;
    
    constructor(address _dataBase) public {
        dataBase = _dataBase;
    }
    
    function createHuman(uint256 _tokenId, string _humanName, uint256 _humanGroesse) external{
        IBaseHumanPropertyManager(dataBase).createHuman(_tokenId, _humanName, _humanGroesse);
    }
    
    function getHuman(uint256 _tokenId) external view returns (string, uint256){
        return IBaseHumanPropertyManager(dataBase).getHuman(_tokenId);
    }
    
    function setHuman(uint256 _tokenId, string _humanName, uint256 _humanGroesse) external{
        IBaseHumanPropertyManager(dataBase).setHuman(_tokenId, _humanName, _humanGroesse);
    }
}