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
Als wir uns über Ethereum und den ERC-20 informierten sind wir auf dieses Browser Plugin gestoßen das es ermöglicht ein Wallet, mit den wichtigsten Grundprinzipien, einfach zu erstellen. Im folgenden wir beschrieben wie wir darauf gestoßen sind und was unsere ersten Erfahrungen mit diesem Plugin waren.

## Ersten Schritte
Wir sind auf dieses Plugin gestoßen als wir uns ein Codebeispiele für den ERC20 angeschaut haben ([Webseite](https://steemit.com/ethereum/@maxnachamkin/how-to-create-your-own-ethereum-token-in-an-hour-erc20-verified)). Dieses Wallet wurde auf dieser Seite wärmstens empfohlen um einfach Tokens zu erstellen und diese dann mithilfe von Ether zu verkaufen oder kaufen.
Als Erstes muss das Plugin für den Browser herunterladen werden, wir haben in diesem Fall den Chrome Browser benutzt. Meta Mask unterstützt allerdings auch Firefox und Opera. 
Sobald dann die Erweiterung erfolgreich dem Browser hinzugefügt wurde meldet man sich in Meta Mask an. Um sich anzumelden muss aber nur ein Passwort für seinen Account angegeben werden. Anschließend bekommt man 12 Wörter vorgelegt, diese sollte man sich sicher notieren, da es nur darüber möglich ist auf den Account zuzugreifen.

## Account einrichten
Sobald die Anmeldung erfolgreich abgeschlossen wurde kann im Browser bei den Plugins auf den Fuchs geklickt werden um Meta Mask zu öffnen. Nun kann der Account betrachtet werden. Auf der linken Seite oben steht nun das Netzwerk auf dem der Account sich befindet und weiter darunter stehen die Ether die dieser Account besitzt.
Zuerst sollte dann das Netzwerk auf das jeweilige Testnetzwerk geändert werden auf das der Account später zugreifen soll, wir haben uns in diesem Fall für das Ropsten Test Netzwerk entschieden. Dieses Test Netzwerk ist dafür gedacht Smart Contracts zu testen, ohne dass diese direkt auf die Haupt-Blockchain des Ethereum Netzwerk schreiben. Diese werden dann auf eine Blockchain innerhalb des Test Netzwerkes geschrieben.
Um allerdings Transaktionen durchzuführen braucht der Account Ether um die Miner zu bezahlen. Um an Ether zu kommen gibt es verschiedene Wege. Es gibt die Möglichkeit  kostenlos Ethereum auf seinen Account zu laden in dem die Adresse des Accounts abgegeben wird. 
Zwei Webseiten die wir benutzt haben wären: 

- [Ropsten Ethereum Faucet](https://faucet.ropsten.be/) 
- [MetaMask EtherFaucet](https://faucet.metamask.io/)

## Eigene Tokens hinzufügen
Um eigene Tokens hinzuzufügen auf _"Add Token"_ klicken, dann die Token Contract Adresse eintragen die beim erstellen der Tokens in Remix mitgeteilt wurde. Die restlichen Felder werden dann automatisch ausgefüllt. Nun auf _"Add"_ klicken und nun sind die Tokens und dem Reiter _"Tokens"_ sichtbar.
Wenn nun auf den erstellten Token geklickt wird, öffnet sich eine Webseite namens _"Ropsten Etherscan"_ auf der der Holder des Contracts, die Contract Adresse und die jeweiligen Transaktionen zu sehen sind .


Nun kann der Spaß beginnen und man kann sich seine Tokens untereinander zwischen seinen Accounts verschicken oder kaufen je nachdem welche Funktionen der Contract implementiert.  :)

# Testnet local: Ganache 
Ganache ermöglicht es eine Blockchain lokal zu generieren ohne weitere Konfiguration oder Tools. Vorteil von lokalen Test ist die Kontrolle über die Blockchain und die einfachere Nachverfolgung von Transaktionen, da kein Overhead externer Transaktionen besteht.

# Testnet remote: Ropsten
Um Contracts möglichst nah an einer 'echten' Ehtereum Blockchain zu testen gibt es die Möglichkeit COntracts über das Testnet Ropsten zu deployen. Dies ist eine echte Blockchain, jedoch mit leichterer Blockgenerierung und fast wertfreiem Ehter. Dieser Ether kann über Facets konstenlos angefragt werden https://ethereum-faucet.org/. Mit diesem Ether können Transationen um Ropsten-Testnet feneriert werden.

