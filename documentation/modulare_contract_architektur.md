# Modulare Contract Architektur

Hier möchten wir uns mit den Architektur/Design Möglichkeiten einer Smart Contract Anwendung im Bezug auf Modularität zur Laufzeit beschäftigen.
Dabei betrachten wir verschiedene Ansetzte und erläutern deren Vor- und Nachteile über entsprechende Prototypen.

## Aufruf über Interfaces
Beim Aufbau einer Smart Contract Anwendung aus mehreren seperat deployten Contracts, spielt deren Kommunikation über Interfaces eine wichtige Rolle.
Der Aufruf eines Interface erlaubt es die Implementierung des deployten Contract auch noch nach dem deploy des Aufrufers auszutauschen. Dies ist möglich,
da beim Aufruf des Interfaces, die Adresse des Contracts der das Interface implementiert mit übergeben werden muss. Dabei definiert man welcher deployte Contract
zur Ausführung des Codes verwendet werden soll. Zum Setzten der Addresse ist natürlich eine entsprechende Setter-Methode notwendig.

1. Vorteile
	- Contracts können auch noch im Nachhinein für Updates abgeändert werden. Einfachere Versionierung, Patching etc.
2. Nachteile
	- Beim Aufruf anderer Contracts müssen deren Schnittstellen bekannt sein und eingebunden werden -> Overhead, Fehleranfälligkeit
	- Contracts werden so zwar Modular, was Verbesserungen am Contract im Nachhinein ermöglicht, jedoch wird so auch die ursprünglich gedachte Unveränderlichkeit von Contracts geschwächt. Bei solchen Contracts gibt es keine Gewissheit mehr, ob die Vereinbarung des Contracts eingehalten wird.
	- Höhere Transaktionskosten
Eine Beispielimplementierung befindet sich [hier](../contracts/Modular_Contracts/Delegate_Example)

## Delegate Pattern API
Beim Delegate Pattern im Bezug auf das Design von Smart Contracts, versuchen wir eine unveränderliche API von deployten Contracts zu erstellen,
welche eine dahinterligende austauschbare Implementierung verbergen. Dies ermöglicht es eine Smart Contract Anwendung auch noch nach dem deploy zu ändern,
ohne externe Contracts über die neuen Addressen informieren zu müssen. 

1. Vorteile
	- Meine Applikation kann über gleichbleibende Adressen und Interfaces angesprochen werden
	- Das 'Innere' meiner Applikation kann ich auch noch zur Laufzeit ändern. Neue Funktionalität kann hinzugefügt werden, Fehler können behoben werden.
2. Nachteile

Eine Beispielimplementierung befindet sich [hier](../contracts/Modular_Contracts/Delegate_API_Example)

## Datenspeicher
Dieser Abschnitt beschäftig sich mit der Abgrenzung der Daten eines Contracts - seinen Zustandsvariablen, in einen seperat deplyoten Contract.
Dies Aufbau soll es ermöglichen neue Versionen einen Contracts zu deployen, ohne hohe Transaktionsgebühren für das Megrieren der darin gespeicherten Datenstruckturen bezahlen zu müssen.
Durch die Abgrenzung in Geschäftslogik und Datenspeicher, kann der Datenspeicher einfach in neue Contracts eingebunden werden. 
Hierbei wird der Datenspeicher über seine Adresse referenziert und so in belibig vielen anderen Contracts gleichzeitig verwendet.

1. Vorteile
2. Nachteile
	- Höhere Gas kosten?
	
### Div.
Da bei dieser Vorgehensweise große Arrys über Transaktionen ausgetauscht werden, sollten die beteiligten Funktionen als external deklariert werden.

	

Eine Beispielimplementierung befindet sich [hier](../contracts/Modular_Contracts/Daten_Contract_Example)