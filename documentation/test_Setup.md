# Einrichtung Entwicklungsumgebung

Zur Entwicklung der Ethereum Contracts haben wir uns dafür entschieden folgende Tools zu verwenden.
Ein einfaches Aufsetzten der Umgebung mit möglichst wenig Installationsaufwand steht hierbei im Vordergrund.

# IDE: Remix
Als Entwicklungsumgebung verwenden wir die Remix IDE, da diese nur geringe Konfiguration und einfache Integration von Web3.js Clients ermöglicht. Remix ist über einen Webbrowser unter folgender URL zu erreichen https://remix.ethereum.org/#optimize=false.
Die IDE ermöglicht es einfach Contracts zu validieren, kompilieren und zu deployen ohne weitere Tools einbinden zu müssen.

## Kompilieren und Deployen
Um eigene Contracts zu testen, können diese über den Reiter 'Compile' kompiliert werden und stehen uns dann über den Reiter 'Run' zum Deployment zur Verfügung. 
Unter dem Reiter 'Run' können wir nun alle unsere kompilierten Contracts über einen Web3.js Client deployen.
Für einfache Tests genügt hierbei die JavaScript VM 'Environment', welche direkt im Browser läuft, jedoch auch eingeschränkter ist als eine der anderen Optionen. 
Zum Einrichten eines Web3 Provider siehe Abschnitt Metamask. Unter 'Account' wird der Hashcode des Accounts der die Transaktionen zum Deployen und Interagieren mit Contracts eingetragen. 
'Gas' und 'Value' werden wenn benötigt geändert, hierbei gibt Value die Menge an Ether an die bei der nächsten Transaktion mitgeschickt werden soll. 
Vor dem Deploy muss noch der zu deployende Contract ausgewählt werden. 
Achtung: Im Dropdown-Menü werden alle komilierten Contracts aufgelistet, also auch Base/Interface-Contracts. Deployt werden müssen jedoch nur die 'finalen' Contracts, deren Base-Contracts werden automatisch mit deployed.
Über den Button 'Deploy' kann dann der ausgewählte Contract in die konfigurierte Blockchain deployed werden. 
Möchte man einen bereits deployten Contract für Tests innerhalb der Remix IDE einbinden, kann die Adresse unter der der Contract erreichbar ist unter 'At Address' eingetragen werden. 
Bei dieser Methode wird jedoch weiterhin ein kompiliertes Interface des Contracts benötigt! Dieses Interface dient als Basis für die ABI der zu erzeugenden Transaktionen.


## Deployte Contracts testen
Nach dem Einbinden/Deployen eines Contracts ist dessen Schnittstelle unter 'Deployed Contracts' verfügbar, neben dem Namen des Contracts ist auch dessen Adresse angezeigt. 
Nach einem Klick auf den Namen des Contracts werden dessen Methoden mit Feldern für die benötigten Übergabeparameter aufgelistet.
Hierbei kann wird zwischen zwei Arten von Methoden unterschieden, solchen die den Zustand des Contracts ändern und den Publish einer Transaktion erfordern und solchen die den aktuellen Zustand nur lesen, sogenannte 'calls'. 
Methoden die eine Transaktion generieren werden in Rot angezeigt, alle die über einen einfachen Call aufgerufen werden sind blau.
Ein weiterer wesentlicher Unterschied bezieht sich auf den Rückgabewert. Bei einem Call ist dieser sofort zur Verfügung, bei Transaktionen hingegen kann dieser nicht übergeben werden.
Hier kommt das Konzept von Events zur Kommunikation mit Clients ins Spiel. Bei einer Contract zu Contract Kommunikation werden Rückgabewerte wie gewohnt zurück gegeben!
-> Transaktionen werden über die konfigurierte Environment und Account ausgeführt, hierzu gehört auch das Deployment.


# Metamask
Um Contracts auch außerhalb der Browser VM zu testen, benötigen wir einen Web3.js Client, der uns ein Wallet zur Verwaltung der Accounts und dem Senden von Transaktionen ermöglicht. 
MetaMask bietet hier eine einfache Integration in die Webbrowser Firefox und Chrome und stellt somit eine gute Ergänzung zur Remix IDE dar. Desweiteren ermöglicht MetaMask das Aufrufen von DApps im Webbrowser. 

## Ersten Schritte
Wir sind auf das Plugin gestoßen als wir uns ein Codebeispiele für den ERC20 angesehen haben ([Webseite](https://steemit.com/ethereum/@maxnachamkin/how-to-create-your-own-ethereum-token-in-an-hour-erc20-verified)). 
Dieses Wallet wurde auf dieser Seite empfohlen um einfach Tokens zu erstellen und diese dann mithilfe von Ether zu kaufen bzw. zu verkaufen.
Als erstes muss das Plugin für den Browser herunterladen werden, wir haben in diesem Fall den Chrome Browser benutzt. MetaMask unterstützt allerdings auch Firefox und Opera. 
Sobald dann die Erweiterung erfolgreich dem Browser hinzugefügt wurde meldet man sich in MetaMask an. Um sich anzumelden muss zuvor noch ein Passwort für den Account angegeben werden. Anschließend bekommt man 12 Wörter als Secret vorgelegt, diese sollte man sich sicher notieren, da es nur darüber möglich ist auf den Account zuzugreifen.

## Account einrichten
Sobald die Anmeldung erfolgreich abgeschlossen wurde, kann im Browser im Plugin Bereich auf das Fuchs Symbol geklickt werden um MetaMask zu öffnen. Nun kann der Account betrachtet werden. Auf der linken Seite oben steht nun das Netzwerk auf dem der Account sich befindet und weiter darunter stehen die Ether die dieser Account besitzt.
Zuerst sollte dann das Netzwerk auf das jeweilige Testnetzwerk geändert werden, auf welches der Account später zugreifen soll. Wir haben uns in diesem Fall für das Ropsten Testnetzwerk entschieden. Dieses Testnetzwerk ist dafür gedacht Smart Contracts zu testen, ohne dass diese direkt auf die Haupt-Blockchain des Ethereum Netzwerk schreiben.
Um allerdings Transaktionen durchzuführen braucht der Account Ether um die Miner zu bezahlen. Um an Ether zu kommen gibt es verschiedene Wege. 
Es gibt die Möglichkeit kostenlos Ether auf seinen Account zu laden, indem die Adresse des Accounts angegeben wird. 
Zwei Webseiten die wir benutzt haben sind: 

- [Ropsten Ethereum Faucet](https://faucet.ropsten.be/) 
- [MetaMask EtherFaucet](https://faucet.metamask.io/)

Der angefragte Ehter ist jedoch nur für das entsprechende Testnetzwerk verfügbar!
Nachdem der Account mit Ether ausgestattet und mit dem gewünschten Netzwerk verbunden ist, kann dieser in der Remix IDE verwendet werden.
Hierzu wählt man im Reiter 'Run' unter Environment 'Inject Web3' aus. MetaMask wird automatisch mit dem aktuell ausgewählten Netzwerk erkannt, auch der passende Account kann nun im Feld 'Account' ausgewählt werden.
Nun können wir unsere Contracts auch in das ausgewählte Testnetzwerk über unseren neuen Account deployen.

## Eigene Tokens hinzufügen
Um eigene Tokens hinzuzufügen klickt man auf _"Add Token"_, dann die Adresse des Token-Contract eintragen, die beim Deploy des Contracts in Remix mitgeteilt wurde. 
Die restlichen Felder werden dann automatisch ausgefüllt. Nun auf _"Add"_ klicken und die Tokens sind unter dem Reiter _"Tokens"_ sichtbar.
Wenn nun auf den erstellten Token geklickt wird, öffnet sich die Webseite  _"Ropsten Etherscan"_ auf der, der Holder des Contracts, die Contract Adresse und die jeweiligen Transaktionen zu sehen sind.

Nun kann man seine Token zwischen seinen Accounts verschicken oder kaufen jenachdem welche Funktionen der Contract implementiert.

# Testnet local: Ganache 
Ganache ermöglicht es eine Blockchain lokal zu generieren ohne weitere Konfiguration oder Tools. Vorteil von lokalen Tests ist die Kontrolle über die Blockchain und die einfachere Nachverfolgung von Transaktionen, da kein Overhead externer Transaktionen besteht.

# Testnet remote: Ropsten
Um Contracts möglichst nah an einer 'echten' Ethereum Blockchain zu testen, gibt es die Möglichkeit Contracts über das Testnetzwerk Ropsten zu deployen. 
Dies ist eine dem aktuellen echten Ethereum-Netzwerk nahe Blockchain, jedoch mit leichterer Blockgenerierung und fast wertfreiem Ether. 
Dieser Ether kann über Faucets konstenlos angefragt werden https://ethereum-faucet.org/. 
Mit diesem Ether können Transaktionen im Ropsten-Testnet generiert werden.

