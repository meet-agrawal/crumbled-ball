
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbin1,groundObject	
var world;

var engine,world,paper1,ground,dustbin1,dustbin2,

dustbin1,dustbin2,dustbin3=loadImage(dustbin.dustbin.js)
paper1=loadImage(paper.paper.png)

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	dustbin.addImage(duatbin1,dustbin2,dustbin3)
	paper.addImage(paper1)


	groundObject=new ground(width/2,670,width,20);
	dustbin1=new dustbin(1300,600,20,100);
	paper1=new paper(700,600,10)
	dustbin2=new dustbin(1240,620,20,100)
	dustbin3=new dustbin(1350,620,20,100)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 

  groundObject.display();
  paper1.display()
  dustbin1.display();
  dustbin2.display()
  dustbin3.display()

}drawSprite()

function keyPressed(){
if(keyCode===UP-ARROW)
matter.body.applyForce(paper1.body,paper1.body.position,{x:15,y:-15})
}



