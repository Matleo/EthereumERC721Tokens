//adds a  fishpart to the group in the svg
function append(path,svg, group, posX, posY){
    svgLoader(path).then(function (value,x,pX,pY) {
        var paths = value.getElementsByTagName("path");
        for (var i = 0; i < paths.length; i++) {
            svg.add(group, paths[i]);
        }
      svg.configure(group, {transform: "translate("+posX+ "," +posY + "), scale(0.5)"});
    });

//loads the svg from file
function svgLoader(path) {
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

//initialize aquarium svg
$("#aquarium").svg({settings:{height: 400, width:800}});
var aquarium = $('#aquarium').svg('get');
aquarium.linearGradient('grad1',
    [[0, 'rgb(90,50,255)',1], [1, 'rgb(0,50,100)',1]], '0%', '0%', '0%', '100%');
aquarium.rect(0,-0.5, 800, 400, {fill: 'url(#grad1)', stroke: 'black', strokeWidth: 10, strokeDashArray:"0,800,800"});


function insertNewFishToAquarium(headType, tailType){
    var svg = $('#aquarium').svg('get');
    var group = svg.group();
    var randX = Math.round(Math.random()*300)+200;
    var randY = Math.round(Math.random()*200);
    append("../resources/SVGs/Kopf/Form"+headType+".svg",svg,group,randX,randY);
    append("../resources/SVGs/Schwanz/Form"+tailType+".svg",svg,group,randX,randY);
}


//Animation:
setInterval(function() { draw() }, 1000);
function draw(){
  var allFish = $("#aquarium").find("g");
  for (var i = 0; i < allFish.length; i++) {
    var speed = 2;
    var randX = Math.floor(Math.random() * 100 - 50);
    var randY = Math.floor(Math.random() * 50 - 25);

    var pos = allFish[i].transform.animVal.getItem(0);
    var posX = pos.matrix.e;
    var posY = pos.matrix.f;

    var newX = posX + randX*speed;
    var newY = posY + randY*speed;

    if(newX < 0) newX += Math.abs(2*randX*speed);
    if(newX > 700) newX -= Math.abs(2*randX*speed);

    if(newY < -90) newY += Math.abs(2*randY*speed);
    if(newY > 240) newY -= Math.abs(2*randY*speed);


    $(allFish[i]).animate({  svgTransform: "translate("+ newX +"," + newY +"), scale(0.5)"}, 1000);

  }
}
