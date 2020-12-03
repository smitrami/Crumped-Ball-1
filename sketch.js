
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var side1, side2, side3;
var ball;
var ground;
var world;
function setup() {
	createCanvas(800, 400);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;
	ground = new Ground(400, 380, 800, 10);
	side1 = new Dustbin(545, 265, 10, 150);
	side2 = new Dustbin(630, 340, 180, 10);
	side3 = new Dustbin(715, 265, 10, 150);
	ball = new Ball(50, 330, 40, 40);
	Engine.run(engine);

}


function draw() {
	background("#00EF91");
	ground.display();
	side1.display();
	side2.display();
	side3.display();
	ball.display();
	drawSprites();
	keypressed();

	//ball.collide(ground);
}
function keypressed() {
	if (keyCode === UP_ARROW) {
		if (ball.body.position.x < 200 && ball.body.position.y > 100) {
			Matter.Body.applyForce(ball.body, ball.body.position, { x: 65, y: -55 })
		}
		if (ball.body.position.x >= 200 && ball.body.position.y <= 100) {
			Matter.Body.applyForce(ball.body, ball.body.position, { x: 55, y: 150 })
		}
	}
}
