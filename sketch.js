const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world
var box1,box2,box3,box4,box5, ground

function setup(){
createCanvas(400,400);
engine=Engine.create();
world=engine.world;
ground=new Ground(200,320,400,20);
box1=new Box(200,200,27,27);
box2=new Box(180,100,23,23);
box3=new Box(190,200,27,27);
box4=new Box(210,100,23,23);
box5=new Box(220,200,27,27);


}

function draw(){
background("aqua");
Engine.update(engine);
ground.display();
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();


}


