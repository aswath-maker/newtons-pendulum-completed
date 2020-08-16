const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
const Constraint = Matter.Constraint;



function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  
  
  tpb = new ground(200,80,299,20);
  bob1 = new bob(220,300,20);
  bob2 = new bob(240,300,20);
  bob3 = new bob(260,300,20);

  bob4 = new bob(280,300,20);
  bob5 = new bob(300,300,20);
  bob6 = new bob(320,300,20);

  bob7 = new bob(340,300,20);
  bob8 = new bob(360,300,20);
  bob9 = new bob(380,300,20);


  attacher = new SlingShot(bob1.body , {x : 220 , y : 100});
  attacher1 = new SlingShot(bob2.body , {x : 250 , y : 100});
  attacher2 = new SlingShot(bob3.body , {x : 280 , y : 100});

  attacher3 = new SlingShot(bob4.body , {x : 310 , y : 100});
  attacher4 = new SlingShot(bob5.body , {x : 340 , y : 100});
  attacher5 = new SlingShot(bob6.body , {x : 370 , y : 100});

  attacher6 = new SlingShot(bob7.body , {x : 400 , y : 100});
  attacher7 = new SlingShot(bob8.body , {x : 430 , y : 100});
  attacher8= new SlingShot(bob9.body , {x : 460 , y : 100});


}

function draw() {
  background("black");  
  Engine.update(engine);
  
  tpb.display();
 bob1.display();
 bob2.display();
 bob3.display();
 
 bob4.display();
 bob5.display();
 bob6.display();
 
 bob7.display();
 bob8.display();
 bob9.display();
 


 attacher.display();
 attacher1.display();
 attacher2.display();
 
 attacher3.display();
 attacher4.display();
 attacher5.display();
 
 attacher6.display();
 attacher7.display();
 attacher8.display();

}

function keyPressed(){
  if(keyCode === 32 ){
    Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-90,y:0});

  }
}