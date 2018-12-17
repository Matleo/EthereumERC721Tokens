# Ideensammlung zu fachlichen Anwendungsfällen für unsere DApp

## Use Case (Context der Anwendung. Welches Problem löst unsere DApp/Für was wird der Token verwendet.)
- Client stellt ein Fischaquarium dar. 
- ERC721 Tokens repräsentieren die einzelnen Fische. 
- Eigenschaften dieser Fische sind erstmal in einer DB hinterlegt. 
- Die Fische verschiedener Clients sollen miteinander interagieren können (z.b. tauschen oder gegeneinander kämpfen)


## Fachliche Anforderungen
- Deploy/Anbindung eines bestehenden ERC721 über GUI
- Kaufen von Token
- Erstellen von Tokens
- Verändern von Tokens
- Versenden von Tokens
- Approval/Entfernen des Approval für den Versand von Token
- Entfernen von eigenen Tokens
- Auflisten der Tokens nach gewissen Eigenschaften/Suchfunktionalität

## Technische Anforderungen

- Rich Javascript Client (Single Page Applikation) zur Interaktion mit Blockchain und Datenspeicher
- Kein funktionelles Backend (Backend kapselt nur Datenbankverbindung). Wird später vollständig durch IPFS ersetzt (Client und Backend)
- Ein Smart Contracts zur Besitzverwaltung der Tokens
- Libraries / Framework Ideen:
    - JQUERY für Animationen
    - React oder Angular oder Vue für Single Page Applikation
    - Web3.js(+ Metamask) zur Kommunikation mit dem Smart Contract