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

## Erste Schritte
Wir sind auf das Plugin gestoßen als wir uns ein Codebeispiele für den ERC20 angesehen haben ([Webseite](https://steemit.com/ethereum/@maxnachamkin/how-to-create-your-own-ethereum-token-in-an-hour-erc20-verified)). 
Meta Mask wurde auf dieser Seite empfohlen um einfach Tokens zu erstellen und diese dann mithilfe von Ether zu kaufen bzw. zu verkaufen.
Als erstes muss das Plugin für den Browser herunterladen werden, wir haben in diesem Fall den Chrome Browser benutzt. MetaMask unterstützt allerdings auch Firefox und Opera. 
Sobald dann die Erweiterung erfolgreich dem Browser hinzugefügt wurde muss sich in Meta Mask angelemdet werden. Um sich anzumelden muss zuvor noch ein Passwort für den Account angegeben werden. Anschließend werden einem 12 Wörter als Secret vorgelegt, diese sollten sicher notieren werden, da es nur darüber möglich ist den Account zu importieren.

## Account einrichten
Sobald die Anmeldung erfolgreich abgeschlossen wurde, kann im Browser im Plugin Bereich auf das "Fuchs" Symbol geklickt werden um MetaMask zu öffnen. Der Account kann nun betrachtet werden. Auf der linken Seite oben steht das Netzwerk auf dem der Account sich befindet und weiter darunter stehen die Ether die dieser Account besitzt.
Zuerst sollte dann das Netzwerk auf das jeweilige Testnetzwerk geändert werden, auf welches der Account später zugreifen soll. Wir haben uns in diesem Fall für das Ropsten Testnetzwerk entschieden. Dieses Testnetzwerk ist dafür gedacht Smart Contracts zu testen, ohne dass diese direkt auf die Haupt-Blockchain des Ethereum Netzwerks geschrieben werden.
Um allerdings Transaktionen durchzuführen braucht der Account Ether um die Miner zu bezahlen. Es gibt verschiedene Wege Ether zu erhalten. 
Da wir uns allerdings auf einer Test-Blockchain, befinden gibt es Möglchkeiten kostenlos Test-Ether auf seinen Account zu laden. 
Zwei Webseiten die wir benutzt haben sind: 

- [Ropsten Ethereum Faucet](https://faucet.ropsten.be/) 
- [MetaMask EtherFaucet](https://faucet.metamask.io/)

Der angefragte Ether ist jedoch nur für das entsprechende Testnetzwerk verfügbar!
Nachdem der Account mit Ether ausgestattet und mit dem gewünschten Netzwerk verbunden ist, kann dieser in der Remix IDE verwendet werden.
Hierzu wird in Remix im Reiter 'Run' unter Environment 'Inject Web3' ausgewählt. MetaMask wird automatisch im aktuell ausgewählten Netzwerk erkannt und auch der aktuell angemeldete Account wird automatisch in Remix ausgewählt.
Nun können wir unsere Contracts in das ausgewählte Testnetzwerk über unseren neuen Account deployen.

## Eigene Tokens hinzufügen
Um eigene Tokens hinzuzufügen wird in Meta Maskauf _"Add Token"_ geklickt und dann kann die Adresse des Token-Contract eintragen werden. 
Die restlichen Felder werden automatisch ausgefüllt. Nun auf _"Add"_ klicken und die Tokens sind unter dem Reiter _"Tokens"_ sichtbar.
Wenn auf den erstellten Token geklickt wird, öffnet sich die Webseite  _"Ropsten Etherscan"_ auf der, der Holder des Contracts, die Contract Adresse und die jeweiligen Transaktionen zu sehen sind.

# Testnet local: Ganache 
Ganache ermöglicht es eine Blockchain lokal zu generieren ohne weitere Konfiguration oder Tools. Vorteil von lokalen Test ist die Kontrolle über die Blockchain und die einfachere Nachverfolgung von Transaktionen, da kein Overhead externer Transaktionen besteht.

# Testnet remote: Ropsten
Um Contracts möglichst nah an einer 'echten' Ehtereum Blockchain zu testen gibt es die Möglichkeit COntracts über das Testnet Ropsten zu deployen. Dies ist eine echte Blockchain, jedoch mit leichterer Blockgenerierung und fast wertfreiem Ehter. Dieser Ether kann über Facets konstenlos angefragt werden https://ethereum-faucet.org/. Mit diesem Ether können Transationen um Ropsten-Testnet feneriert werden.

