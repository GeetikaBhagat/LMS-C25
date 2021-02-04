class Dustbin {
    constructor(x, y) {
        var options = {
            isStatic: true
        }
        this.x = x;
        this.y = y;
        this.w = 200;
        this.h = 20;
        this.angle = 0

        this.image = loadImage('dustbin.png')
        this.bottomB = Bodies.rectangle(this.x, this.y, this.w, this.h, options);

        this.leftB = Bodies.rectangle(this.x - this.w / 2, this.y - this.w / 2, this.h, this.w, options);

        Matter.Body.setAngle(this.leftB, -1 * this.angle);

        this.rightB = Bodies.rectangle(this.x + this.w / 2, this.y - this.w / 2, this.h, this.w, options);

        Matter.Body.setAngle(this.leftB, this.angle);

        World.add(world, [this.bottomB, this.leftB, this.rightB]);

    }
    show() {
        var posB = this.bottomB.position;
        var posL = this.leftB.position;
        var posR = this.rightB.position;

        push();
        translate(posB.x, posB.y)
        imageMode(CENTER);
        image(this.image, 0,-80, this.w, this.h + 200);
        pop();

        
    }
}

