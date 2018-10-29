# ERC20 Beispiel Deployment
Unsere Implementierung ist an folgenden Blog Eintrag angelehnt: [https://ethereum.org/token](https://ethereum.org/token)
Eine simple ERC20 Implementierung ist unter der Adresse '0x941a3ff30f764cabac1b88271b0abc84ffaad5cc' zu Testzwecken deployed.
Der entsprechende Solidity-Code befindet sich in der Datei '[link auf Datei]'.

Adresse: 0x941a3ff30f764cabac1b88271b0abc84ffaad5cc
Symbol: Test
Name: Test Token

# Token Contract einbinden
## Metamask
Der Token Contract kann z.B. über das Metamask Interface eingebunden werden.
Tokens->Add Token->Insert Token Contract Address->Add
## Remix IDE
Der Contract kann auch direkt über ein Remix Deployment angesprochen werden.
Hierzu muss der Solidity-Code kompiliert und über das Feld 'At Address' eingebunden werden.
Um Tokens zu erhalten muss eine bestehende Addresse mit Tokens angefragt werden.
Hierzu werden Tokens über die Funktion 'transfer' übermittelt.

# Implementierung
## Standard ERC20Interface
## Erweiterung um Buy-Methode
Bei der Standard Implementierung des ERC20Interfaces ist keine Möglichkeit zum Kaufen von Tokens vorgesehen. 
Der Zugriff beschränkt sich hier lediglich auf die Möglichkeit den Besitz von Tokens von einer Adresse an eine Andere zu transferieren.
Das Standard Interface kann man in folgender Weise um eine `buy` Methode und eine `sell` Methode:

    function buy() payable public {
        uint amount = msg.value / buyPrice;               // calculates the amount
        _transfer(owner, msg.sender, amount);             // makes the transfers
        
        //send leftover ether back
        uint leftOver = msg.value % buyPrice;
        msg.sender.transfer(leftOver);                    //'leftOver' wei an msg.sender schicken 
    }
    
    function sell(uint256 amount) public {
        address myAddress = this;
        require(myAddress.balance >= amount * sellPrice);  // checks if the contract has enough ether to buy
        _transfer(msg.sender, owner, amount);              // makes the transfers
        msg.sender.transfer(amount * sellPrice);           // sends ether to the seller.
    }
Die `buy` Methode muss `payable` sein, damit ether an sie übergeben werden kann. Die Menge an übergebenem Ether kann auf der globalen Variable `msg` über das Attribut `value` abgefragt werden. Der `buyPrice` sowie der `sellPrice` sind locale Variablen des contracts und können vom Owner über eine weitere Methode `setPrices` gesetzt werden:

    function setPrices(uint256 newSellPrice, uint256 newBuyPrice) onlyOwner public {
        sellPrice = newSellPrice;
        buyPrice = newBuyPrice;
    }
Nachdem in der `buy` Methode die Anzahl gekaufter Tokens ermittelt wurde, wird die bereits in der Standard-Implementierung definierte Methode `_transfer` aufgerufen, um Tokens vom contract Besitzer `owner` zum Käufer `msg.sender` zu übertragen. 
Nach dem nun abgeschlossenen Kauf, wird in dieser Methode das überflüssige ether an den Käufer zurück gesendet. Beispielsweise könnte es der Fall sein, dass der `buyPrice` 100 beträgt und ein Käufer für 550 wei (Bruchteil eines ether; Einheit in `msg.value`) Tokens kaufen möchte. In dem Fall würden ihm 5 Token gutgeschrieben und die restlichen 50 wei rückerstattet werden.

In der `sell` Methode wird ebenfalls die bereits definierte Methode `_transfer` aufgerufen, um Tokens vom Verkäufer an den Besitzer des Contracts zu übertragen, nachdem sichergestellt wurde, dass der Contract derzeit genügend ether zur Verfügung hat um den Verkäufer auszuzahlen. Anschließend wird der entsprechende Betrag an wei an den Verkäufer `msg.sender` versendet.

## Token Erzeugung on-the-fly
In unserer bisherigen Implementierung wurden beim Deployment des Contracts, also beim Aufrufen des Construktors, initial x Tokens erzeugt und der gesamte Bestand an Tokens dem Besitzer des Contracts zugewiesen. Wir haben uns gefragt, ob man nicht auch eine andere Methodik wählen kann und Tokens erst beim Kauf erstellen und direkt dem Käufer zuweisen kann. Dieses Ziel ist zu erreichen durch Änderungen am `constructor`, der `buy` sowie der `sell` Methode:

    constructor(string tokenName, string tokenSymbol) public {
        name = tokenName;                                   // Set the name for display purposes
        symbol = tokenSymbol;                               // Set the symbol for display purposes
    }
    
    function buy() payable public {
        uint amount = msg.value / buyPrice;
        require(balanceOf[msg.sender] + amount >= balanceOf[msg.sender]); //check for overflows
        balanceOf[msg.sender] += amount;        // create coins on the fly and
        totalSupply += amount;
        emit Transfer(0, msg.sender, amount);
        
        //send leftover ether back
        uint leftOver = msg.value % buyPrice;
        msg.sender.transfer(leftOver);
    }

    function sell(uint256 amount) public {
        address myAddress = this;
        require(myAddress.balance >= amount * sellPrice);      // checks if the contract has enough ether to buy
        _transfer(msg.sender, 0, amount);              // makes the transfers
        totalSupply -= amount;
        msg.sender.transfer(amount * sellPrice);          // sends ether to the seller.
    }
    
Dem `constructor` wurden der Parameter `initialSupply` entfernt, und dementsprechend werden auch initial keine Tokens erstellt und nicht dem Owner zugewiesen. Stattdessen wird in der `buy` Methode direkt der Kontostand (`balanceOf`) des Käufers erhöht und so Tokens quasi on-the-fly beim Kauf erzeugt. Ebenfalls muss die lokale Variable `totalSupply` in der `buy` und `sell` Methode aktualisiert werden, anstatt sie initial beim Erzeugen des Contracts im `constructor` zu setzen.
In der `sell` Methode ändert sich außerdem nur noch eine Sache. Anstatt, dass beim Verkauf die Tokens vom Verkäufer an den Owner transferiert werden, werden sie nun "vernichtet", indem sie zur Adresse `0` gesendet werden. Es gibt keine Entität die auf diese Adresse Zugriff hat.

Ein vollständiger Kontrakt, welcher diesen Mechanismus implementiert, ist [hier](https://git.uni-konstanz.de/ja431gre/GenTokens/tree/master/contracts/Erc20_on-the-fly.sol) zu finden.