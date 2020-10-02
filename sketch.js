
var monkey , monkey_running
var banana ,bananaImage, obstacle,obstacleImage;
var FoodGroup, obstacleGroup
var score,ground;
var banana;
var survivalTime=0;
var score=0;


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png")
 
}



function setup() {
    monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1;
  
 FoodGroup = new Group();
 
}


function draw() {
background("white");
  
  stroke("white");
  textSize(20);
  fill("white");
  text("score: "+ score,300,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("survival Time: "+ survivalTime,100,50);
  
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  
  if(keyDown("space")&& monkey.y >= 100){
    monkey.velocityY = -20;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  
  monkey.collide(ground);
  
  food();
  Obstacle();
  drawSprites();
}

function food(){
  if(frameCount % 80 === 0){
 banana = createSprite(450,350,20,20);
    banana.y = Math.round(random(120,200))
  banana.addImage(bananaImage);
  banana.scale = 0.06;
    banana.velocityX = -3;
    banana.lifetime = 150;
    FoodGroup.add(banana);
  }
}
  
function Obstacle(){
  if(frameCount % 300 === 0){
    obstacle = createSprite(500,317,20,20);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.15;
    obstacle.velocityX = -3;
    obstacle.Lifetime = 30;
  }
}
