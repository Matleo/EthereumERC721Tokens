//const ipfs = window.IpfsHttpClient('ipfs.infura.io', '5001', { protocol: 'https' });
const ipfs = window.IpfsHttpClient('localhost', '5001', { protocol: 'http' });

const fishTokenDatabase = {
    getFishToken: async function (token_url, id) {
        return new Promise(function (resolve, reject) {
            ipfs.get(token_url, function (err, files) {
				if(typeof(files) =="undefined") alert("Zu dem IPFS Hash: "+token_url+" wurde keine passende Datei gefunden")
                //console.log("getFishToken():" + files[0].content.toString('utf8'))
                resolve([JSON.parse(files[0].content.toString('utf8')),id]);
            })
        });
    },
    createOrUpdateFishToken: async function (fishToken) {
        let content = ipfs.types.Buffer.from(JSON.stringify(fishToken));
        //console.log("createOrUpdateFishToken():" + JSON.stringify(fishToken))
        let results = await ipfs.add(content);
        //console.log("createOrUpdateFishToken():" + results[0].hash);
        return results[0].hash; // "Qm...WW"
    },
    getAllFishTokens: async function () {
    },
    deleteFishToken: async function (fishToken) {
    },
    /* token_ids as String splitet with ";" Example token_ids=123,1234*/
    getFishTokensByIds: async function (token_ids) {
    }
}