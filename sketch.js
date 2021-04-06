var gameState="welcome";
var welcomePic ;
var welcome,arrow,arrowPic;
var groupStory,groupStage_1,groupStage_2,groupStart;


function preload(){
  welcomePic=loadImage("loading.gif");
  arrowPic=loadImage("arroow.png");
}


function setup() {
  createCanvas(displayWidth-20,displayHeight-200);
  welcome=createSprite(650,300,50,50);
  arrow=createSprite(700,600,50,50);
  welcome.addImage(welcomePic);
  arrow.addImage(arrowPic);
}

function draw() {
  background(220);
  drawSprites();

  
  if(gameState==="welcome"){
    text("Press to start",690,600);
   
    }

}