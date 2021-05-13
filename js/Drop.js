class Drop {
    constructor(x,y){
        var options ={
            isStatic : false,
            density: 0.5,
            restitution : 0.2,
            friction :0.1,
        }
        this.body = Bodies.circle(x,y,5,options);
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        fill(rgb(0,233,255));
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,5,5);
    }
    updateDrops(){
        if(this.body.position.y>800){
            Matter.Body.setPosition(this.body,{x:random(0,800),y:random(0,400)})
        }
    }
}