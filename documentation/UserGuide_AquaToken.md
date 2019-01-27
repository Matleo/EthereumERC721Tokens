# User Guide

Die Application **"Aqua Token"** ist eine verteilte Application die über den Browser aufgrufen werden kann. Sie ermöglicht das Handeln sowie Paaren von Non-Fungible Tokens im Ropsten Test Netzwerk. Sie ist über IPFS erreichbar und die Speicherung der Eigenschaften der Tokens erfolgt auch in IPFS. 
Die Logik unsere Application, wie auch verschiedenste validierungs Mechanismen werden über die Blockchain bzw. den Smart Contract geregelt.
Aufgrund des Alpha Status von IPFS kann es jedoch zu unvorhergesehen Fehlern bei der Übertragung der Daten kommen was auch Fehler in der Application hervorruft. Sollte ein solcher unerwarteter Fehler auftreten, ist die Wahrscheinlichkeit hoch, dass nach einiger Wartezeit und  mehrmaligem neu laden der Seite, der Fehler nicht mehr auftritt.

## Setup
Um auf die Application zugreifen zu können müssen gewisse Programme installiert werden, auf die ich im folgenden eingehen werde.

### Meta Mask:
Meta Mask wird als Wallet benötigt und Meta Mask stellt die Verbindung zum Robsten Test Netzwerk her. 

Im Folgenden ist der Link zur erfolgreichen Einrichtung von Meta Mask:

` ------ ` [Meta Mask einrichten](https://git.uni-konstanz.de/ja431gre/GenTokens/blob/master/documentation/test_Setup.md#metamask) ` ------ `


### IPFS:
#### Installation:
Damit die Application die Eigenschaften des Fisches im IPFS Netzwerk speichern kann, muss eine lokale Node für IPFS gestartet werden. Um dies zu tun wird eine Installation von IPFS vorrausgesetzt.
Auf folgender Webseite kann eine passende Version heruntergeladen werden: 

` ------ ` [IPFS Download](https://dist.ipfs.io/#go-ipfs) ` ------ `

Nach dem die Datei heruntergeladen und die IPFS.exe in der Umgebungsvariable %PATH% gespeichert wurde kann die Konsole geöffnet werden. 
In der Konsole zu einem neu angelegten Ordner navigieren und folgenden Befehl eingeben um eine lokale Node zu inizialiseren:

    ipfs init

Nach dem der Befehl eingegeben wurde sollte die Konsolen Ausgabe etwa so aussehen:
    
    ipfs init
    initializing ipfs node at /Users/jbenet/.go-ipfs
    generating 2048-bit RSA keypair...done
    peer identity: Qmcpo2iLBikrdf1d6QU6vXuNb6P7hwrbNPW9kLAH8eG67z
    to get started, enter:
    
    ipfs cat /ipfs/QmYwAPJzv5CZsnA625s3Xf2nemtYgPpHdWEz79ojWnPbdG/readme
  
Wenn dies erfolgreich funktioniert hat muss noch eine Änderung an der Configurations Datei von IPFS vorgenommen werden, um später über IPFS Dateien beziehen zu können. Dies erfolgt je nach Benutzterkonsole mit leicht unterschiedlichen Befehlen (auf Grunde von Escape Mechanismen).
- Windows Konsole:
` ipfs config --json API.HTTPHeaders.Access-Control-Allow-Origin "[\"*\"]" `
- Windows Powershell:
` ipfs config --json API.HTTPHeaders.Access-Control-Allow-Origin '[\"*\"]'  `
- Mac Konsole:
` ipfs config --json API.HTTPHeaders.Access-Control-Allow-Origin "["*"]" `

Wenn das erfolgreich geklappt hat kann der IPFS Daemon gestartet werden. Dieser ermöglicht die Kommunikation mit anderen Nodes.
Der Befehl um diesen zu starten ist:

    ipfs daemon

Nachdem der Befehl eingegeben wurde sollte eine Konsolen Ausgabe erscheinen. Wenn diese bei "Daemon is ready" angelangt ist, ist der Daemon bereit. 


    Initializing daemon...
    ...
    API server listening on /ip4/127.0.0.1/tcp/5001
    Gateway (readonly) server listening on /ip4/127.0.0.1/tcp/8080
    Daemon is ready

Nun ist die Installation abgeschlossen um mit Aqua Token interagieren zu können. 

Noch ein letzter Check ob sie alles richtig gestartet haben. 
1. Sie sollten Meta Mask im Browser installiert haben und sich auf einem Account der mit dem Ropsten Netzwerk verbunden ist angemeldet sein. Zudem sollten sich auf diesem Account Ether befinden 
um spätere Transaktionen durchführen zu können.
2. Der IPFS Daemon sollte auf einer Konsole im Hintergrund laufen. Die Konsolen Ausgabe sollte mit "Daemon is ready" enden.

#### Aufruf:
Da IPFS erstmal nicht garantiert, dass eine Datei dauerhaft im Netzwerk verfügbar ist und wir keinen Server besitzen, auf dem wir dauerhaft eine Node laufen lassen könnten, haben wir unsere Applikation mithilfe des Pinning Service [eternum.io](eternum.io) auf deren Node pinnen lassen um die Applikation dauerhaft erreichbar zu halten. 
Der Pinning Service kostet ca. $0.01/Monat für unsere ~10MB Applikation. Zusätzlich zum pinnen auf der Server Node, bietet eternum.io ebenfalls ein public gateway an, um auf IPFS Dateien zugreifen zu können.

Wenn die Installation erfolgreich war, sollten sie unter folgender Adresse in ihrem Browser auf unseren Aqua Token Client zugreifen können (ipfs daemon muss im Hintergrund laufen):

[https://ipfs.eternum.io/ipfs/QmYq2FnHiX78PSX3wgyCUnLt2RLTbqBdXZpiDfsio3VRig/html/myAqua.html](https://ipfs.eternum.io/ipfs/QmYq2FnHiX78PSX3wgyCUnLt2RLTbqBdXZpiDfsio3VRig/html/myAqua.html)

Es ist zwar komfortabel das public gateway von eternum.io zu Nutzen, allerdings entsteht hier wieder eine gewisse Zentralität. Da auf deren Node der Hash für unsere Applikation (QmYq2FnHiX78PSX3wgyCUnLt2RLTbqBdXZpiDfsio3VRig) gepinned und damit dauerhaft im Netz verfügbar ist, können sie die Applikation genauso gut lokal starten, indem sie das IPFS Netz über HTTP nach dem Hash fragen.
Unsere Applikation können sie lokal unter folgender URL beziehen:

[http://localhost:8080/ipfs/QmYq2FnHiX78PSX3wgyCUnLt2RLTbqBdXZpiDfsio3VRig/html/myAqua.html](http://localhost:8080/ipfs/QmYq2FnHiX78PSX3wgyCUnLt2RLTbqBdXZpiDfsio3VRig/html/myAqua.html)

Mit diesem Aufruf fragen sie alle ihre Peers im IPFS Netzwerk an, ob jemand den Hash kennt und Ihnen weiterleiten kann. Dieser Prozess kann durchaus eine ganze Weile dauern. Haben sie Geduld beim erstmaligen Aufruf.

## Nutzung
### Funktionen
Nachdem sie Aqua Token Client nun erfolgreich zum ersten mal aufgerufen haben sollten sie ein leeres Aquarium vorfinden, falls dies nicht der Fall ist Seite Neu Laden (STRG + F5) oder 
die Punkte des letzten Checks wiederholen. Unsere Application bietet nun unterschiedlichen Möglichkeiten um mit der Blockchain und
IPFS zu interagieren. Im Folgenden werde ich auf die Haupfunktionen **Erstellen**, **Versenden** und **Paaren** eingehen und zudem noch Tipps geben wie man am besten mit aufkommenden Fehlern der Seite umgehen sollte.

### Erstellen: 
Beim betaetigen des "Erstellen" Buttons wird ein Modal geöffnet das die Ether Kosten für den Fisch zeigt. Wenn dann auf Bestätigen geklickt wird kommt eine Transaktionen die das Erstellen eines Fisches
durchführt. Sobald die Transaktion losgeschickt ist kann es zwischen 1-5 Minuten brauchen bis diese "confirmed" ist. "Confirmed" ist der Status der Transaktion, dieser kann in Meta Mask abgefragt werden. Der Fisch müsste nun im Aquarium erscheinen, 
allerdings sollte auch eine zweite Tranaktion
von Meta Mask angefragt werden. Diese Transaktion wird für das Speichern der Daten in IPFS benötigt. Erst nach dem auch diese Transaktion confirmed wurde ist der Fisch auch wirklich mit seinen Eigenschaften in
IPFS gespeichert. Wenn man die zweite Tranaktion ablehnt und die Seite neulädt, wird der Fisch nicht mehr angezeigt da keine Eigenschaften in IPFS gespeichert wurden.

### Verschicken:
Beim Verschicken eines Tokens muss im Eingabefeld eine valide Adresse eines Accounts im Ropsten Testnetzwerk angegeben werden. Sobald dann der Fisch verschickt wird und die Meta Mask Transaktion bestätigt ist
sowie auch confirmed, sollte der Fisch verschwinden. Ist dies nicht der Fall Seite neuladen. Wenn der Account in Meta Mask, auf den Empfänger Account, geändert wird, sollte der verschickte Fisch dort schwimmen.

### Paaren:
Das Paaren eines Fisches läuft wie folgt ab. Zuerst muss ein Partner für den eigenen Fisch gefunden werden. Dies geschieht, indem sie einen ihrer schwimmenden Fische anklicken und dann auf den "paaren" Button klicken. Nun öffnet sich ein Modal, in welchem sie einen Paarungspartner wählen können.
Wenn nun ein passender Fisch ausgewählt wurde können sie den "paaren" Button im Modal anklicken um die passende Transaktion zu triggern. Auch hier werden wieder 2 Transaktionen ausgelöst. 
Eine für das Paaren an sich, und eine um den IPFS Hash für Eigenschaften des Kindes im Smart Contract zu speichern. Nachem alles fuhnktioniert hat, ist dann der neue Fisch mit den gemischten Eigenschaften im Aquarium zu sehen.

Da die Fischeigenschaften über IPFS gespeichert werden, ist nicht garantiert, dass die Eigenschaften für alle Fische (auch von anderen Nutzern) verfügbar sind. 
Auf der lokalen Node sind erstmal nur die Eigenschaften von den eigenen Fischen gespeichert, daher werden einem nur diese garantiert zur Paarung vorgeschlagen. Um zu garantieren, dass für jeden Anwender alle Fische zum Paaren zur verfügung stehen, könnten die Eigenschaften der Fische auch auf einem Public Gate gepinnen werden(so wie das mit der Applikation selber getan wurde),
dies haben wir allerdings nicht mehr implementiert. 

### Allgemeine Tipps und Tricks:
- Geduldig sein! Die Transaktionen können teilweiße sehr lange brauchen, das ist ganz normal(zwischen 1 und 5 Minuten).
- Erst eine neue Transaktion triggern wenn alle alten confirmed sind, confirmed heißt sie wurden von Meta Mask bestätigt. Man kann den Status einer Tranaktion über Meta Mask beobachten. 
- Wenn etwas nicht mehr Funktioniert oder nicht angezeigt wird, die Seite neu laden ( STRG + F5 ). Dies kann unterschiedliche Gründe haben, oft ist es allerdings so das IPFS die Dateien nicht findet.

#### Schutz vor Manipulation der Tokens:
Da unser Smart Contract eine Funktion besitzt, um den IPFS Hash eines Tokens setzten können, besteht theoretisch die Möglichkeit die Eigenschaften eines Tokens zu manipulieren. Um dies zu verhindern überprüfen wir 
beim Anzeigen und Paaren der Fische ob die von IPFS erhaltenen Eigenschaften manipuliert wurden. Ist dies der Fall, wird der zugehörige Fisch nicht angezeigt und ein Fehler ausgegeben.

Diese Funktionalität können sie folgendermaßen Testen:

1. Die [Remix IDE](https://remix.ethereum.org/) öffnen und den Source Code des [aqua_token_contract](../contracts/aqua_token_contract.sol) kompilieren. (Stellen sie sicher, dass sie die passenden Interfaces und Libraries in Solidity geöffnet haben)
2. Über den "Run" Tab, den Contract "aqua_token_contract" auswählen und den Contract über den Button "At Adress" unter der Adresse "0x5e73d26bf05ade87d8eac5ee9e3f1d29fb2556ed" dem Remix GUI bekannt machen.
3. Den IPFS Eigenschaften Hash eines anderen Tokens suchen: Die "getTokenPropertyURL" Methode ausführen. Die "_tokenId" kann die ID eines beliebigen Tokens sei, von dem sie den Eigenschaften Hash kennen wollen (Beispielsweise 1).
4. Den gefundene IPFS Hash für einen eigenen Fisch setzen: Die "setTokenPropertyURL" Methode ausführen. Die "_url" sollte hierbei der bei Punkt 3 erhaltene Hash sein.  Die "_tokenId" sollte nun die ID eines ihrer Fische sein (Beispielsweise 2). Nun haben sie den Smart Contract so manipuliert, dass ihr Fisch mit der ID 2 die selben Eigenschaften haben sollte wie der Fisch mit ID 1.
5. Beim neu Laden der Applikation werden sie nun allerdings merken, dass der Fisch mit der ID 2 nicht mehr angezeigt wird, da das System erkannt hat, dass hier eine Manipulation vorgenommen wurde.