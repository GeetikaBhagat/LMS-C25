
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball, ground;
var dustbin;
function setup() {
	createCanvas(1600, 400);

	engine = Engine.create();
	world = engine.world;

	ball = new Paper(400, height-20, 40)
	//Create the Bodies Here.
	ground = new Ground(width/2, height - 10, width, 20)

	dustbin = new Dustbin(1200,350);
	


	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	Engine.update(engine)
	background(230);

	ball.show();
	ground.show();
	dustbin.show();

}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:80,y:-80})
	}
}
