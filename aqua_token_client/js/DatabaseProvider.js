
const fishTokenDatabase = {
    getFishToken: async function (token_id) {

        return databaseRequest("", "GET", "json", "application/x-www-form-urlencoded; charset=UTF-8", "token_id=" + token_id);

    },
    getAllFishTokens: async function () {

        return databaseRequest("all", "GET", "json", "application/x-www-form-urlencoded; charset=UTF-8");

    },
    createOrUpdateFishToken: async function (fishToken) {

        return databaseRequest("", "POST", "json", "application/json", JSON.stringify(fishToken));

    },
    deleteFishToken: async function (fishToken) {

        return databaseRequest("", "DELETE", "json", "application/json", JSON.stringify(fishToken));
    },
    /* token_ids as String splitet with ";" Example token_ids=123,1234*/
    getFishTokensByIds: async function (token_ids) {
        return databaseRequest("owner", "GET", "json", "application/x-www-form-urlencoded; charset=UTF-8", "token_ids=" + token_ids);
    }
}


async function databaseRequest(path, method, dataType, contentType, params) {

    return new Promise(function (resolve, reject) {


        $.ajax({
            url: "https://math2i.bounceme.net:8080/database/fishToken/" + path,
            method: method,
            dataType: dataType,
            contentType: contentType,
            data: params,
            crossDomain: "true",
            success: function (result) {

                resolve(result);
            },

            error: function (error) {
                reject(error);
            }
        });


    });

}
