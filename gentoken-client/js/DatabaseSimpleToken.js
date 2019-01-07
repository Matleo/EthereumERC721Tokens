const simpleTokenDatabase = {
    getSimpleToken: function (token_id) {

        return databaseRequest("","GET","json", "application/x-www-form-urlencoded; charset=UTF-8", "token_id="+token_id).then(function (req) {
            return req;
        }).catch(function (error) {
            return error;
        });


    },
    getAllSimpleTokens: function () {

    return databaseRequest("all","GET","json","application/x-www-form-urlencoded; charset=UTF-8" ).then(function (req) {
           return req;
        }).catch(function (error) {
        return error;
    });
    },
    createOrUpdateSimpleToken: function (simpleToken) {

      return  databaseRequest("","POST","json","application/json",JSON.stringify(simpleToken)).then(function (response) {
           return response;
        }).catch(function (error) {
            return error;
        })

    },
    deleteSimpleToken: function (simpleToken) {

        return  databaseRequest("","DELETE","json","application/json",JSON.stringify(simpleToken)).then(function (response) {
            return response;
        }).catch(function (error) {
            return error;
        })

    },



}

const database = {

}