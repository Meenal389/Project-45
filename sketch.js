var bg;
var gameState="Start";
var ship,simage;
var parrot,pimage;
var doctor,dimage;
var sea,seaimage;
var obstacle,obstacleimage;
var message,mimage;

function preload(){
bg=loadImage("bgimage.jpg")
simage=loadImage("ship.png")
pimage=loadImage("combined.png")
seaImage=loadImage("sea.jpg")
mimage=loadImage("message.jpg")
}
function setup() {
  createCanvas(displayWidth,displayHeight);
  Form1=new Form()
  sea=createSprite(displayWidth/2,displayHeight/2-200,displayWidth,displayHeight)
  sea.visible=false;
  sea.addImage(seaImage)
  sea.scale=2;
  doctor=createSprite(displayWidth/2,displayHeight/2+200,30,30)
  doctor.visible=false;
  ship=createSprite(doctor.x,doctor.y,50,30)
  ship.visible=false;
  ship.addImage(simage)
  parrot=createSprite(displayWidth/2,displayHeight/2,100,100)
  parrot.visible=false;
  parrot.addImage(pimage)
  parrot.scale=0.5;
  /*message=createSprite(displayWidth-300,displayHeight/2+200,50,30)
  message.visible=false;
  message.addImage(mimage)
  message.scale=0.5;*/
}

function draw() {
  background(bg);  

  if(gameState==="Start"){
    Form1.display()
  }


  if(gameState==="Play"){
    clear()
    ship.visible=true;
    parrot.visible=true;
    sea.visible=true;
    //message.visible=true;
    drawSprites();
    fill("black")
    textSize(20)
    textStyle("Bold")
    textFont("Times New Roman")
    text("Hello! I am Polly.", displayWidth/2-100,displayHeight/2-70)
    text("Dr.Dunold is a animal doctor and is ", displayWidth/2-250,displayHeight/2-40)  
    text("helping the Queen of Gwenland. Help ", displayWidth/2-250,displayHeight/2-10)    
    text("him escape the obstacles and get the ", displayWidth/2-250,displayHeight/2+20)  
    text("cure of the Queen's illness...", displayWidth/2-150,displayHeight/2+50)
    textSize(26)
    text("PRESS ENTER TO START PLAYING", displayWidth/2-200,100)
    if(keyDown("LEFT_ARROW")){
      ship.x-=5;
    }
    if(keyDown("RIGHT_ARROW")){
      ship.x+=5;
    }
     sea.velocityY=7
console.log(sea.y)
     if(sea.y>800){
       sea.y=displayHeight/2-200
     }
  }
 
}