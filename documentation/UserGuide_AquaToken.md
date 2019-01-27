# User Guide

Die Application **"Aqua Token"** ist eine verteilte Application die über den Browser aufgrufen werden kann. Sie ermöglicht das Handeln sowie Paaren von Non-Fungible Tokens im Ropsten Test Netzwerk. Sie ist über IPFS erreichbar und die Speicherung der Eigenschaften der Tokens erfolgt auch in IPFS. 
Die Logik unsere Application, wie auch verschiedenste validierungs Mechanismen werden über die Blockchain bzw. den Smart Contract geregelt.
Aufgrund des Alpha Status von IPFS kann es jedoch zu unvorhergesehen Fehlern bei der Übertragung der Daten kommen was auch Fehler in der Application hervorruft.

## Installations Guide
Um auf die Application zugreifen zu können müssen gewisse Programme installiert werden, auf die ich im folgenden eingehen werde.

### Meta Mask:
Meta Mask wird als Wallet benötigt und Meta Mask stellt die Verbindung zum Robsten Test Netzwerk her. 

Im Folgenden ist der Link zur erfolgreichen Einrichtung von Meta Mask:

` ------ ` [Meta Mask einrichten](https://git.uni-konstanz.de/ja431gre/GenTokens/blob/master/documentation/test_Setup.md#metamask) ` ------ `


### IPFS:
Damit die Application die Eigenschaften des Fisches im IPFS Netzwerk speichern kann, muss eine lokale Node für IPFS gestartet werden. Um dies zu tun wird eine Installation von IPFS vorrausgesetzt.
Auf folgender Webseite kann eine passende Version heruntergeladen werden: 

` ------ ` [IPFS Download](https://dist.ipfs.io/#go-ipfs) ` ------ `

Nach dem die Datei heruntergeladen und die IPFS.exe als %PATH% gespeichert wurde kann die Konsole geöffnet werden. 
In der Konsole zu einen passenden Ordner navigieren und folgenden Befehl eingeben um eine lokale Node zu inizialiseren:

`------  $ ipfs init ------ `

Nach dem der Befehl eingegeben wurde sollte die Konsolen Ausgabe etwa so aussehen:


```

 ipfs init
initializing ipfs node at /Users/jbenet/.go-ipfs
generating 2048-bit RSA keypair...done
peer identity: Qmcpo2iLBikrdf1d6QU6vXuNb6P7hwrbNPW9kLAH8eG67z
to get started, enter:

  ipfs cat /ipfs/QmYwAPJzv5CZsnA625s3Xf2nemtYgPpHdWEz79ojWnPbdG/readme

```
  
Wenn dies erfolgreich funktioniert hat muss noch eine Änderung an der Configurations Datei von IPFS vorgenommen werden. Dies erfolgt je nach Benutzter Konsole mit leicht unterschiedlichen Befehlen.
- Windows Konsole:
` ------ $ ipfs config --json API.HTTPHeaders.Access-Control-Allow-Origin "[\"*\"]" ------- `
- Windows Powershell:
` ------ $ ipfs config --json API.HTTPHeaders.Access-Control-Allow-Origin '[\"*\"]' ------- `
- Mac Konsole:
` ------ $ ipfs config --json API.HTTPHeaders.Access-Control-Allow-Origin "["*"]" ------ `

Wenn das erfolgreich geklappt hat kann der IPFS Daemon gestartet werden. Dieser ermöglicht die Kommunikation mit anderen Nodes.
Der Befehl um diesen zu starten ist:

` ------ $ ipfs daemon ------ `

Nachdem der Befehl eingegeben wurde sollte eine Konsolen Ausgabe erscheinen. Wenn diese bei "Daemon is ready" angelangt ist, ist der Daemon bereit. 

```

Initializing daemon...
...
API server listening on /ip4/127.0.0.1/tcp/5001
Gateway (readonly) server listening on /ip4/127.0.0.1/tcp/8080
Daemon is ready

```

Somit sind alle Installationen gemacht um mit Aqua Token interagieren zu können. Wir haben unsere Application mithilfe eines Pinning Service pinnen lassen um diese dauerhaft erreichbar zu halten. 
Der Pinning Service kostet ca. $0.01/Monat. 

Noch ein letzter Check ob sie alles richtig gestartet haben. 
1. Sie sollten Meta Mask im Browser installiert haben und sich auf einem Account der mit dem Ropsten Netzwerk verbunden ist angemeldet sein. Zudem sollten sich auf diesem Account Ether befinden 
um spätere Transaktionen durchführen zu können.
2. Der IPFS Daemon sollte auf einer Konsole im Hintergrund laufen. Die Konsolen Ausgabe sollte mit "Daemon is ready" enden.

Wenn diese beiden Schritte erfüllt sind sollten sie unter folgender Adresse in ihrem Browser auf Aqua Token Client zugreifen können:

` ------ https://ipfs.eternum.io/ipfs/QmYq2FnHiX78PSX3wgyCUnLt2RLTbqBdXZpiDfsio3VRig/html/myAqua.html ------ `

---

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
Das Paaren eines Fisches läuft wie folgt ab. Zuerst wird ein Partner für seinen eigenen Fisch gefunden. Ohne IPFS wurden einem alle Fische des Contracts vorgeschlagen. Da aber durch IPFS nur auf die 
Eigenschaften von Fischen auf seiner lokalen Node zugegriffen wird, werden einem nur die eigenen Fische vorgeschlagen. Um das zu umgehen könnten die Eigenschaften der Fische auf einem Public Gate gepinnen werden,
das ist jedoch ausserhalb unserers Scopes. Wenn nun ein passender Fisch gefunden wurde sollte der Paaren Button geklickt werden um die passende Transaktion zu triggern. Auch hier sind es wieder 2 Tranaktionen die bestätigt werden sollen. 
Eine für das Paaren und eine, um die neuen Eigenschaften zu speichern. Nachem alles fuhnktioniert hat, ist dann der neue Fisch mit den gemischten Eigenschaften im Aquarium zu sehen.

### Allgemeine Tipps und Tricks:
- Geduldig sein! Die Transaktionen können teilweiße sehr lange brauchen, das ist ganz normal(zwischen 1 und 5 Minuten).
- Erst eine neue Transaktion triggern wenn alle alten confirmed sind, confirmed heißt sie wurden von Meta Mask bestätigt. Man kann den Status einer Tranaktion über Meta Mask beobachten. 
- Wenn etwas nicht mehr Funktioniert oder nicht angezeigt wird, die Seite neu laden ( STRG + F5 ). Dies kann unterschiedliche Gründe haben, oft ist es allerdings so das IPFS die Dateien nicht findet.

#### Hinzugefügte Fehlerbehandlung:
Da wir nun über eine Funktion im Smart Contract den Hash eines Tokens setzten können, besteht Theoretisch die Möglichkeit die Eigenschaften eines Tokens zu manipulieren. Um das zu verhindern überprüfen wir 
beim Erstellen des Tokens ob die ID auch zu dem Hash passt. Passt das nicht überein wird der Token nicht angezeigt und ein Fehler ausgegeben. 




