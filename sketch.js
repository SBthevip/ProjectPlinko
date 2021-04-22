const  Engine = Matter.Engine;
const  World = Matter.World;
const  Bodies = Matter.Bodies;

var plinkos = [];
var divisions = [];

var engine,world;
var particles;
var turn = 0;
var c = 0;
var gameState = "PLAY";

var divisionHeight = 300;
var score = 0;

function preload(){
  // mousePressed();
  calculateScore();
}

function setup() {
  var canvas = createCanvas(1350, 630);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/3.5, 10, divisionHeight));
   }


    for (var j = 30; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,160));
    }

     for (var j = 30; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,245));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,330));
    }

    

    
}
 


function draw() {
  background("black");
  Engine.update(engine);
  
  ground.display();
  if(gameState==="PLAY")
  {
  
    for (var i = 0; i < plinkos.length; i++) {
      
      plinkos[i].display();
      
    }

    for (var k = 0; k < divisions.length; k++) {
      
      divisions[k].display();
    }

    textSize(20)
    text("Score : "+score,20,30);

    textSize(20)
    text("Chances : "+turn,1200,30);

    textSize(20);
    text("Click anywhere to make the ball fall down for points. Remember you have only 5 chances to play. All the best !",180,30);
     
      if(particles!==undefined)
     {
        particles.display();
        if(particles.body.position.y>600)
        {
          if(particles.body.position.x<520)
          {
            score=score+500;
            particles=undefined;
          } 
          else if(particles.body.position.x>520 && particles.body.position.x<960)
          {
            score=score+50;
            particles=undefined;
          }
           else if(particles.body.position.x>960 && particles.body.position.x<1330)
          {
            score=score+200;
            particles=undefined;
          }
          
         
        }
      }

    if (turn>=5 && particles===undefined){
      gameState="END"
    }
  } 
  else if (gameState==="END")
  {
    textSize(65);
    text("Score : "+score,550,300);
    textSize(20);
    text("Nice try! If you want to have another chance press SPACE.",400,400);
    if(keyIsDown(32))
    {
      gameState="PLAY";
      turn=0;
      score=0;
    }
  }
  textSize(30);
  if (gameState==="PLAY"){
    for(var a=15;a<=455;a+=80){
      text("500",a,420);
    }
    for(var a=495;a<=895;a+=80){
      text("50",a,420);
    }
    for(var a=975;a<=1335;a+=80){
      text("200",a,420);
    }
  }
 
}
function mousePressed(){
  if(turn<=5)
  {
    turn++;
    particles=new Particle(mouseX,30,10);
  }
  



}

function calculateScore(){

}