pragma solidity 0.4.24;

contract DataPath {
    
    struct Token {
        uint id;
        string path;
        string description;
    }

    // Fetch Token
    mapping(uint => Token) public tokens;
    // Store Token Count
    uint public tokenCount;

    //addEvent
    event addEvent();

    // Konstruktor mit InitialToken
    constructor() public {
        addInitialToken("Speicherort 1", "description teil 1");
        addInitialToken("Speicherort 2", "ne laus im haus");
    }

    function addInitialToken (string _name, string _beschreibung) private {
        tokenCount ++;
        tokens[tokenCount] = Token(tokenCount, _name, _beschreibung);
    }

    function addPath (string _path, string _description) public {
        tokenCount ++;
        tokens[tokenCount] = Token(tokenCount, _path, _description);
        //addEvent() wird benötigt, um neuladen der Seite auszulösen
        addEvent();
    }

}
