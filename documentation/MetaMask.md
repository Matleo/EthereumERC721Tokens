#MetaMask
Als wir uns über Ethereum und den ERC-20 informierten sind wir auf ein  Browser Plugin gestoßen das es ermöglicht ein Wallet, mit den wichtigsten Grundprinzipien, einfach zu erstellen. Dieses Plugin heißt Meta Mask. Im folgenden möchte ich beschreiben wie wir darauf gestoßen sind und was unsere ersten Erfahrungen mit diesem Plugin waren.

## Ersten Schritte
Wir sind auf dieses Plugin gestoßen als wir uns ein Codebeispiele für den ERC20 angeschaut haben ([Webseite](https://steemit.com/ethereum/@maxnachamkin/how-to-create-your-own-ethereum-token-in-an-hour-erc20-verified)). Dieses Wallet wurde auf dieser Seite wärmstens empfohlen um einfach Tokens zu erstellen und diese dann mithilfe von Ether zu verkaufen oder kaufen.
Als Erstes muss das Plugin für den Browser herunterladen werden, wir haben in diesem Fall den Chrome Browser benutzt. Meta Mask unterstützt allerdings auch Firefox und Opera. 
Sobald dann die Erweiterung erfolgreich dem Browser hinzugefügt wurde meldet man sich in Meta Mask an. Um sich anzumelden muss aber nur ein Passwort für seinen Account angegeben werden. Anschließend bekommt man 12 Wörter vorgelegt, diese sollte man sich sicher notieren, da es nur darüber möglich ist auf den Account zuzugreifen.

##Account einrichten
Sobald die Anmeldung erfolgreich abgeschlossen wurde kann im Browser bei den Plugins auf den Fuchs geklickt werden um Meta Mask zu öffnen. Nun kann der Account betrachtet werden. Auf der linken Seite oben steht nun das Netzwerk auf dem der Account sich befindet und weiter darunter stehen die Ether die dieser Account besitzt.
Zuerst sollte dann das Netzwerk auf das jeweilige Testnetzwerk geändert werden auf das der Account später zugreifen soll, wir haben uns in diesem Fall für das Ropsten Test Netzwerk entschieden. Dieses Test Netzwerk ist dafür gedacht Smart Contracts zu testen, ohne dass diese direkt auf die Haupt-Blockchain des Ethereum Netzwerk schreiben. Diese werden dann auf eine Blockchain innerhalb des Test Netzwerkes geschrieben.
Um allerdings Transaktionen durchzuführen braucht der Account Ether um die Miner zu bezahlen. Um an Ether zu kommen gibt es verschiedene Wege. Es gibt die Möglichkeit  kostenlos Ethereum auf seinen Account zu laden in dem die Adresse des Accounts abgegeben wird. 
Zwei Webseiten die wir benutzt haben wären: 

- [Ropsten Ethereum Faucet](https://faucet.ropsten.be/) 
- [MetaMask EtherFaucet](https://faucet.metamask.io/)

##Eigene Tokens hinzufügen
Um eigene Tokens hinzuzufügen auf _"Add Token"_ klicken, dann die Token Contract Adresse eintragen die beim erstellen der Tokens in Remix mitgeteilt wurde. Die restlichen Felder werden dann automatisch ausgefüllt. Nun auf _"Add"_ klicken und nun sind die Tokens und dem Reiter _"Tokens"_ sichtbar.
Wenn nun auf den erstellten Token geklickt wird, öffnet sich eine Webseite namens _"Ropsten Etherscan"_ auf der der Holder des Contracts, die Contract Adresse und die jeweiligen Transaktionen zu sehen sind .


Nun kann der Spaß beginnen und man kann sich seine Tokens untereinander zwischen seinen Accounts verschicken oder kaufen je nachdem welche Funktionen der Contract implementiert.  :)