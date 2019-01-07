class Fish {
  constructor(headType, tailType, posX, posY, speed, name) {
    this.headType = headType;
    this.tailType = tailType;
    this.speed = speed;
    this.name = name;

    //animation properties
    this.posX = posX;
    this.posY = posY;
    this.direction = ["r","o"];
    this.group;
  }
}
