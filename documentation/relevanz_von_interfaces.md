# Relevanz von Interfaces

Dieses Dokument beschäftigt sich mit der Implementierung von Interfaces im Ethereum Umfeld, insbesondere der Programmiersprache Solidity.
Dabei wird die Bedeutung und die Verwendungsbereiche von Solidity-Interfaces betrachtet, sowie deren Besonderheiten.

## EIP's und ERC's

Die von uns betrachteten Interfaces beziehen sich auf die als ERC definierten Interfaces bzw. APIs von Smart Contracts.
Insbesondere der Interfaces zur Tokendefinition wie z.b. ERC20/712.

EIP's (Ethereum Improvement Proposals) dienen zur Verbesserung der Ethereum Platform und können von Entwicklern eingebracht werden.
Hierbei werden Standards für das Protokoll, die API sowie für Smart Contracts definiert. EIP's werden in verschiedenen Kategorien eingeteilt,
dazu gehört unter anderem auch die Kategorie der ERC's (Ethereum Request for Comments). Unter diser Kategorie werden EIP's zusammengefasst,
welche sich auf Standards bezüglich der Applikationsebene beziehen. 
Beispielsweise gehören hierzu Tokenstandards, URI Schemas und Formate für Bibliotheken/Pakete/Walltes.
Hierbei handelt es sich also um Vorschläge zur Implementierung, diese können sich in Zukunft jedoch noch ändern.
Desweiteren werden EIP's zusätzlich noch nach Status sortiert (Draft, Accepted, Final, Deferred).

EIP: https://eips.ethereum.org
ERC: https://eips.ethereum.org/erc


## Fragestellungen

### 1. Fragestellung: Welche Rolle spielen Interfaces beim Design von Smart Contracts/DApps?
    
Interfaces erhalten im Ethereum Umfeld aufgrund der verteilten Struktur und der Unveränderlichkeit von deployten Smart Contracts eine wichtige Rolle.
Sie ermöglichen die Definition von einheitlichen Schnittstellen für grundlegende Konzepte wie Token Contracts und zur Einbindung von Clients wie Wallets.

#### Interfaces zur Erweiterbarkeit
Interfaces ermöglichen es Contracts auch nach dem Deployment zu erweitern. Dazu wird ein Interface Contract als Einstiegspunkt für andere Contracts
bekannt gemacht. Dieser Interface Contract enthält dann eine Referenz auf die Adresse der derzeitigen Implementierung.
So kann eine neue Version eines Contracts deployt werden und es muss lediglich die Referenz auf die Adresse aktualisiert werden, ohne abhängige Contracts erneut deplyen zu müssen.
Da der Aufruf eines entfernten Contracts generell über dessen Interface und Adresse stattfindet, lässt sich der aufzurufende Contract über diesen Adresswert austauschen.
Hierbei müssen nur die Funktionen bekannt gemacht werden, die man auch selber Anspricht. Die aufzurufende Funktion wird dann über die angegebene Signatur bestimmt.

#### Interfaces zur Einbindung von Clients
Um es Ethereum Clients wie z.B. Wallets zu ermöglichen, beliebige Smart Contracts für grundlegende Abläufe wie das Transferieren von Tokens einzubinden, 
benötigt man Standards an eine API. Interfaces wie der ERC20 ermöglichen so die Kommunikation unabhängiger Contracts und Clients. 


### 2. Fragestellung: Warum werden ERC Interfaces nur als einfaches Textdokument veröffentlicht?
    
In der Regel werden Interface Standards über eine detailierte Spezifikation beschrieben und mit einer Referenzimplementierung veröffentlicht.
Das Publishing der implementierten Interfaces erfolgt dann wie Beispielsweise in der Programmiersprache C über eine seperate Headerdatei, welche von anderen eingebunden werden kann.

Derzeit werden Interface Standards in Ethereum als einfaches Textdokument veröffentlicht, ohne Referenzimplementierung und zur Verwendung empfohlen. Die Definition eines Interface
im Code bleibt jedoch weiterhin dem Entwickler überlassen, so implementiert jeder Smart Contract seine eigene Version eines Interface.
Es ist auch nicht ohne weiteres möglich die implementierten Interfaces bekannt zu machen. Beim Aufruf eines anderen Smart Contract ist daher,
ohne vorherige Prüfung nicht klar ob dieser ein gewünschtes Interface wie vermutet implementiert. 
Damit ein Contract einen anderen ansprechen kann, benötigt er jedoch zur Compilezeit dessen Schnittstellen definition. Das heißt
das Interface muss zuvor im Contract Code bekannt gemacht werden. Da es derzeit keine Möglichkeit gibt die API eines bereits deployten Contracts
über die Blockchain zu beziehen, verbleibt nur das testen und überprüfen der veröffentlichten Dokumentation. Das verteilen einer Solidity Library
mit den einzubindenden Interfaces ist zwar technisch möglich, jedoch unüblich.

Dieser Umgang mit Interfaces bietet jedoch auch gewisse Vorteile, zum einen die Unabhängigkeit von der technischer Umsetzung.
Aufgrund der verteilten Struktur der Smart Contracts müssen diese nicht notwendigerweise in Solidity geschrieben werden. Eine einheitliche API ist
hier also nicht gegeben. So behält der Entwickler die Freiheit wie er einen Contract ansprechen möchte.

Nachteil dieser Implementierung fremder Interfaces sind:
- Wenn ein bereits deployter Contract angesprochen werden möchte, muss dessen Interface erneut im eigenen Code definiert werden. Hier kann es zu Fehlern kommen
- Erfüllt ein entfernter Contract nicht die vermutete Schnittstelle kommt es zu Fehlern während der Ausführung. Diese müssen über vorherige Test abgefangen werden
    
### 3. Fragestellung: Wie kann für einen deployten Smart Contract überprüft werden, welche Interfaces er implementiert?
    
Wie in Fragestellung 2. bereits angesprochen sind Interfaces eines Smart Contract nach außen nicht bekannt. Es ist daher nicht trivial festzustellen ob ein Funktionsaufruf wie erwartet vom
abgesprochenen Contract verarbeitet wird oder einen Fehler wirft, da dieser die Funktion nicht kennt. Das Einsehen des Codes oder einer möglichen Dokumentation ist hierfür zwar möglich aber unzureichend.
Ein Mechanismus welcher zur Laufzeit überprüft, ob ein Funktionsaufruf möglich ist (vgl. Java `instanceof`) wäre daher wünschenswert. Solidity selber bietet keinen solchen Mechanismus.

#### Interface Publishing über ERC165

Der [ERC165 Standart](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-165.md) definiert genau hierfür einen Lösungsansatz. Dieser ermöglicht es die Interfaces eines Contracts zur Laufzeit abzufragen, um so die möglichen Funktionsaufrufe zu evaluieren. 

##### Interface ID
ERC165 basiert auf einer definierten Vorgehensweise um einem bestimmten Interface eine eindeutige ID zu geben. Die ID eines Interfaces ist definiert als XOR aller [*function selectors*](https://solidity.readthedocs.io/en/develop/abi-spec.html#function-selector) des Interface, wobei ein *function selector* aus den ersten vier Bytes des Keccak-256 Hashs der Methodensignatur besteht. Die ID für das aktuelle ERC721 Interface würde sich beispielsweise folgendermaßen zusammensetzen (`^` ist in Solidity das XOR):

	bytes4 constant InterfaceSignature_ERC721 =
        bytes4(keccak256('balanceOf(address)')) ^
        bytes4(keccak256('ownerOf(uint256)')) ^
        bytes4(keccak256('safeTransferFrom(address,address,uint256,bytes)')) ^
        bytes4(keccak256('safeTransferFrom(address,address,uint256)')) ^
        bytes4(keccak256('transferFrom(address,address,uint256)')) ^
        bytes4(keccak256('approve(address,uint256)')) ^
        bytes4(keccak256('setApprovalForAll(address,bool)')) ^
        bytes4(keccak256('getApproved(uint256)')) ^
        bytes4(keccak256('isApprovedForAll(address,address)'));
        
##### ERC165 Interface
  Das Interface definiert nur eine Methode `supportsInterface`:
  	
    interface ERC165 {
    /// @notice Query if a contract implements an interface
    /// @param interfaceID The interface identifier, as specified in ERC-165
    /// @return `true` if the contract implements `interfaceID` and
    ///  `interfaceID` is not 0xffffffff, `false` otherwise
    function supportsInterface(bytes4 interfaceID) external view returns (bool);
	}
 Diese Methode kann auf dem deployten Contract aufgerufen werden, um zu überprüfen, ob ein bestimmtes Interface implementiert wurde (bzw. dieser Contract zumindest behauptet dies zu tun). 
 
Zunächst sieht es etwas merkwürdig aus, dass nur der plain Text der Methodensignaturen (bzw der *function selector*) verglichen wird und bei Übereinstimmung dieser auf Gleichheit der implementierten Interfaces geschlussfolgert wird. Allerdings ist bei genauerer Betrachtung ersichtlich, dass genau so ein Interface definiert ist, nämlich durch die Menge an Methoden und deren Signaturen. Daher ist die Schlussfolgerung zu Unterstützen, dass sobald die *function selectors* zweier Interfaces übereinstimmen, genau die gleichen Interfaces vorliegen. 
 
##### Beispiel Contract implementiert ERC165
 Damit andere Contracts diese Funktionalität nutzen können, muss der Entwickler beim Aufsetzen seines Contracts zusätzlich das Interface ERC165 korrekt implementieren. Aus unserem [ERC721_basic](https://git.uni-konstanz.de/ja431gre/GenTokens/blob/master/contracts/ERC721_basic.sol) Contract:

	bytes4 constant InterfaceSignature_ERC165 = bytes4(keccak256('supportsInterface(bytes4)'));
        
    bytes4 constant InterfaceSignature_ERC721 =
        bytes4(keccak256('balanceOf(address)')) ^
        bytes4(keccak256('ownerOf(uint256)')) ^
        bytes4(keccak256('safeTransferFrom(address,address,uint256,bytes)')) ^
        bytes4(keccak256('safeTransferFrom(address,address,uint256)')) ^
        bytes4(keccak256('transferFrom(address,address,uint256)')) ^
        bytes4(keccak256('approve(address,uint256)')) ^
        bytes4(keccak256('setApprovalForAll(address,bool)')) ^
        bytes4(keccak256('getApproved(uint256)')) ^
        bytes4(keccak256('isApprovedForAll(address,address)'));
        
     function supportsInterface(bytes4 interfaceID) external view returns (bool) {
         bool isERC165 = (interfaceID == InterfaceSignature_ERC165);
         bool isERC721 = (interfaceID == InterfaceSignature_ERC721);
         return (isERC721 || isERC165);
     }
     
 Da dieser Contract nur die beiden Interfaces ERC721 und ERC165 implementiert, müssen die beiden *function selectors* gespeichert werden, und jeweils beim Aufruf der Methode `supportsInterface` abgeglichen werden. 
 
##### Beispiel Contract der implementierte Interfaces abfragt
 Möchte nun ein externer Contract mit unserem *ERC721_basic* Contract kommunizieren, aber zuvor sicherstellen, dass der Contract das aktuelle ERC721 Interface implementiert, muss zunächst überprüft werden, ob überhaupt das Interface ERC165 implementiert wurde (ansonsten wäre der Aufruf von  `supportsInterface` sinnlos). Die beiden Konstanten `InterfaceSignature_ERC165` und `InterfaceSignature_ERC721 ` sowie das `ERC165` Interface seien in diesem Contract ebenfalls deklariert :
 
 	
 	function dosth(address erc721_basic) external view {
    	ERC165 erc = ERC165(erc721_basic);
        bool isERC165 = erc.supportsInterface(InterfaceSignature_ERC165);
        bool isERC721 = erc.supportsInterface(InterfaceSignature_ERC721);
        if (isERC721 && isERC165){
        	//do stuff
        }
 	}