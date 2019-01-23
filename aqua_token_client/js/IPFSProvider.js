const ipfs = window.IpfsHttpClient('localhost', '5001');

const fishTokenDatabase = {
    getFishToken: async function (token_url) {
        return new Promise(function (resolve, reject) {
            ipfs.get(token_url, function (err, files) {
                resolve(files[0].content.toString('utf8'))
            })
        });
    },
    createOrUpdateFishToken: async function (fishToken) {
        let content = ipfs.types.Buffer.from(fishToken);//ToString()?
        let results = await ipfs.files.add(content);
        console.log(result[0].hash);
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