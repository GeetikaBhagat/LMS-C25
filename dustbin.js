class Dustbin {
    constructor(x, y) {
        var options = {
            isStatic: true
        }
        this.x = x;
        this.y = y;
        this.w = 200;
        this.h = 20;

        this.image = loadImage('dustbin.png')
        this.bottomB = Bodies.rectangle(this.x, this.y, this.w, this.h, options);

        this.leftB = Bodies.rectangle(this.x - this.w / 2, this.y - this.w / 2, this.h, this.w, options);

        this.rightB = Bodies.rectangle(this.x + this.w / 2, this.y - this.w / 2, this.h, this.w, options);

        World.add(world, [this.bottomB, this.leftB, this.rightB]);

    }
    show() {
        var posB = this.bottomB.position;
        push();
        translate(posB.x, posB.y)
        imageMode(CENTER);
        image(this.image, 0,-80, this.w, this.h + 200);
        pop();

        
    }
}

