# Einrichtung Entwicklungsumgebung

Zur Entwicklung der Ethereum Contracts haben wir uns dafür entschieden folgende Tools zu verwenden.
Ein einfaches Aufsetzten der Umgebung mit möglichst wenig Installationsaufwand steht hierbei im Vordergrund.

# IDE: Remix
Als Entwicklungsumgebung verwenden wir die Remix IDE, da diese nur geringe Konfiguration und einfache Integration von Web3.js Clients ermöglicht. Remix ist über einen Webbrowser unter folgender URL zu erreichen https://remix.ethereum.org/#optimize=false.
Die IDE ermöglicht es einfach Contracts zu validieren, kompilieren und zu deployen ohne weitere Tools einbinden zu müssen.

## Kompilieren und Deployen
Um eigene Contracts zu testen, können diese über den Reiter **Compile** kompiliert werden und stehen uns dann über den Reiter **Run** zum Deployment zur Verfügung. 
Unter dem Reiter **Run** können wir nun alle unsere kompilierten Contracts über einen Web3.js Client deployen.
Für einfache Tests genügt hierbei die JavaScript VM _Environment_, welche direkt im Browser läuft, jedoch auch eingeschränkter ist als eine der anderen Optionen. 
Zum Einrichten eines Web3 Provider siehe Abschnitt [Metamask](./documentation/test_Setup.md#metamask). Unter **Account** wird der Hashcode des Accounts der die Transaktionen zum Deployen und Interagieren mit Contracts eingetragen. 
'Gas' und 'Value' werden wenn benötigt geändert, hierbei gibt Value die Menge an Ether an die bei der nächsten Transaktion mitgeschickt werden soll. 
Vor dem Deploy muss noch im Reiter **Run** oberhalb von des **Deploy** Button, der zu deployende Contract ausgewählt werden. 
Achtung: Im Dropdown-Menü werden alle kompilierte Contracts aufgelistet, also auch Base/Interface-Contracts. Deployt werden müssen jedoch nur die 'finalen' Contracts, deren Base-Contracts werden automatisch mit deployed.
Über den Button **Deploy** kann dann der ausgewählte Contract in die konfigurierte Blockchain deployed werden.


# Einbinden eines deployten Contracts
Im Folgenden wird erläutert, wie ein bereits deployter Contract zum Testen in der IDE Remix aufgerufen wird. Bei dieser Methode wird jedoch weiterhin ein kompiliertes Interface des Contracts benötigt! Es muss die Adresse, als auch das Interface des Contracts bekannt sein. Dieses Interface dient als Basis für die ABI der zu erzeugenden Transaktionen.

Hierzu den Code bzw. das Interface Fragment des Contracts in Remix einfügen, die passende compiler Version auswählen und **Start to compile** drücken. Nun in den Reiter **Run** wechseln und bei **At Address** die Adresse des Contracts eintragen und bestätigen. _Weiter geht es im nächsten Abschnitt_


## Deployte Contracts testen / in Remix verwenden
Nach dem Einbinden/Deployen eines Contracts ist dessen Schnittstelle, im rechten Bildschirmbereich, unter **Deployed Contracts** verfügbar, neben dem Namen des Contracts ist auch dessen Adresse angezeigt. 
Nach einem Klick auf den Namen des Contracts werden dessen Methoden mit Feldern für die benötigten Übergabeparameter aufgelistet.
Hierbei wird zwischen zwei Arten von Methoden unterschieden. Solchen die den Zustand des Contracts ändern und eine Transaktion erfordern und solchen die den aktuellen Zustand nur lesen, sogenannte **calls**. 
Methoden die eine Transaktion generieren werden in Rot angezeigt, alle die über einen einfachen Call aufgerufen werden sind blau.
Ein weiterer wesentlicher Unterschied zwischen Transaktionen und Calls bezieht sich auf den Rückgabewert. Bei einem Call kann ein Rückgabewert übergeben werden, was bei einer Transaktion nicht möglich ist.
Hier kommt das Konzept von Events zur Kommunikation mit Clients ins Spiel. Bei einer Contract zu Contract Kommunikation werden Rückgabewerte wie gewohnt zurückgegeben!
-> Transaktionen werden über die konfigurierte Environment und Account ausgeführt, hierzu gehört auch das Deployment.


# Metamask
Um Contracts auch außerhalb der Browser VM zu testen, benötigen wir einen Web3.js Client, der uns ein Wallet zur Verwaltung der Accounts und dem Senden von Transaktionen ermöglicht. 
MetaMask bietet hier eine einfache Integration in die Webbrowser Firefox und Chrome und stellt somit eine gute Ergänzung zur Remix IDE dar. Desweiteren ermöglicht MetaMask das Aufrufen von DApps im Webbrowser. 


## Erste Schritte
Wir sind auf das Plugin gestoßen als wir uns ein Codebeispiele für den ERC20 angesehen haben ([Webseite](https://steemit.com/ethereum/@maxnachamkin/how-to-create-your-own-ethereum-token-in-an-hour-erc20-verified)). 
MetaMask wurde auf dieser Seite empfohlen um einfach Tokens zu erstellen und diese dann mithilfe von Ether zu kaufen bzw. zu verkaufen.
Als erstes muss das Plugin für den Browser herunterladen werden, wir haben in diesem Fall den Chrome Browser benutzt. MetaMask unterstützt allerdings auch Firefox und Opera. 
Sobald dann die Erweiterung erfolgreich dem Browser hinzugefügt wurde muss sich in MetaMask angemeldet werden. Um sich anzumelden muss zuvor noch ein Passwort für den Account angegeben werden. Anschließend werden einem 12 Wörter als Secret vorgelegt, diese sollten sicher notieren werden, da es nur darüber möglich ist den Account zu importieren.

## Account einrichten
Sobald die Anmeldung erfolgreich abgeschlossen wurde, kann im Browser im Plugin Bereich auf das "Fuchs" Symbol geklickt werden um MetaMask zu öffnen. Der Account kann nun betrachtet werden. In der oberen rechten Ecke steht das Netzwerk auf dem der Account sich befindet und weiter darunter stehen die Ether die dieser Account besitzt.
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

### Ganache Account in MetaMask hinzufügen
Hierzu Ganache öffnen und einen der 10 Accounts aussuchen und rechts auf das Schlüssesymbol klicken. Den angezeigten Private Key kopieren und nun zu MetaMask Plugin im Browser wechseln. Oben rechts auf das Menü und auf "Acount Importieren" klicken. Den Private Key einfügen und importieren auswählen. Nun ist der Account hinzugefügt, ggf. muss im mittleren Menü oben das Netzwerk auf Localhost geändert werden. (Standard in Ganache ist der Port 8545 eingestellt, diesen einfach in Ganche unter Einstellungen auf den Port 7545 ändern, da dieser Port als Standard in Meta Mask benutzt wird)

### Eigene Tokens hinzufügen
Um eigene Tokens hinzuzufügen wird in MetaMask auf _"Add Token"_ geklickt und dann kann die Adresse des Token-Contract eintragen werden. 
Die restlichen Felder werden automatisch ausgefüllt. Nun auf _"Add"_ klicken und die Tokens sind unter dem Reiter _"Tokens"_ sichtbar.
Wenn auf den erstellten Token geklickt wird, öffnet sich die Webseite  _"Ropsten Etherscan"_ auf der, der Holder des Contracts, die Contract Adresse und die jeweiligen Transaktionen zu sehen sind.


# Testnet local: Ganache 
Ganache ermöglicht es eine Blockchain lokal zu generieren ohne weitere Konfiguration oder Tools. Vorteil von lokalen Tests ist die Kontrolle über die Blockchain und die einfachere Nachverfolgung von Transaktionen, da kein Overhead externer Transaktionen besteht.

# Testnet remote: Ropsten

Um Contracts möglichst nah an einer 'echten' Ehtereum Blockchain zu testen gibt es die Möglichkeit Contracts über das Testnet Ropsten zu deployen. Dies ist eine echte Blockchain, jedoch mit leichterer Blockgenerierung und fast wertfreiem Ehter. Wie Test-Ether erhalten werden kann, ist oben im Abschnitt 'Account einrichten' beschrieben. Mit diesem Ether können Transaktionen um Ropsten-Testnet generiert werden.


TODO: Truffle, Infura, Web3.js, IPFS