class Fish {
  constructor(headType, tailType, posX, posY, speed) {
    this.headType = headType;
    this.tailType = tailType;
    this.speed = speed;

    //animation properties
    this.posX = posX;
    this.posY = posY;
    this.direction = ["r","o"];
    this.group;
  }
}
