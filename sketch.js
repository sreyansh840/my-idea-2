var gameState="welcome";
var welcomePic ;
var welcome,arrow;


function preload(){
  welcomePic=loadImage("loading.gif");
}


function setup() {
  createCanvas(displayWidth-20,displayHeight-200);
  welcome=createSprite(650,300,50,50);

}

function draw() {
  background(220);
  drawSprites();
  
  if(gameState==="welcome"){
  welcome.addImage(welcomePic);
}

}