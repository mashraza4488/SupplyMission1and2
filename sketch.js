var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var container,containerImg;
var bg,bg1,background2,backgroundImg,bg2;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
	bg1=loadImage("Bg.png");
	containerImg=loadImage("basket.png");
	backgroundImg = loadImage("background.png")
}

function setup() {
	createCanvas(1300,600);

	bg2 = createSprite(650,300,1300,600)
	bg2.shapeColor="black"
	rectMode(CENTER);
	
	bg = createSprite(440,350,800,700);
	bg.visible=false;

	background2 = createSprite(900,300,800,700)
	background2.addImage(backgroundImg)
	background2.scale = 1.5

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(450, 150, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.89

	groundSprite=createSprite(width/2, height-35, 200,10);
	groundSprite.shapeColor=color(255)
	groundSprite.visible=false;


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 150 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	container = createSprite(width/3,height-70,20,10);
	container.addImage(containerImg);
	container.scale=0.55;
	container.depth=packageSprite.depth-1;

	Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER);
	
	packageSprite.x= helicopterSprite.x 
	packageSprite.y= packageBody.position.y 
  
  
	if(keyDown(RIGHT_ARROW)){
		helicopterSprite.x = helicopterSprite.x+3;
	}
	else if(keyDown(LEFT_ARROW)){
		helicopterSprite.x = helicopterSprite.x-3;
	}
  
	drawSprites();
  
	if(packageSprite.isTouching(container)){
	  textSize(50);
	  fill("black");
	  stroke("white");
	  textFont("ariel");
	  textAlign("center");
	  text("WE DID IT !",width/2,300);

	  bg.visible=true;
	  background2.visible=false;

	}
  
  }
  
  function keyPressed() {
   if (keyCode === DOWN_ARROW) {
	  // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
  
	  bg.addImage(bg1);
  
	  Matter.Body.setStatic(packageBody,false);
	  packageSprite.scale=0.3;

	}
  }
  
  
  
  