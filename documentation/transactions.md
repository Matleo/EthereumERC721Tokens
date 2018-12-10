# Arten von Transaktionen

Beim Aufruf einer Funktion eines Contracts erfolgt dies entweder über einen lokalen 'Call' bzw. über das Publishing einer Transaktion.
Der Unterschied hierbei liegt in der Art der aufgerufenen Funktion.

## Client -> Blockchain(Contract)

Generell kann zwischen der Kommunikation eines externen Clients mit der Blockchain bzw. einem Contract und der Kommunikation zwischen Contracts unterschieden werden.
Ruft ein Client einen Blockchainknoten auf, um über diesen mit Smart Contracts zu interagieren, erfolgt dies in der Regel über RPC Calls.


### 1. Call

Wird eine Funktion als view/pure deklariert verändert sie den Zustand des Contracts nicht
und somit auch nicht den Zustand der Blockchain. Daher müssen andere Blockchainkonten auch nicht über den Aufruf der Funktion über das Publishing einer Transaktion informiert werden.
Bei einem Call wird direkt aus der lokal vorliegenden Blockchain über den eigenen Knoten der Contract ausgeführt und in der Regel das Resultat gelesen.

#### Kosten
Bei einem Funktionsaufruf über einen Call fallen keine Gas-Kosten an, da hier nur die eigene Rechenkapazität verwendet wird. Das selbe gilt für das lesen von Zustandsvariablen.



### 2. Transaktionen

Transaktionen werden beim Aufruf von Funktionen generiert, welche den Zustand des Contracts verändern. Da heißt sie verändern Zustandsvariablen des Contracts und benötigen ein Publishing des neuen Blockchainzustands,
an das Netzwerk. 

#### Kosten


## Contract -> Contract

Bei der Kommunikation zwischen Contracts, ruft ein Contract in einer seiner Funktionen die Funktion eines anderen Contracts auf.
Der initiale Aufruf eines Contracts - der erste Contract in der 'Liste', muss von außerhalb der Blockchain erfolgen.
Das heißt ein Client initialisiert die Kommunikation über den Aufruf eines Contracts, welcher seinerseits weitere Contracts aufrufen kann.

Contracts rufen die Funktionen anderer Contracts über interne Calls auf, generieren also keine neuen Transaktionen.