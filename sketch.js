const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground;
var fruit,rope;
var fruit_con;
var bunny 

var bg_img,rabbit,food; 
var button


function preload (){
  bg_img=loadImage("background.png"); 
  rabbit=loadImage("Rabbit.png"); 
  food=loadImage("melon.png"); 
}




function setup() 
{
  createCanvas(500,700);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,680,600,20);
  bunny = createSprite(200,620,100,100); 
  bunny.addImage(rabbit); 
  bunny.scale=0.2; 

  // creating button1 
  button=createImg("Cut_btn.png"); 
  button.position(217,30); 
  button.size(50,50)
  button.mouseClicked(drop)
  
  rope = new Rope(7,{x:245,y:30});
  fruit = Bodies.circle(300,300,20);
  Matter.Composite.add(rope.body,fruit);


  fruit_con = new Link(rope,fruit);
 

  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  
}

function draw() 
{
  background(bg_img); 
  rope.show();
 
  push(); 
  imageMode(CENTER); 
  image(food,fruit.position.x,fruit.position.y,100,100); 
  pop(); 
 
  Engine.update(engine);
  ground.show();

 drawSprites(); 


}

function drop(){
rope.break(); 
fruit_con.detach();    
}

