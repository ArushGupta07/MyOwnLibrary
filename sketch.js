var fixedRect, movingRect;
var Gobject1,Gobject2,Gobject3,Gobject4;
var object1,object2;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 50);
  movingRect = createSprite(500, 300,70,20);

  fixedRect.shapeColor= "green";
  movingRect.shapeColor="green";

  Gobject1 = createSprite(100,100,50,50);
  Gobject2 = createSprite(200,100,50,50);
  Gobject3 = createSprite(300,100,50,50);
  Gobject4 = createSprite(400,100,50,50);

  Gobject1.shapeColor = 'green';
  Gobject2.shapeColor = 'green';
  Gobject3.shapeColor = 'green';
  Gobject4.shapeColor = 'green';
}

function draw() {
  background(0);  
  movingRect.x= World.mouseX;
  movingRect.y= World.mouseY;
  
  if(isTouching(Gobject4,movingRect)){
    Gobject4.shapeColor = 'red';
    movingRect.shapeColor = 'red';
  }
  else{
    movingRect.shapeColor = 'green';
   Gobject4.shapeColor = 'green';
  }

  drawSprites();
}

