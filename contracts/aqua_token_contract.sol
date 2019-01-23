pragma solidity ^0.5.0;

import "./Interface_ERC165.sol";
import "./Interface_ERC721.sol";
import "./Interface_ERC721TokenReceiver.sol";
import "./Library_SafeMath.sol";
import "./verifyIPFS.sol";

contract aqua_token_contract is ERC721, ERC165 {
    using SafeMath for uint256;
    
    uint256[] internal allTokens;
    mapping (address => uint256[]) internal ownedTokens;
    mapping(uint256 => uint256) internal ownedTokensIndex; // Mapping from token ID to index of the owner tokens list 
    mapping (address => uint256) internal ownedTokensCount;
    mapping (uint256 => address) internal tokenOwner;
    mapping(uint256 => bytes32) public tokenPropertyHashes; //mapping id->hash of properties
    
    mapping (uint256 => address) internal tokenApprovals; //for single NFT approval
    mapping (address => mapping (address => bool)) internal operatorApprovals; //to give approval for all my NFT

    uint256 makingPrice = 10000000000000000; //in wei

    event Transfer(address indexed from, address indexed to, uint256 indexed tokenId);
    event Approval(address indexed owner, address indexed approved, uint256 indexed tokenId);
    event ApprovalForAll(address indexed owner, address indexed operator, bool approved);
    event NewbornFish(uint256 indexed id, uint256 kopf, uint256 schwanz, uint256 speed);
    
    struct standardFish {
        uint256 head;
        uint256 tail;
        uint256 speed;
    }
    
    standardFish[] internal fishes;
    constructor() public {
        fishes.push(standardFish(1,1,200));
        fishes.push(standardFish(2,2,200));
        fishes.push(standardFish(3,3,200));
        fishes.push(standardFish(4,4,200));
    }
    
    //------------Token Creation:------------
    function create_token(address _to) public payable returns(uint256){
        require(_to != address(0));
        require(msg.value >= makingPrice); //check sender payed enough
        
        uint256 tokenId = _addToken(_to);
        //Save hash of properties
        uint256 iteration = (tokenId % 4);
        standardFish memory fish = fishes[iteration];
        bytes32 hash = keccak256(abi.encodePacked(fish.head, fish.tail, fish.speed));
        tokenPropertyHashes[tokenId] = hash;
        
        emit NewbornFish(tokenId, fish.head, fish.tail, fish.speed);
        return tokenId;
    }
    
    function _addToken(address _to) private returns(uint256){
        uint256 tokenId = allTokens.length;
        _addTokenTo(_to, tokenId);
        emit Transfer(address(0), _to, tokenId);
        allTokens.push(tokenId);
        return tokenId;
    }
    
    function _addTokenTo(address _to, uint256 _tokenId) internal {
        require(tokenOwner[_tokenId] == address(0));
		
		uint256 length = ownedTokens[_to].length;
        ownedTokensIndex[_tokenId] = length;
		
        tokenOwner[_tokenId] = _to;
        ownedTokens[_to].push(_tokenId);
        
        ownedTokensCount[_to] = ownedTokensCount[_to].add(1);
    }

      
    //------------Transfer & Allowance------------
    function approve(address _to, uint256 _tokenId) public payable {
        address owner = tokenOwner[_tokenId];
        require(_to != owner);
        require(msg.sender == owner || isApprovedForAll(owner, msg.sender));
    
        //_to darf nur adress(0) sein, wenn kein Approval gesetzt ist
        if (getApproved(_tokenId) != address(0) || _to != address(0)) {
          tokenApprovals[_tokenId] = _to;
          emit Approval(owner, _to, _tokenId);
        }
    }
  
    function isApprovedForAll(address _owner, address _operator) public view returns (bool) {
        return operatorApprovals[_owner][_operator];
    }
      
    function getApproved(uint256 _tokenId) public view returns (address) {
        return tokenApprovals[_tokenId];
    }
     
    function setApprovalForAll(address _to, bool _approved) public {
        require(_to != msg.sender);
        operatorApprovals[msg.sender][_to] = _approved;
        emit ApprovalForAll(msg.sender, _to, _approved);
    }

    modifier canTransfer(uint256 _tokenId) {
		address _spender = msg.sender;
		address owner = tokenOwner[_tokenId];
        bool isApprovedOrOwner = _spender == owner || getApproved(_tokenId) == _spender || isApprovedForAll(owner, _spender);
        require(isApprovedOrOwner);
        _;
    }
    
    function transferFrom(address _from, address _to, uint256 _tokenId) public canTransfer(_tokenId) payable {
        require(_from != address(0));
        require(_to != address(0));
        _clearApproval(_from, _tokenId);
        _removeTokenFrom(_from, _tokenId);
        _addTokenTo(_to, _tokenId);
        emit Transfer(_from, _to, _tokenId);
    }

    function _clearApproval(address _owner, uint256 _tokenId) internal {
        require(tokenOwner[_tokenId] == _owner);
        if (tokenApprovals[_tokenId] != address(0)) {
          tokenApprovals[_tokenId] = address(0);
          emit Approval(_owner, address(0), _tokenId);
        }
    }

    function _removeTokenFrom(address _from, uint256 _tokenId) internal {
        require(tokenOwner[_tokenId] == _from);
        ownedTokensCount[_from] = ownedTokensCount[_from].sub(1);
        tokenOwner[_tokenId] = address(0);
    
        uint256 tokenIndex = ownedTokensIndex[_tokenId];
        uint256 lastTokenIndex = ownedTokens[_from].length.sub(1);
        uint256 lastToken = ownedTokens[_from][lastTokenIndex];
    
        ownedTokens[_from][tokenIndex] = lastToken;
        ownedTokens[_from][lastTokenIndex] = 0;
        ownedTokens[_from].length--;
        ownedTokensIndex[_tokenId] = 0;
        ownedTokensIndex[lastToken] = tokenIndex;
    }
    
    //safe Transfer:
    function _safeTransferFrom(address _from, address _to, uint256 _tokenId, bytes memory _data) internal {
        require(checkAndCallSafeTransfer(_from, _to, _tokenId, _data)); 
        transferFrom(_from, _to, _tokenId);
    }
    
    function safeTransferFrom(address _from, address _to, uint256 _tokenId) external payable canTransfer(_tokenId) {
        _safeTransferFrom(_from, _to, _tokenId, ""); 
    }
    
    function safeTransferFrom(address _from, address _to, uint256 _tokenId, bytes calldata _data) external payable canTransfer(_tokenId) {
        _safeTransferFrom(_from, _to, _tokenId, _data); 
    }

    function checkAndCallSafeTransfer(address _from, address _to, uint256 _tokenId, bytes memory _data) internal returns (bool) {
        if (!isContract(_to)) {
          return false; 
        }
        bytes4 retval = ERC721TokenReceiver(_to).onERC721Received(msg.sender, _from, _tokenId, _data);
        bytes4 ERC721_Hash_Expected = 0x150b7a02; //ERC-165 identifier for this interface == InterfaceSignature_ERC721TokenReceiver
        return (retval == ERC721_Hash_Expected );
    }

    function isContract(address addr) internal view returns (bool) {
        uint256 size;
        assembly { size := extcodesize(addr) }  
        return size > 0;
    }
    
    //ERC-165
    bytes4 constant InterfaceSignature_ERC165 = bytes4(keccak256('supportsInterface(bytes4)'));
        
    bytes4 constant InterfaceSignature_ERC721 =
        bytes4(keccak256('balanceOf(address)')) ^
        bytes4(keccak256('ownerOf(uint256)')) ^
        bytes4(keccak256('safeTransferFrom(address,address,uint256,bytes)')) ^
        bytes4(keccak256('safeTransferFrom(address,address,uint256)')) ^
        bytes4(keccak256('transferFrom(address,address,uint256)')) ^
        bytes4(keccak256('approve(address,uint256)')) ^
        bytes4(keccak256('setApprovalForAll(address,bool)')) ^
        bytes4(keccak256('getApproved(uint256)')) ^
        bytes4(keccak256('isApprovedForAll(address,address)'));
        
     function supportsInterface(bytes4 interfaceID) external view returns (bool) {
         bool isERC165 = (interfaceID == InterfaceSignature_ERC165);
         bool isERC721 = (interfaceID == InterfaceSignature_ERC721);
         return (isERC721 || isERC165);
     }
    
    
    //sonstiges
    function balanceOf(address _owner) external view returns (uint256) {
        return ownedTokensCount[_owner];
    }
    
    function ownerOf(uint256 _tokenId) external view returns (address) {
        return tokenOwner[_tokenId];
    }
    
    function allOwnedTokens(address _address) external view returns (uint256[] memory) {
        return ownedTokens[_address];
    }
    
    function getMakingPrice() external view returns(uint256){
        return makingPrice;
    }
    
    //Paarung
    function mateFish(uint256 id1, uint256 kopf1, uint256 schwanz1, uint256 speed1, uint256 id2, uint256 kopf2, uint256 schwanz2, uint256 speed2 ) external payable {
        require(msg.value >= makingPrice); //check if he payed enough
        
        //check if hash saved for ids equals hash(kopf,schwanz,speed)
        bytes32 hash1 = keccak256(abi.encodePacked(kopf1, schwanz1, speed1));
        require(hash1 == tokenPropertyHashes[id1]);
        bytes32 hash2 = keccak256(abi.encodePacked(kopf2, schwanz2, speed2));
        require(hash2 == tokenPropertyHashes[id2]);
        
        uint256 tokenId = _addToken(msg.sender);
        uint256 newSpeed = (speed1 + speed2)/2 + random() - 100;
        bytes32 childHash = keccak256(abi.encodePacked(kopf1, schwanz2, newSpeed));
        tokenPropertyHashes[tokenId] = childHash;
        emit NewbornFish(tokenId, kopf1, schwanz2, newSpeed);
        
    }
    function random() private view returns (uint8) {
        return uint8(uint256(keccak256(abi.encode(block.timestamp)))%201);
    }
    
}

