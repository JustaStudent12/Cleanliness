
var paperBody,ground,paperObject;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	paperObject=new ball(50,750,10,10);
	World.add(world,paperObject);
	
	engine = Engine.create();
	world = engine.world;
    

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	 b1=new Box(700,390,100,10);
	 World.add(world,b1);
	 b1.shapeColor=("red");
	 
	 b2=new Box(800,390,10,80);
	 World.add(world,b2);
	 b2.shapeColor=("red");
 
	 b3=new Box(600,390,10,80);
	 World.add(world,b3);
	 b3.shapeColor=("red");
 

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  b1.display();
  b2.display();
  b3.display();
  paperObject.display();
  drawSprites();
 
}

function keyDOWN() {
	if (keyCode===UP_ARROW) {
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
	}
}

