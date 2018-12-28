//initialize aquarium svg
$("#aquarium").svg({settings:{height: 400, width:800}});
$("#fishProfile").svg({settings:{height: 100, width:100}});
var aquarium = $('#aquarium').svg('get');
aquarium.linearGradient('grad1',
    [[0, 'rgb(66,151,255)',1], [1, 'rgb(0,50,100)',1]], '0%', '0%', '0%', '100%');
aquarium.rect(0,-0.5, 800, 400, {fill: 'url(#grad1)', stroke: 'black', strokeWidth: 10, strokeDashArray:"0,800,800"});

//array to store all fish in it:
var allFish = [];

function insertNewFishToAquarium(headType, tailType){
    var randX = Math.round(Math.random()*300)+200;
    var randY = Math.round(Math.random()*200);
    var randSpeed = Math.random()*6 + 1;
    var fish = new Fish(headType, tailType, randX, randY, randSpeed);
    fish.insertToSVG("aquarium");
    allFish.push(fish);
}


//Animation:
setInterval(function() { draw() }, 1500); //call draw() twice each second

function draw(){
  for (var i = 0; i < allFish.length; i++) {
    var fish = allFish[i];
    var fishG = fish.group;
    var speed = fish.speed;
    var randX = Math.floor(Math.random() * 50);
    var randY = Math.floor(Math.random() * 25);

    var pos = fishG.transform.animVal.getItem(0);
    var posX = pos.matrix.e;
    var posY = pos.matrix.f;

    //get horizontal direction
    if(fish.direction[0] == "r"){
      var newX = posX + randX*speed;
    }else{
      var newX = posX - randX*speed;
    }

    //get vertical direction
    if(fish.direction[1] == "u"){
      var newY = posY + randY*speed;
    }else{
      var newY = posY - randY*speed;
    }

    if(newX < 70) {
      newX = 70;
      fish.direction[0] = "r";
    }
    if(newX > 740) {
      newX = 740;
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
      $(fishG).animate({  svgTransform: "translate("+ newX +"," + newY +"), scale(-0.4,0.4)"}, 1500);
    }else{
      $(fishG).animate({  svgTransform: "translate("+ newX +"," + newY +"), scale(0.4)"}, 1500);
    }

  }
}
