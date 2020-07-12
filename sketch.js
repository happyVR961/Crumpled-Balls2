var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	 bob1 = new bob(200,380,30);
	 bob2 = new bob(260,380,30);
	 bob3 = new bob(320,380,30);
	 bob4 = new bob(380,380,30);
	 bob5 = new bob(440,380,30);
	 roof1 = new roof(320,160,400,30);
	 rope1 = new Rope(bob1.body,{x:200, y:160});
	 rope2 = new Rope(bob2.body,{x:260, y:160});
	 rope3 = new Rope(bob3.body,{x:320, y:160});
	 rope4 = new Rope(bob4.body,{x:380, y:160});
	 rope5 = new Rope(bob5.body,{x:440, y:160});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof1.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}
function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(bob1.body, bob1.body.position,{x:85,y:85})
	}
}



