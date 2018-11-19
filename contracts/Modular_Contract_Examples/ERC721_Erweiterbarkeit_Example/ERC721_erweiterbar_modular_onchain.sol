pragma solidity ^0.4.25;

import "./ERC721_basic.sol";
import "./IBaseHumanPropertyManager.sol";

contract ERC721_erweiterbar_onchain is ERC721_basic {
    address public propertyManager;
    
    constructor(address _propertyManager) public {
        propertyManager = _propertyManager;
    }
    
    function setPropertyManager(address _newPropertyManager) external{
        propertyManager = _newPropertyManager;
    }
    
    function create_token(address _to, uint256 _tokenId, string _humanName, uint256 _humanGroesse) external {
        super.create_token(_to, _tokenId);
        
        IBaseHumanPropertyManager(propertyManager).createHuman(_tokenId, _humanName, _humanGroesse);
    }

}