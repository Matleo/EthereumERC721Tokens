# GenTokens
Dieses Projekt wurde realisiert im Rahmen eines Teamprojekts für WIN an der HTWG Konstanz. Die Betreuung hat Herr Prof. Haase übernommen.
Das Ziel dieses Projekts war:
1. Non-Fungible Tokens auf der Etherium Blockchain zu erzeugen
2. Einen Mechanismus zu entwickeln um Eigenschaften von NFTs zu erweitern
3. Eine DAPP zu entwickeln, um das Zusammenspiel zwischen Ethereum Smart Contracts, IPFS und einem web3.js Client näher zu verstehen

## Projektstruktur
- [aqua_token_client-Client](./gentoken-aqua_token_client): Unsere DAPP, welche FishTokens in einem Ethereum Smart Contracts speichert, und die Eigenschaften sowie den Client über IPFS dezentral zur Verfügung stellt.
- [contracts](./contracts): Diverse, in Solidity entwickelte Smart Contracts
- [documentation](./documentation): Beinhaltet unsere gesamte Dokumentation. Unter anderem auch den [UserGuide_AquaToken](./documentation/UserGuide_AquaToken.md)
- [GenToken-Client](./gentoken-client): (veraltet) Beinhaltet unsere ersten Versuche für einen Client mit web3js 
- [GenToken-Database-Service](./gentoken-database): (veraltet) Beinhaltet unseren Datenbank Service, um Eigenschaften zu speichern. Ist nun durch IPFS ersetzt worden
- [simple_token_client_with_truffle](./simple_token_client_with_truffle): (veraltet) Beinhaltet einen experimentellen Versuch einen Client mit truffle zu entwerfen