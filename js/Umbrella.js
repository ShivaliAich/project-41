class Umbrella {
    constructor(x,y){
        var options ={
            isStatic: true,
        }
        this.body = Bodies.circle(x,y,50,options);
        World.add(world,this.body);
        this.image = loadAnimation("images/WalkingFrame/walking_1.png","images/WalkingFrame/walking_2.png","images/WalkingFrame/walking_3.png","images/WalkingFrame/walking_4.png","images/WalkingFrame/walking_5.png","images/WalkingFrame/walking_6.png","images/WalkingFrame/walking_7.png","images/WalkingFrame/walking_8.png");
        //this.image.scale = 0.1;
    }
    display(){
        var pos1 = this.body.position;
        fill(255);
        imageMode(CENTER);
        animation(this.image,pos1.x,pos1.y,100,100);
    }
}