
class SVG {

    constructor(){

    }

    static svgLoader(path) {

        return new Promise(function (resolve, reject) {

            $.ajax({
                url: path,
                success: function (result) {

                    resolve(result);
                },

                error: function (error) {
                    reject(error);
                }
            });

        });

    }


     ajaxLoader(path, scale, callback) {

        var xhttp = new XMLHttpRequest();
        xhttp.overrideMimeType("image/svg+xml");
        var svgContainer;

        xhttp.onreadystatechange = function () {

            if (this.readyState === 4 && this.status === 200) {

                var svg = xhttp.responseXML.documentElement;


                var svgContainer = document.createElement("div");

                svgContainer.appendChild(svg);

                if (scale !== undefined) {

                    var height = parseInt(svg.getAttribute("height").replace("px", ""));
                    var width = parseInt(svg.getAttribute("width").replace("px", ""));
                    scale = 1 / scale;

                    var newHight = height * scale;
                    var newWidth = width * scale;

                    var viewBoxContent = parseInt(-1 * ((newHight - height) / 2)) + " " + parseInt(-1 * ((newWidth - width) / 2)) + " " + newHight + " " + newWidth;

                    svg.setAttribute("viewBox", viewBoxContent);

                }
                else {

                    var height = parseInt(svg.getAttribute("height").replace("px", ""));
                    var width = parseInt(svg.getAttribute("width").replace("px", ""));

                    svg.setAttribute("viewBox", "0 0 " + height + " " + width);


                }


                svg.setAttribute("height", "100px");
                svg.setAttribute("width", "100px");


                Utils.executeCallback(callback);
            }
            else {
                //  console.log(this.readyState, this.status);
            }
        };


        xhttp.onloadend = function () {

            console.log(svgContainer);
        }

        xhttp.open("GET", path, true);
        xhttp.send();


    }


}