
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);
  spawnBanana();
  spawnObstace();
  spawnMonkey();
}


function draw() {
 background(180);
 
if(keyDown("space")&& monkey.y >=200) {
        monkey.velocityY = -13;
    }
  monkey.velocityY = monkey.velocityY + 0.8
  
  
  var ground=createSprite(200,297,400,2.5);
  
  var survivalTime=0;
  stroke("white");
  textSize(20);
  fill("white");
  text("score:"+score,500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time"+survivalTime,100,50)
  
  
  monkey.collide(ground);
  drawSprites();
}
function spawnMonkey(){
  if (frameCount % 60 === 0){
       monkey = createSprite(50,280,20,50);
      monkey.addAnimation("running",monkey_running);
      monkey.scale=0.055;
  }
}
function spawnObstace(){
  if (frameCount % 60 === 0){
      obstacle = createSprite(400,285,20,50);
      obstacle.velocityX=-5;
      obstacle.addImage(obstaceImage);
      obstacle.scale=0.055;
      obstacle.lifetime = -1;
    
  }
}
function spawnBanana(){
  if (frameCount % 60 === 0){
      banana = createSprite(400,285,20,50);
      banana.y = Math.round(random(100,200));
      banana.velocityX=-5;
      banana.addImage(bananaImage);
      banana.scale=0.055;
      banana.lifetime = -1;
    
  }
}
 