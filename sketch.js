var wall,wall1,wall2;
var car1,car2,car3;
var line1,line2;

function setup() {
  createCanvas(400,400);
  car1 = createSprite(100,100,10,10)
  car1.shapecolor = 'yellow'
  car2 = createSprite(100,200,10,10)
  car2.shapecolor = 'red'
  car3 = createSprite(100,300,10,10)
  car3.shapecolor = 'green'

  line1 = createSprite(200,150,400,10)
  line1.shapecolor = 'white'
  line2 = createSprite(200,250,400,10)
  line2.shapecolor = 'white'

  car1.velocityX = 4
  car2.velocityX = 4
  car3.velocityX = 4

  wall = createSprite(300,100,10,40)
  wall1 = createSprite(300,200,10,40)
  wall2 = createSprite(300,300,10,40)
}

function draw() {
  if(isTouching(car1,wall)){
  car1.velocityX = -9
  }

  if(isTouching(car2,wall1)){
  car2.velocityX = 0
  }

  if(isTouching(car3,wall2)){
  car3.velocityX = 0
  }

  background(0);  
  rect(CENTER)
  drawSprites();
}
function isTouching(object1,object2){
 if(object2.x - object1.x < object1.width/2 + object2.width/2){
   return true
 }
else {return false
}
}