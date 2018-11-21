## Einleitung
Im folgendem wird eine Möglichkeit behandelt wie per Web-Anwendung mit Smart Contracts interagiert werden kann. Sowohl das Verändern des Smart Contracts Zustandes als auch das Abrufen von Werten im Smart Contract wird über eine Web-Anwendung ermöglicht.
Dies dient als Vorbereitung für das Speichern der Daten ausserhalb der Blockchain. 

## Vorraussetzungen 
Vorraussetzungen sind NPM, Truffle, Ganache und MetaMask.

**Step 1**

Git clone project.

**Step 2**

In der Console auf den Projektordner wechseln.
`npm install` um dependencies zu installieren.

**Step 3** 

Start Ganache.

**Step 4**

Compile und deployen von Smart Contract mithilfe von truffle.
`truffle migrate --reset`

**Step 5**

MetaMask konfigurieren, dh. mit der lokalen Blockchain verbinden und die Accounts anmelden.

**Step 6**

Front End Application starten indem man den Server startet.
`npm run dev` 


----
## Einleitung
Es wird versucht einen WebApplikation aufzubauen, welcher mit Framework Truffle mit der Blockchain interagiert. Das Ziel ist es, in der Blockchain Daten zu speichern die auf ein Externe Quelle verweist. Somit kann ein Teil der Daten in der Blockchain gespeichert werde und Ressourcen intensive Erweiterungen Extern. Hierzu gibt es zwei Ansätze, zum einen das speichern einer Quelle zu einer Datenbank und der nächste Ansatz ist es die Daten in IPFS zu speichern und den erhaltenen Hash zu speichern.

Exkurs: IPFS ist eine dezentrale DB, hierbei wird beim speichern von Dateien ein Hash erzeugt. Der Zugriff erfolgt über den Hash. Im gegensatz zum normalen DB Ansatz wird nicht gespeichert wo die Daten liegen, sondern es wird per Hash angegeben welche Datei man möchte, egal wo diese herkommt bzw. tatsächlich gespeichert ist.

## Aufbau des Systemumgebung
**Voraussetzungen:**
1. FireFox / Chrom mit MetaMask Erweiterung (inkl. Account)
2. NPM: https://nodejs.orgnpm 
3. Truffle: https://github.com/trufflesuite/truffle
4. **TODO -siehe ....**

5 . Bockchain 
 - Lokal: Ganache
 - Extern: Ropsten mit Infura
 (Infura stellt eine Schnittstelle zwischen der Blockchain und dem WebServer, hierzu wird ein Infura Account benötigt und die Zugangsdaten von MetaMask)

## ...

## Contract
Der Contract stellt folgende Funktionen und Calls bereit:
....
Im Contract werden zu jedem Eintrag eine fortlaufende ID, der Speicherort und eine Beschreibung hinterlegt.

---

## Ergebnis:
Der Contract ist unter 0x0f0a02804486D4dE34C27dfc032Aed5D0eea69E5 zu finden.
Aktuell werden die Daten manuell über das Webinterface hinterlegt, der nächste denkbare Schritt ist, das Daten über das Web interface hochgeladen werden können und der zugehörige Eintrag automatisch erfolgt.



