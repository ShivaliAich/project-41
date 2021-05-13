
var engine,world;
var umbrella,maxDrops ;
var drops= [];
var thunderIMG1,thunderIMG2,thunderIMG3,thunderIMG4, thunder;
var count;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
 thunderIMG1 = loadImage("images/thunderbolt/thunder1.png");
 thunderIMG2 = loadImage("images/thunderbolt/thunder2.png");
 thunderIMG3 = loadImage("images/thunderbolt/thunder3.png");
 thunderIMG4 = loadImage("images/thunderbolt/thunder4.png");
}

function setup(){
  createCanvas(800,800); 
    engine = Engine.create();
    world = engine.world;

    //bodies
    umbrella = new Umbrella(400,450);
    maxDrops = 100;
    for(var i=1;i<=maxDrops;i++){
        drops.push(new Drop(random(0,800),random(0,400)));
    }

    
    
}

function draw(){
    background(0);
    Engine.update(engine);
    umbrella.display();
    for(var i=0;i<maxDrops;i++){
        drops[i].display();
        drops[i].updateDrops();
    }
    if(frameCount% 60 ===0){
    count = frameCount;
    
    thunder = createSprite(random(0,800),random(0,400));
    var rand = Math.round(random(1,4));
    switch(rand)
    {
        case 1:
            thunder.addImage("running",thunderIMG1);
            break;
        case 2:
            thunder.addImage("running",thunderIMG2);
            break;
        case 3:
            thunder.addImage("running",thunderIMG3);
            break; 
            case 4:
            thunder.addImage("running",thunderIMG4);
            break;   
    }
    }
if(count +10 === frameCount && thunder)
    thunder.destroy();
    drawSprites();
    
}   

