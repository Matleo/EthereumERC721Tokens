## Einleitung
Dieses Teilprojekt, welches im nächsten Absatz beschrieben ist, **wurde wegen verschiedenen Gründen eingestellt**. Da im laufe der Entwicklung festegestellt worde, dass die Entwicklung auch recht einfach ohne Truffel framework möglich ist, welches hier zum Einsatz kam. Truffel hat eine große Menge an Dependencies und weiterer Nachteile.

Es wird versucht eine dezentrale Webapplikation aufzubauen, welche mit dem Framework Truffle und einer Blockchain interagiert. Das Ziel ist es in der Blockchain Daten zu speichern, die dann auf eine externe Quelle verweisen. Somit kann ein Teil der Daten in der Blockchain gespeichert werden und die Ressourcen intensiven Erweiterungen extern. Hierzu gibt es zwei Ansätze, zum einen das Speichern einer Quelle zu einer Datenbank oder die Daten in IPFS zu hinterlegen und den erhaltenen Hash zu speichern.

Exkurs: IPFS ist eine dezentrale DB, hierbei wird beim Speichern von Dateien ein Hash erzeugt. Der Zugriff erfolgt über den Hash. Im Gegensatz zum normalen DB-Ansatz wird nicht gespeichert wo die Daten liegen, sondern es wird per Hash angegeben welche Datei man möchte. IPFS entscheidet dann wo diese Datei herkommt bzw. tatsächlich gespeichert ist (Content-addressed vs. location-addressed).

## Aufbau des Systemumgebung

1. Firefox / Chrome mit MetaMask Erweiterung (inkl. Account)
2. Git-Projekt clonen [Projekt](./) --> gelöscht da das Teilprojekt verworfen wurde!
3. Bei Windows: NPM: node-gyp dependencies müssen installiert sein.
    - (`$ npm install --global --production windows-build-tools`, `$ npm install --global node-gyp`) 
4. Truffle: 
    `$ npm install -g truffle` Verwendete Version node v.10.13.0, npm v.6.4.1, Truffle v4.1.14, Solidity v0.4.24
 - (4.1 um Solidity v0.5.0 zu verwenden `$npm install -g truffle@beta` und um dependencies zu laden `$npm install` ausführen.)

5. Bockchain Lokal oder Extern

---

**Lokal mit Ganache**

6. Ganache öffnen (Verwendete Version 1.2.2) https://truffleframework.com/ganache
7. Open Terminal, wechsel zum Projekt Ordner
    - In Metamask anmelden und ggf. Account von Ganache importieren
    - `$ truffle migrate --reset` (Falls der Ethereum Client nicht gefunden werden kann, in der Datei "Truffle.js" beim Netzwerk "development" den Port auf den Selben wie in Ganache aendern.)
 
**Extern mit Ropsten**

6. In Projektordner die *Truffel.js* Datei öffnen und die auskommentierte Abschnitte einkommentieren
7. Um mit der Ropsten-Blockchain zu kommunizieren, folgenden Befahl ausführen: `$ npm install truffle-hdwallet-provider --save`
    Ropsten mit Infura: https://infura.io/ (Infura stellt eine Schnittstelle zwischen der Blockchain und dem WebServer, hierzu wird ein Infura Account benötigt und die Zugangsdaten von MetaMask)
8. Die Datei **truffle.js** im Projektordner anpassen. Hierzu wird der API Key von Infura, mnemonic hinzugefügt und module.exports um den Eintrag Ropsten erweitert.
[Netzwerkeinstellung](#netzwerkeinstellungen-f%C3%BCr-truffle)
    - In Metamask anmelden und ggf. Account von Ganache importieren
    - Terminal öffnen und zum Projekt Ordner navigieren und  `$ truffle migrate --network ropsten` ausführen

---
8. Server starten `$ npm run dev`, run the Front End Application. Dann müsste sich der Browser öffnen und die Webseite sollte angezeigt werden, ggf. den Browser öffnen der auch Meta Mask als Plugin besitzt.


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
- Zu erst wird ein struct für den Token erstellt mit `id`, `path` und `description`.
- Ein Mapping von unit auf Token, eine Variable für den Token Count und ein Event für das hinzufügen eines Tokens wird erstellt.
- Es folgt ein gekennzeichneter Konstruktor mit 2 Initial Tokens.
- Der Funktion  `addPath` wird `_path` und `_description` übergeben. Die Funktion fügt dann dem mapping tokens einen Token mit den jeweiligen Parametern hinzu.

Im Contract werden zu jedem Eintrag eine fortlaufende ID, der Speicherort und eine Beschreibung hinterlegt.

## Netzwerkeinstellungen für Truffle
Wenn verschiedene Blockchains angesprochen werden sollen, kann das realisiert werden indem die truffle.js im Projektordner angepasst wird. Im folgenden haben wir die Blockchain von Ropsten hinzugefügt.

!!!Anmekung nach Abruch des Teilprojekts:
Um den Code local zu testen mit relativ wenigen dependencies, einfach in der Truffel.js (der folgende Codeabschnitt) Datei die ersten drei Variablen und den ropsten Eintrag unter "networks:" entfernen.

```
var HDWalletProvider = require("truffle-hdwallet-provider");
var infura_apikey = "XXXXXX";
var mnemonic = "twelve words you can find 
           in metamask/settings/reveal seed words";

module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    },
    ropsten: {
      provider: new HDWalletProvider(mnemonic, 
           "https://ropsten.infura.io/"+infura_apikey),
      network_id: 3
    }
  }
};
```
- `var HDWalletProvider = require("truffle-hdwallet-provider");` Überprüft ob sich die Datei im Projekt Ordner befindet.
- `var infura_apikey = "XXXXXX";`Infura Key der nach dem Anmelden angezeigt wird.
- `var mnemonic = "twelve words you can find in metamask/settings/reveal seed words";` 12 Wörter für die Identifikation des Meta Mask Accounts.
- Netzwerk `development` ist mit dem Port der lokalen Blockchain verbunden.
- Netzwerk `ropsten` wird über den hdwalletprovider aufgerufen, dem der Infura Key und die Meta Mask identifikation übergeben werden.

Technologiestacks beim deployen des Contracts:

![Grafik](documentation/Bilder/Technologiestack_Webapp_Blockchain.png) 

---

## Ergebnis:
Der Contract ist unter **0x0f0a02804486D4dE34C27dfc032Aed5D0eea69E5** zu finden.
Aktuell werden die Daten manuell über das Webinterface hinterlegt, der nächste denkbare Schritt ist, das Daten über das Web interface hochgeladen werden können und der zugehörige Eintrag automatisch erfolgt.