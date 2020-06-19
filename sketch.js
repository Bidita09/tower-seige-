const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var block1;
var block2;
var block3;
var block4;
var block5;
var block6;
var block7;
var block8;
var block9;
var ground,platform;
var polygon,slingshot,polygon_image;

function preload(){
  polygon_image = loadImage("polygon");
}

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(600,height,1200,20);
  platform = new Ground(390,260,180,10);

  block1 = new Box (330,235,30,40);
  block2 = new Box (360,235,30,40);
  block3 = new Box (390,235,30,40);
  block4 = new Box (420,235,30,40);
  block5 = new Box (450,235,30,40);
  block6 = new Box (360,195,30,40);
  block7 = new Box (390,195,30,40);
  block8 = new Box (420,195,30,40);
  block9 = new Box (390,155,30,40);

  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);

  slingshot = new SlingShot(this.polygon,{x:100,y:200});

  
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  ground.display();
  platform.display();
  polygon.display();
  slingshot.display();
  imageMode(CENTER);
  image(polygon_image.polygon.position.x,polygon.position.y,40,40);

  drawSprites();
}
