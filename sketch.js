var starImg,bgImg;
var star, starBody;
var fairy, fairyBody, fairyImg, fairyVoice;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");
	fairyImg = loadAnimation("images/fairyImage1.png", "images/fairyImage2.png");
}

function setup() {
	createCanvas(800, 750);

	//playing fairyVoice sound
	fairyVoice.loop();

	//creating fairy sprite and adding animation for fairy
	fairy = createSprite(150,550);
	fairy.addAnimation("fairy", fairyImg);
	fairy.scale = 0.2;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution: 0.5, isStatic: true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
	background(bgImg);

	keyPressed();

	star.x = starBody.position.x 
	star.y = starBody.position.y 

	//console.log(star.y);
	console.log(fairy.x);

	//stopping star in the hand of fairy
	if(star.y > 500 && starBody.position.y > 500 && fairy.x >= 530 && fairy.x <= 570) {
		Matter.Body.setStatic(starBody, true);
	}

	drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false);
	}

	//moving fairy left and right
	if(keyDown(LEFT_ARROW)) {
		fairy.x = fairy.x - 5;
	}
	if(keyDown(RIGHT_ARROW)) {
		fairy.x = fairy.x + 5;
	}
}
