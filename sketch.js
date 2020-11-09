const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine, world;
var object, object2;
function setup() {
  var canvas = createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  var options = {
    isStatic:true
  }
  object = Bodies.rectangle(200, 390, 200, 90, options);
  World.add(world,object);
  var ball_options = {
    restitution:1.0
  }
  object2 = Bodies.circle(200, 100, 20, ball_options);
  World.add(world, object2);
  console.log(object);
  console.log(object.position.x);
  console.log(object.position.y);
}

function draw() {
  background(0);  
  Engine.update(engine);

  rectMode(CENTER);
  rect(object.position.x, object.position.y, 400, 20);
  ellipseMode(CENTER);
  ellipse(object2.position.x, object2.position.y, 20, 20);
  
//  drawSprites();
}