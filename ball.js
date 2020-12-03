class Ball {
    constructor(x, y, radius) {
        var options =
        {
            isStatic: false,
            //restitution: 1.0,
            friction: 1.0,
            density: 1.2
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.x = x;
        this.y = y;
        this.radius = radius;
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        push()
        translate(pos.x, pos.y);
        rectMode(CENTER);
        stroke("black");
        strokeWeight(2);
        fill("yellow");
        ellipse(50, 20, this.radius);
        pop();
    }
}