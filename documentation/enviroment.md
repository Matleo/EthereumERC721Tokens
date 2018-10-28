# Einrichtung Testumgebnung

Zur Entwicklung der Ethereum Contracts haben wir uns dafür entschieden folgende Tool zu verwenden.
Ein einfaches Aufsetzten der Umgebung mit möglichst wenig Installationsaufwand steht hierbei im Vordergrund.

# IDE: Remix
Als Entwicklungsumgebung verwenden wir die Remix IDE, da diese nur geringe Konfiguration und einfache Integration von Web3.js Clients ermöglicht. Remix ist über einen Webbrowser unter folgender URL zu erreichen https://remix.ethereum.org/#optimize=false.

# Kompilieren und Deployen
Um eingen Contract zu testen, kann dieser über den Reiter 'Compile' kompiliert werden und steht uns dann über den Reiter 'Run' zum deployment zur verfügung. Unter dem Reiter 'Run' können wir nun alle unsere kompilierten Contracts über einen Web3.js Client deployen.
Für einfachte Test genügt hierbei die JavaScript VM 'Environment' welche direkt im Browser läuft, jedoch auch eingeschränkter ist als eine der anderen Optionen. Zum Einrichten eines Web3 Provider siehe section Metamask. Unter 'Account' wird der Hashcode des Accounts der die Transaktionen zum deployen und interagiren mit den Contracts eingetragen. 'Gas' und 'Value' werden wenn benötigt geändert, hierbei gibt Value die Menge an Ether an die bei der nächsten Transaktion mitgeschickt werden soll. Vor dem Deploy muss noch der zu deployende Contract ausgewählt werden. Achtung: Im Dropdown-Menü werden alle Komilierten Contracts aufgelistet, also auch 'Base/Interface-Contracts. Über den Button Deploy kann dann der ausgewählte Contract in die Konfigurierte Blockchain deployed werden. Möchte man einen bereits deployten Contract für Test innerhalb der Remix IDE einbinden kann die Adresse unter der Contract erreichbar ist unter 'At Address' hinzugefügt werden. Bei dieser Methode wird jedoch weiterhin ein kompiliertes Interface des Contracts benötigt. Nach dem Einbinden/Deployen eines Contracts ist dessen Schnittstelle unter 'Deployed Contracts' verfügbar. Hier können nun Calls und Transaktionen gestartet werden um mit dem Contract zu interagieren. Transaktionen werden über die Konfigurierte Environment und Account ausgeführt, herzu gehört auch das deployment.

# Metamask
Um Contracts auch auserhalb des Browser VM zu testen benötigen wir einen Web3.js Client, der uns ein Wallet zu verwaltung der Accounts und dem senden von Transaktionen ermöglicht. Metamask bietet hier eine einfache Integration in die Webbrowser Firefox und Chrome und stellt somit eine gute Ergänzung zur Remix IDE dar. Desweiteren ermöglicht Metamask das Aufrufen von DApps im Webbrowser. 

# Testnet local: Ganache 
Ganache ermöglicht es eine Blockchain lokal zu generieren ohne weitere Konfiguration oder Tools. Vorteil von lokalen Test ist die Kontrolle über die Blockchain und die einfachere Nachverfolgung von Transaktionen, da kein Overhead externer Transaktionen besteht.

# Testnet remote: Ropsten
Um Contracts möglichst nah an einer 'echten' Ehtereum Blockchain zu testen gibt es die Möglichkeit COntracts über das Testnet Ropsten zu deployen. Dies ist eine echte Blockchain, jedoch mit leichterer Blockgenerierung und fast wertfreiem Ehter. Dieser Ether kann über Facets konstenlos angefragt werden https://ethereum-faucet.org/. Mit diesem Ether können Transationen um Ropsten-Testnet feneriert werden.

