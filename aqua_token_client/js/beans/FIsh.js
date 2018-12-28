class Fish {
  constructor(headType, tailType, posX, posY, speed) {
    this.headType = headType;
    this.tailType = tailType;
    this.posX = posX;
    this.posY = posY;
    this.speed = speed;
    this.direction = ["r","o"];
    this.group;
  }

  insertToSVG(svgID){
    var svg = $('#'+svgID).svg('get');

    //add click listener
    if(svgID =="aquarium"){
      this.group = svg.group();
      this.appendSVGtoGroup("../../resources/SVGs/Kopf/Form"+this.headType+".svg", svg, this.group, this.posX, this.posY);
      this.appendSVGtoGroup("../../resources/SVGs/Schwanz/Form"+this.tailType+".svg", svg, this.group, this.posX, this.posY);

      this.group.addEventListener("click", () => {
        $("#flosseValue").html(this.tailType);
        $("#kopfValue").html(this.headType);
        this.insertToSVG("fishProfile")
      });
    }else{
      //delete previous profile svg:
      $("#fishPlaceholder").remove();
      $("#fishProfile > svg").empty();
      var group = svg.group();
      this.appendSVGtoGroup("../../resources/SVGs/Kopf/Form"+this.headType+".svg", svg, group, 0, -30);
      this.appendSVGtoGroup("../../resources/SVGs/Schwanz/Form"+this.tailType+".svg", svg, group, 0, -30);
    }
  }


  //private functions:
  appendSVGtoGroup(path, svg, group, posX,posY){
      this.loadSVG(path).then(function (value) {
          var paths = value.getElementsByTagName("path");
          for (var i = 0; i < paths.length; i++) {
              svg.add(group, paths[i]);
          }
        svg.configure(group, {transform: "translate("+posX+ "," +posY + "), scale(0.4)"});
      });
  }

  loadSVG(path) {
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
}
