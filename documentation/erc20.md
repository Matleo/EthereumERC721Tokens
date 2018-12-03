# ERC20 Fungibler Token Standard

Hier erleutern wir die Funktionsweise eines Smart Contracts zur Verwaltung von fungiblen Token nach dem ERC20 Token Standard.
Als Erweiterung des Standard Interface fügen wir nachfolgend die Funktionalität zum Kauf von Tokens über den Contract, sowie das dynamische Erzeugen von neuen Tokens hinzu.

## Fungible Token
Bei fungiblen Token handlet es sich um austauschbare Tokens, also Token die sich voneinander nicht unterscheiden lassen und somit auch den selben Wert haben.
Fungible Token lassen sich in kleinere Einheiten aufteilen, wobei es keine Rolle spielt in welchen Einheiten man einen Token erhält, solange deren Summe den gleichen Wert representiert.
Aufgrund dieser Eigenschaft eignen sich fungible Tokens sehr gut als Kryptowährung.

## Deployment
Unsere Implementierung ist an folgenden Blog Eintrag angelehnt: [https://ethereum.org/token](https://ethereum.org/token)
Eine simple ERC20 Implementierung ist unter der Adresse '0x941a3ff30f764cabac1b88271b0abc84ffaad5cc' zu Testzwecken deployed.
Der entsprechende Solidity-Code befindet sich [hier](/contracts/ERC20Impl.sol).

- Adresse: 0x941a3ff30f764cabac1b88271b0abc84ffaad5cc
- Symbol: Test
- Name: Test Token

# Token Contract einbinden
Um mit dem Token Contract zu interagieren können wir ihn entweder mit einem Wallet wie Metamask verbinden oder direkt über das Interface der Remix IDE 
auf dessen Funktionen zugreifen. Zu beachten ist jedoch, dass bei unserer einfachen ERC20 Implementierung initial alle Token dem ersteller des Contracts zugewiesenwerden.
Dieser Owner kann dann die Token an andere Adressen im Netzwerk versenden. Der ERC20 Standard definiert keine Funktion zum Kauf der Token!
1. Metamask:

    Der Token Contract kann z.B. über das Metamask Interface wie folgt eingebunden werden:

    Tokens->Add Token->Insert Token Contract Address->Add
2. Remix IDE:

    Der Contract kann auch direkt über ein Remix Deployment angesprochen werden.
    Hierzu muss der Solidity-Code kompiliert und über das Feld 'At Address' eingebunden werden.
    Um Token zu erhalten muss eine bestehende Addresse mit Token angefragt werden.
    Hierzu werden Token über die Funktion 'transfer()' von der anfragenden Adresse an eine beliebige andere Adresse übermittelt.

### Zusatz: Variable Supply Token (mit buy Methode)
Der Contract [Variable Supply Token](../contracts/Sonstige/Erc20_VariableSupplyToken.sol) implementiert eine Variante eines ERC20 Tokens, bei der Tokens erst beim Kauf erzeugt werden. Er bietet (anders als unsere Standardimplementierung) eine Möglichkeit, Tokens selber zu erwerben.

Hierzu muss:
1. Remix geöffnet und der Source Code kompiliert werden
2. Über den "Run" Tab, der Contract "VariableSupplyToken" ausgewählt und über den Button "At Adress" dem Remix GUI bekannt gemacht werden. Der Contract wurde auf der Ropston Testchain unter der Adresse "0xfaa900afb4ec63f949fa46fc0a0fa621034cce71" deployed.
3. Die "buy" Methode ausgeführt werden. Die Anzahl Tokens, welche gekauft werden, wird implizit durch die übergebene Menge Ether festgelegt. In der oben rechten Ecke befindet sich ein Feld, in dem "value" an die Transaktion übergeben werden kann. Übergeben sie hier z.B. 200 Wei, werden sie 2 Tokenskaufen (da der Kaufpreis initial 100 Wei beträgt).


# Implementierung
## Standard ERC20Interface
Unser ERC20 Contract stellt eine möglichst einfache Implementierung des Interface dar, um die grundlegende Funktionsweise eines solchen Token Contracts darzustellen.

### Representation der Token
Im Contract werden Token über einfache Integer representiert und über ein Mapping von Adressen auf Interger eine Balance der Eigentümer verwaltet.
Ein fungibler Token hat also keine eigenen Eigenschaften die ihn von den anderen Token des Contracts unterscheiden könnten.
Alle existierenden Token werden über das Mapping/Balance verwaltet, daher ist auch jeder Token einer bestimmten Adresse zugeordnet.
Es gibt also keine Token ohne einen Besitzer!
Neben der Balance wird lediglich ein Interger mit der Anzahl der gesamten Tokenmenge verwaltet. Dieser Wert wird initial beim Erstellen des Contracts einmal gesetzt.
    
    contract FixedSupplyToken is ERC20Interface, Owned {
        using SafeMath for uint;
    
        string public symbol;
        string public  name;
        uint8 public decimals;
        uint _totalSupply;
    
        mapping(address => uint) balances;
        ...
        constructor() public {
            symbol = "TEST";
            name = "Test Token";
            decimals = 18;
            _totalSupply = 1000000 * 10**uint(decimals);
            balances[owner] = _totalSupply;
            emit Transfer(address(0), owner, _totalSupply);
        }
    ...
    }
### Komponenten
Unser Token Contract besteht aus mehreren Komponenten, einer Library `SafeMath`, einem 'Interface' Contract `ERC20Interface`, 
einem Contract zur Verwaltung eines Owners `Owned` und dem zu deployenden Token Contract `TestToken`, 
welcher die zuvor erwähnten Komponenten mit einbindet.

### Transfer von Token
Tokens können über die Funktion `transfer(address,uint)` von der eigenen Adresse/Konto zu einer anderen gesendet werden. 
Hierbei werden jedoch nicht wirklich Token versendet, sondern lediglich die Balances der beiden Konten entsprechend angepasst.
(Das Event `emit Transfer(msg.sender, to, tokens);` dient zur Benachrichtigung von Blockchain Clients)

    function transfer(address to, uint tokens) public returns (bool success) {
        balances[msg.sender] = balances[msg.sender].sub(tokens);
        balances[to] = balances[to].add(tokens);
        emit Transfer(msg.sender, to, tokens);
        return true;
    }
    
Neben dem Transfer von Token vom eigenen Konto auf das eines anderen, gibt es noch die Möglichkeit einer anderen Adresse die Berechtigung für den Transfer
einer bestimmten Tokenmenge vom eigenen Konto zu geben. Dieses Verhalten kann man für seine eigene Balance über die Funktion `approve(adress,uint)` einrichten.
Der vom Aufrufer der Funktion `approve()` bestimmte 'Spender' kann dann über die Funktion `transferFrom(address,address,uint)` vom Konto des anderen Token versenden.

## Erweiterung um Buy-Methode
Bei der Standard Implementierung des ERC20Interfaces ist keine Möglichkeit zum Kaufen von Token vorgesehen. 
Der Zugriff beschränkt sich hier lediglich auf die Möglichkeit den Besitz von Token von einer Adresse an eine andere zu transferieren.
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
Nachdem in der `buy` Methode die Anzahl gekaufter Token ermittelt wurde, wird die bereits in der Standard-Implementierung definierte Methode `_transfer` aufgerufen, um Token vom contract Besitzer `owner` zum Käufer `msg.sender` zu übertragen. 
Nach dem nun abgeschlossenen Kauf, wird in dieser Methode das überflüssige ether an den Käufer zurück gesendet. Beispielsweise könnte es der Fall sein, dass der `buyPrice` 100 beträgt und ein Käufer für 550 wei (Bruchteil eines ether; Einheit in `msg.value`) Tokens kaufen möchte. In dem Fall würden ihm 5 Token gutgeschrieben und die restlichen 50 wei rückerstattet werden.

In der `sell` Methode wird ebenfalls die bereits definierte Methode `_transfer` aufgerufen, um Token vom Verkäufer an den Besitzer des Contracts zu übertragen, nachdem sichergestellt wurde, dass der Contract derzeit genügend ether zur Verfügung hat um den Verkäufer auszuzahlen. Anschließend wird der entsprechende Betrag an wei an den Verkäufer `msg.sender` versendet.

## Token Erzeugung on-the-fly
In unserer bisherigen Implementierung wurden beim Deployment des Contracts, also beim Aufrufen des Construktors, initial x Token erzeugt und der gesamte Bestand an Token dem Besitzer des Contracts zugewiesen. Wir haben uns gefragt, ob man nicht auch eine andere Methodik wählen kann und Token erst beim Kauf erstellen und direkt dem Käufer zuweisen kann. Dieses Ziel ist zu erreichen durch Änderungen am `constructor`, der `buy` sowie der `sell` Methode:

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
        address myAddress = address(this);
        require(myAddress.balance >= amount * sellPrice);      // checks if the contract has enough ether to buy
        balances[msg.sender] -= amount;                       // makes the transfers
        _totalSupply -= amount;
        msg.sender.transfer(amount * sellPrice);          // sends ether to the seller.
        emit Transfer(msg.sender, address(0),amount);
    }
    
Dem `constructor` wurden der Parameter `initialSupply` entfernt, und dementsprechend werden auch initial keine Token erstellt und nicht dem Owner zugewiesen. Stattdessen wird in der `buy` Methode direkt der Kontostand (`balanceOf`) des Käufers erhöht und so Tokens quasi on-the-fly beim Kauf erzeugt. Ebenfalls muss die lokale Variable `totalSupply` in der `buy` und `sell` Methode aktualisiert werden, anstatt sie initial beim Erzeugen des Contracts im `constructor` zu setzen.
In der `sell` Methode ändert sich außerdem nur noch eine Sache. Anstatt, dass beim Verkauf die Token vom Verkäufer an den Owner transferiert werden, werden sie nun "vernichtet", indem sie zur Adresse `0` gesendet werden. Es gibt keine Entität die auf diese Adresse Zugriff hat.

Ein vollständiger Kontrakt, welcher diesen Mechanismus implementiert, ist [hier](https://git.uni-konstanz.de/ja431gre/GenTokens/blob/develop/contracts/Erc20_on-the-fly.sol) zu finden.