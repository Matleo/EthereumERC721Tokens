class Fish {
  constructor(token_Id, headType, tailType, posX, posY, speed, name) {
    this.token_Id = token_Id;
    this.headType = headType;
    this.tailType = tailType;
    this.speed = speed;
    this.name = name;

    //animation properties
    this.posX = posX;
    this.posY = posY;
    this.direction = ["r", "o"];
    this.group;
  }
}
