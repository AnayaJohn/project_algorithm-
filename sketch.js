function setup() {
  createCanvas(800,400);
  movingBlock= createSprite(400, 200, 70, 30);
  fixedBlock= createSprite(600, 200, 50, 50);
  
  movingBlock.shapeColor="yellow";
  fixedBlock.shapeColor="yellow";

  //fixedBlock.velocityX= 2
  fixedBlock.velocityY=5
  //movingBlock.velocityX= -3;
  movingBlock.velocityY= -5;
}

function draw() {
  background(0,0,0); 
  
  
  

  console.log(movingBlock.x-fixedBlock.x);

  if(movingBlock.x-fixedBlock.x < movingBlock.width/2+fixedBlock.width/2 &&
    fixedBlock.x-movingBlock.x < movingBlock.width/2+fixedBlock.width/2){
      movingBlock.velocityX=movingBlock.velocityX*(-1);
      fixedBlock.velocityX=fixedBlock.velocityX*(-1)
    }

    if(fixedBlock.y-movingBlock.y < movingBlock.height/2+fixedBlock.height/2 &&
    movingBlock.y-fixedBlock.y < movingBlock.height/2+fixedBlock.height/2){
      movingBlock.velocityY=movingBlock.velocityY*(-1);
      fixedBlock.velocityY=fixedBlock.velocityY*(-1)

    //movingBlock.shapeColor="purple";
    //fixedBlock.shapeColor="purple";
  }
  

  
  drawSprites();
}