//initialize aquarium svg
$("#aquarium").svg({settings:{height: 400, width:800}});
$("#fishProfile").svg({settings:{height: 100, width:100}});
var aquarium = $('#aquarium').svg('get');
aquarium.linearGradient('aquaGrad',
    [[0, 'rgb(66,151,255)',1], [1, 'rgb(0,50,100)',1]], '0%', '0%', '0%', '100%');
aquarium.rect(0,-0.5, 800, 400, {fill: 'url(#aquaGrad)', stroke: 'black', strokeWidth: 10, strokeDashArray:"0,800,800"});

//array to store all fish in it:
var allFish = [];

function insertFishToAquarium(fish){
    insertToSVG("aquarium", fish);
    allFish.push(fish);
}


//Animation:
var interval = 1500;
setInterval(function() { draw() }, interval); //call draw() each interval

function draw(){
  for (var i = 0; i < allFish.length; i++) {
    var fish = allFish[i];

    var randX = Math.floor(Math.random() * 50);
    var randY = Math.floor(Math.random() * 25);

    var pos = fish.group.transform.baseVal.getItem(0);
    var posX = pos.matrix.e;
    var posY = pos.matrix.f;

    //get horizontal direction
    if(fish.direction[0] == "r"){
      var newX = posX + randX*fish.speed;
    }else{
      var newX = posX - randX*fish.speed;
    }

    //get vertical direction
    if(fish.direction[1] == "u"){
      var newY = posY + randY*fish.speed;
    }else{
      var newY = posY - randY*fish.speed;
    }

    if(newX < 85) {
      newX = 85;
      fish.direction[0] = "r";
    }
    if(newX > 725) {
      newX = 725;
      fish.direction[0] = "l";
    }

    if(newY < -50) {
      newY = -50;
      fish.direction[1] = "u";
    }
    if(newY > 260) {
      newY = 260;
      fish.direction[1] = "o";
    }

    //scale(-1,1) if swimming to the left
    if(fish.direction[0] =="l"){
      $(fish.group).animate({  svgTransform: "translate("+ newX +"," + newY +"), scale(-0.4,0.4)"}, interval);
    }else{
      $(fish.group).animate({  svgTransform: "translate("+ newX +"," + newY +"), scale(0.4)"}, interval);
    }

  }
}

//SVG Loading/Inserting functions:
function insertToSVG(svgID, fish){
  var svg = $('#'+svgID).svg('get');

  //insert fish to aquarium
  if(svgID =="aquarium"){
    fish.group = svg.group(); //create new group in aquarium
    appendSVGtoGroup("../resources/SVGs/Kopf/Form"+fish.headType+".svg", svg, fish.group, fish.posX, fish.posY);
    appendSVGtoGroup("../resources/SVGs/Schwanz/Form"+fish.tailType+".svg", svg, fish.group, fish.posX, fish.posY);

    //add click listener
    fish.group.addEventListener("click", () => {
      $("#flosseValue").html(fish.tailType);
      $("#kopfValue").html(fish.headType);
      insertToSVG("fishProfile", fish);
    });

    //insert fish to fishprofile pic
  }else{
    //delete previous profile pic:
    $("#fishPlaceholder").remove();
    $("#fishProfile > svg").empty();
    var group = svg.group();//create new group in fishprofile
    appendSVGtoGroup("../resources/SVGs/Kopf/Form"+fish.headType+".svg", svg, group, 0, -30);
    appendSVGtoGroup("../resources/SVGs/Schwanz/Form"+fish.tailType+".svg", svg, group, 0, -30);
  }
}
function appendSVGtoGroup(path, svg, group, posX, posY){
    loadSVG(path).then(function (value) {
        var paths = value.getElementsByTagName("path");
        for (var i = 0; i < paths.length; i++) {
            svg.add(group, paths[i]);
        }
      svg.configure(group, {transform: "translate("+posX+ "," +posY + "), scale(0.4)"});
    });
}
function loadSVG(path) {
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
