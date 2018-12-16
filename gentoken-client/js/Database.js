

function databaseRequest(path,method,dataType, contentType,params) {

    return  new Promise(function (resolve, reject) {


        $.ajax({
            url: "http://localhost:8080/" + path,
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
