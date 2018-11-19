# Relevanz von Interfaces

Dieses Dokument beschäftigt sich mit der Implementierung von Interfaces im Ethereum Umfeld, insbesondere der Programmiersprache Solidity.
Dabei wird die Bedeutung und die Verwendungsbereiche von Solidity-Interfaces betrachtet.

## EIP's und ERC's

Die von uns betrachteten Interfaces beziehen sich auf die als ERC definierten Interfaces bzw. APIs von Smart Contracts.
Insbesondere der Interfaces zur Token definition wie z.b. ERC20/712.

EIP's (Ethereum Improvement Proposals) dienen zur Verbesserung der Ethereum Platform und können von Entwicklern eingebracht werden.
Hierbei werden Standards für das Protokoll, die API sowie für Smart Contracts definiert. Diese EIP's werden in verschiedenen Kategorien eingeteilt,
dazu gehört unter anderem auch die Kategorie der ERC's (Ethereum Request for Comments). Unter diser Kategorie werden EIP's zusammengefasst,
welche sich auf Standards bezüglich der Applikationsebene beziehen. 
Beispielsweise gehören hierzu Tokenstandards, URI Schemas und Formate für Bibliotheken/Pakete/Walltes.
Hierbei handelt es sich also um Vorschläge zur Implementierung, diese können sich in Zukunft jedoch noch ändern.
Desweiteren werden EIP's zusätzlich noch nach Status sortiert (Draft, Accepted, Final, Deferred).

EIP: https://eips.ethereum.org
ERC: https://eips.ethereum.org/erc


## Fragestellungen

1. Fragestellung: Welche Rolle spielen Interfaces beim Design von Smart Contracts/DApps?
    
    Interfaces erhalten im Ethereum Umfeld aufgrund der verteilten Struktur und der unveränderlichkeit von deployten Smart Contracts eine wichtige Rolle.
    Sie ermöglichen die Definition von einheitlichen Schnittstellen für grundlegende Konzepte wie Token Contracts und zur Einbindung von Clients wie Wallets.
    
    ### Interfaces zur Erweiterbarkeit
    Interfaces ermöglichen es Contracts auch nach dem Deployment zu erweitern. Dazu wird ein Interface Contract als Einstiegspunkt für andere Contracts
    bekannt gemacht. Dieser Interface Contract enthält dann eine Referenz auf die Adresse der derzeitigen Implementierung.
    So kann eine neue Version eines Contracts deployt werden und es muss lediglich die Referenz auf die Adresse aktualisiert werden, ohne abhängige Contracts erneut deplyen zu müssen.

    ### Interfaces zur Einbindung von Clients
    Um Ethereum Clients wie z.B. Wallets es zu ermöglichen beliebige Smart Contracts für grundlegende Abläufe wie das Transferieren von Tokens einzubinden, 
    benötigt man Standards an eine API. Interfaces wie der ERC20 ermöglichen so die Kommunikation unabhängiger Contracts und Clients.
    

2. Fragestellung: Warum werden ERC Interfaces nur als einfaches Textdokument veröffentlicht?
    
    In der Regel werden Interface Standards über eine detailierte Spezifikation beschrieben und mit einer Referenzimplementierung veröffentlicht.
    Das Publishing der implementierten Interfaces erfolgt dann wie Beispielsweise in der Programmiersprache C über eine seperate Headerdatei, welche von anderen eingebunden werden kann.
    
    Derzeit werden Interface Standards in Ethereum als einfaches Textdokument veröffentlicht, ohne Referenzimplementierung und zur Verwendung empfohlen. Die definition eines Interface
    im Code bleibt jedoch weiterhin dem Entwickler überlassen, so implementiert jeder Smart Contract seine eigene Version eines Interface.
    Es ist auch nicht ohne weiteres möglich die implementierten Interfaces bekannt zu machen. Beim Aufruf eines anderen Smart Contract ist daher,
    ohne vorherige Prüfung nicht klar ob dieser ein gewünschtes Interface wie vermutet implementiert. 
    Damit ein Contract einen anderen ansprechen kann benötigt er jedoch zur Compilezeit dessen Schnittstellen definition. Das heißt
    das Interface muss zuvor im Contract Code bekannt gemacht werden. Da es derzeit keine Möglichkeit gibt die API eines bereits deployten Contracts
    über die Blockchain zu beziehen, verbleibt nur das testen und überprüfen der veröffentlichten Dokumentation. Das verteilen einer Solidity Library
    mit den einzubindenden Interfaces ist zwar technisch möglich, jedoch unüblich.

    Diese Umgang mit Interfaces beitet jedoch auch einen gewissen Vorteile, die Unabhängigkeit von der technischer Umsetzung.
    Aufgrund der verteilten Struktur der Smart Contracts müssen diese nicht notwendigerweise in Solidity geschrieben werden. Eine einheitliche API ist
    hier also nicht gegeben. Die ABI ergbit sich dann auch aus der textuellen Beschreibung des entsprechenden ERC. So behält der Entwickler
    die Freiheit wie er einen Contract ansprechen möchte.

    Nachteil dieser Implementierung fremder Interfaces sind:
    - Wenn ein bereits deployter Contract angesprochen werden möchte muss dessen Interface erneut im eigenen Code definiert werden. Hier kann es zu Fehlern kommen
    - Erfüllt ein entfernter Contract nicht die vermutete Schnittstelle kommt es zu Fehlern während der Ausführung. Diese müssen über vorherige Test abgefangen werden
    
3. Wie können die Interfaces eines Smart Contract nach außenhin bekannt gemacht werden?
    
    Wie in Fragestellung 2 bereits angesprochen sind Interfaces eines Smart Contract nach außen nicht bekannt

    ### Interface Publishing über ERC165
    
    #### Was ist ERC165
    