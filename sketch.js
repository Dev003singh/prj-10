var ship,shipImg1;
var sea,seaImg;

function preload(){

 seaImg = loadImage("sea.png");
shipImg1 = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(600,700);
// creating ship
ship = createSprite(200,160,20,20);
ship.addAnimation("ship",shipImg1);
ship.scale = 0.15;
ship.x = 50;
sea = createSprite(50,200,1500,10);
sea.addImage("sea",seaImg);
}

function draw() {
  background(220);
  console.log(ship.y)
if(keyDown("space"))
{
 ship.velocityY = -10 
}
ship.velocityY = ship.velocity + 0.5;
  ship.collide(sea)
  sea.velocityX = -2;
  console.log(sea.x);
 if(sea.x < 0){
   sea.x = sea.width/2;
 }



drawSprites();
}