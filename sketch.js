const Engine= Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myEngine, myWorld;
var bg;
var ground;
var boggie1,boggie2,boggie3;
var chain1;
var trainSound 
var crashSound
var flag = 0;
var collision;

function preload(){
  bg= loadImage("bg.jpg");
  trainSound = loadSound("train.mp3");
  crashSound = loadSound("train_crossing.mp3");
}
function setup() {
  createCanvas(1200,400);
  myEngine = Engine.create();
  myWorld= myEngine.world;

  ground = new Ground(600,380,1200,20);
  coach1=new Boggie(50,170,50,50);
coach2= new  Boggie(150,170,50,50);
coach3=new Boggie(250,50,50,50);
chain1=new Chain(coach1.body,coach2.body);
chain2=new Chain(coach2.body,coach3.body);
rock1= new Rock(1100,200,100,100);

}

function draw() { 
  background(bg);  
  Engine.update(myEngine);

  coach1.show();
  coach2.show();
  coach3.show();

  chain1.show();
  chain2.show();
 ground.show();
 rock1.show();
  var collision = Matter.SAT.collides(coach3.body,rock1.body);
    if(collision.collided)
  {
    flag=1;
   
   
  }
  if(flag ===1){
   textSize(30);
    stroke(3);
  fill('blue');
  text("CRASH",500,200);
   crashSound.play();
 }
  }


  function keyPressed(){
    if(keyCode===RIGHT_ARROW){
     Matter.Body.applyForce(coach3.body,{x:coach3.body.position.x,y:coach3.body.position.y},{x:0.5,y:0});
     //trainSound.play();
    }
  }
  
