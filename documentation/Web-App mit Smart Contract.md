## Einleitung
Es wird versucht eine WebApplikation aufzubauen, welche mit dem Framework Truffle und einer Blockchain interagiert. Das Ziel ist es, in der Blockchain Daten zu speichern die dann auf ein Externe Quelle verweisen. Somit kann ein Teil der Daten in der Blockchain gespeichert werden und die Ressourcen intensive Erweiterungen Extern. Hierzu gibt es zwei Ansätze, zum einen das speichern einer Quelle zu einer Datenbank oder die Daten in IPFS zu hinterlegen und den erhaltenen Hash zu speichern.

Exkurs: IPFS ist eine dezentrale DB, hierbei wird beim Speichern von Dateien ein Hash erzeugt. Der Zugriff erfolgt über den Hash. Im Gegensatz zum normalen DB Ansatz wird nicht gespeichert wo die Daten liegen, sondern es wird per Hash angegeben welche Datei man möchte. IPFS entscheidet dann wo diese herkommt bzw. tatsächlich gespeichert ist (Content-addressed vs. location-addressed).

## Aufbau des Systemumgebung
**Voraussetzungen:**
1. Firefox / Chrome mit MetaMask Erweiterung (inkl. Account)
2. NPM: https://nodejs.org/npm 
3. Truffle: https://github.com/trufflesuite/truffle
4. **TODO -siehe ....**

5 . Bockchain 
 - Lokal: Ganache: https://truffleframework.com/ganache
 - Extern: Ropsten mit Infura: https://infura.io/
 (Infura stellt eine Schnittstelle zwischen der Blockchain und dem WebServer, hierzu wird ein Infura Account benötigt und die Zugangsdaten von MetaMask)

## ...

## Smart Contract
Der Smart Contract stellt einfache Funktionen bereit um einen Token mit einem bestimmten Pfad und einer bestimmten Beschreibung zu erstellen und diese auf der Blockchain zu speichern.

Code:

```
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
```
- Zu erst wird ein struct für den Token erstellt mit einer id, dem Pfad und der Beschreibung.
- Es erfolgt ein Mapping von unit auf Token, eine Variable für den Token Count und ein Event für das hinzufügen eines Tokens wird erstellt.
- Es folgt ein gekennzeichneter Konstruktor mit 2 Initial Tokens.
- Der Funktion "addPath" wird ein path und eine Beschreibung übergeben. Die Funktion fügt dann dem mapping tokens einen Token mit den jeweiligen Parametern hinzu.

Im Contract werden zu jedem Eintrag eine fortlaufende ID, der Speicherort und eine Beschreibung hinterlegt.

---

## Ergebnis:
Der Contract ist unter 0x0f0a02804486D4dE34C27dfc032Aed5D0eea69E5 zu finden.
Aktuell werden die Daten manuell über das Webinterface hinterlegt, der nächste denkbare Schritt ist, das Daten über das Web interface hochgeladen werden können und der zugehörige Eintrag automatisch erfolgt.