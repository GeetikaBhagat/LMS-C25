class Paper{
    constructor(x,y,r){
        var options = {
            isStatic: false,
            restitution: 0.4,
            friction: 0.5,
            density:1.2
        }
        this.r = r;
        this.x = x;
        this.y = y;
        this.image = loadImage('paper.png');
        this.body = Bodies.circle(this.x,this.y,this.r/2, options);
        World.add(world,this.body)    
             
    }
    show(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.image,0,0,this.r+10,this.r+10)
        pop();
    }
}