
var monkey , monkeyImage;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;

function preload(){
  
  
 monkeyImage =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas(600,400);
  monkey=createSprite(120,300,40,20);
 monkey.addAnimation("moving",monkeyImage);
  monkey.scale=0.2;
  
  obstacle=createSprite(500,270,550,550);
  obstacle.addImage(obstacleImage);
  obstacle.scale=0.2;
   
  ground=createSprite(400,315,900,10);
  ground.velocityX=4;
  ground.x=ground.width/2;
  
  invisibleGround = createSprite(200, 320, 400, 10);
  invisibleGround.visible = false;
  
 foodGroup=createGroup() ;
obstacleGroup=createGroup();

  score=0;
  
}


function draw() {
  background("black");
  
  text("Score: " + score, 500, 50);
  
  score = score + Math.round(frameCount / 60);
  
  
  if (ground.x > 600) {
      ground.x = 0;
    }
  
if(keyDown("space")&& monkey.y >=253) {
  monkey.velocityY=-12;
} 
  
monkey.velocityY=monkey.velocityY+0.5
  
  monkey.collide(invisibleGround);

 spawnBanana() ;
  
drawSprites();
}

function spawnBanana() {
   if (frameCount % 80 === 0) {
   banana  = createSprite(600, 100, 40, 10);
    banana.y = Math.round(random(120, 200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
     banana.lifetime=200;
     
     foodGroup.add(banana);
     
     
}
}

function spawnObstacles() {
  if (frameCount % 300 === 0) {
    var obstacle = createSprite(400, 165, 10, 40);
    obstacle.velocityX = -6;
    obstacle.lifetime=100;
    
    obstacleGroup.add(obstacle);
  }
}