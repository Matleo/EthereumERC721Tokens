# GenToken Database


##Allgemein 

Als Alternative zur Speicherung von erweiterbaren Tokeneigenschaften in der Blockchain, dass in Ethereum mitunter schwierig und teuer ist, wollten wir uns mit einer Hybriden Form beschäftigen, um deren Vor- und Nachteile genauer zu beleuchten.
Unserer Ansatz, dabei ist die Tokenerzeugung und Adminstration weiterhin der Blockchain zu überlassen während die zugehörigen Tokeneigenschaften in einer Datenbank hinterlegt werden.

Um möglichst einfach und schnell eine Datenbank für unser Projekt aufzusetzten haben wir uns für eine MySQL Datenbank entschieden die wir mittels Spring und Hibernate als Restful Service erreichbar gemacht haben.  


##Dependencies

In unserer Gentoken Database haben wir folgende Technologien verwendet:

- MySQL Community Server 8.0.13
- Spring Boot Release 2.0.5 zusammengestellt über den [Spring Initializr](https://start.spring.io/)
- Hibernate für das Objekt Relationale Mapping 
- Maven als Buildmanagment Tool
- alle weiteren Dependencies und verwendete Plugins sind der Maven [pom.xml](./pom.xml) zu entnehmen.


##Guides

 Der Großteil der von uns vorgenommenen Schritte sind bereits Spring Guides beschrieben und wurden lediglich auf unser Schema abgeändert.
 
 
 -[acessing data mysql](https://spring.io/guides/gs/accessing-data-mysql/) In diesem Guide wird beschrieben wie
 wir unsere Datenbank über ORL Mapping als Restful Service erreichbar gemacht haben.
   
-[Enabling Corss Origin Request for a Restful Web Service](https://spring.io/guides/gs/rest-service-cors/) In diesem Tutorial ist beschrieben 
 wie wir unseren Service für Cross Origin Requests verfügbar gemacht haben.

-[Consuming a Restful Web Service with jQuery](https://spring.io/guides/gs/consuming-rest-jquery/) Dieser Guide ist eventuell für das Konsumieren eines Webservices über Jquery/Javascript hilfreich.
## Vorgehen

zu Testzwecken haben wir uns zuunächst ein simples Datenbankschema aufgebaut, und wie in den Guides beschrieben, an unseren Schema angepasst.
Im Nächsten Schritt haben wir unseren Service für Cross Orgin Anfragen verfügbar gemacht, über Maven ein War Artefact unserers Services gebaut und auf einem Tomcat deployed.
Zuletzt bauten wir eine Javascript API für unser Service der mit unserer Datenbank kommuniziert. 


## Location

unser Service ist aktuell [hier](http://math2i.bounceme.net:8080/database/) erreichbar.
Eine Beispielseite des Gentoken-Clients der unsere Javascript API nutzt finden sie [hier](http://localhost/Gentokens/gentoken-client/examples/Database.html) 

