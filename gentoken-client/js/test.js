
function databaseRequest( method, path, params){


    $.ajax({


        url: "http://192.168.178.2:8080/Database/demo/add?name=DerLindenmayer",

        success: function (result) {

            console.log(result)
        },
        error: function (result) {
            console.log("error");
            console.log(result);
        }

