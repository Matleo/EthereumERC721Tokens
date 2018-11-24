pragma solidity ^0.4.25;

interface IBaseHumanPropertyManager {
	function createHuman(uint256 _tokenId, string _humanName, uint256 _humanGroesse) external;
	function getHuman(uint256 _tokenId) external view returns (string, uint256);
	function setHuman(uint256 _tokenId, string _humanName, uint256 _humanGroesse) external;
}