# Modulare Contract Architektur

Hier möchten wir uns mit den Architektur/Design Möglichkeiten einer Smart Contract Anwendung im Bezug auf Modularität zur Laufzeit beschäftigen.
Dabei betrachten wir verschiedene Ansetzte und erläutern deren Vor- und Nachteile über entsprechende Prototypen.

## Aufruf über Interfaces
Beim Aufbau einer Smart Contract Anwendung aus mehreren seperat deployten Contracts, spielt deren Kommunikation über Interfaces eine wichtige Rolle.
Der Aufruf eines Interface erlaubt es die Implementierung des deployten Contract auch noch nach dem deploy des Aufrufers auszutauschen. Dies ist möglich,
da beim Aufruf des Interfaces, die Adresse des Contracts der das Interface implementiert mit übergeben werden muss. Dabei definiert man welcher deployte Contract
zur Ausführung des Codes verwendet werden soll. Zum setzten der Addresse ist natürlich eine entsprechende Setter-Methode notwendig.

Eine Beispielimplementierung befindet sich [hier](../contracts/Modular_Contracts/Delegate_Example)

## Delegate Pattern
Beim Delegate Pattern im Bezug auf das Design von Smart Contracts, versuchen wir eine unveränderliche API von deployten Contracts zu erstellen,
welche eine dahinterligende austauschbare Implementierung verbergen. Dies ermöglicht es eine Smart Contract Anwendung auch noch nach dem deploy zu ändern,
ohne externe Contracts über die neuen Addressen informieren zu müssen. 

Eine Beispielimplementierung befindet sich [hier](../contracts/Modular_Contracts/Delegate_API_Example)

## Datenspeicher
Dieser Abschnitt beschäftig sich mit der Abgrenzung der Daten eines Contracts - seinen Zustandsvariablen, in einen seperat deplyoten Contract.

Eine Beispielimplementierung befindet sich [hier](../contracts/Modular_Contracts/Daten_Contract_Example)