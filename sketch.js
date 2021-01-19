var fixedRect, movingRect;
var gameObject1,gameObject2,gameObject3;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  
  gameObject1 = createSprite(800,300,50,50)
  gameObject1.shapeColor = "green";

  gameObject2 = createSprite(300,800,50,50)
  gameObject2.shapeColor = "green";

  gameObject3 = createSprite(500,350,50,50)
  gameObject3.shapeColor = "green";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,gameObject3)){
    movingRect.shapeColor = "red";
    gameObject3.shapeColor = "red";
  }
  else{
    movingRect.shapeColor = "green";
    gameObject3.shapeColor = "green";
  }

  
  drawSprites();
}

