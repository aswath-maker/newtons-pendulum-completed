class bob {
    constructor(x,y,r){

        var options={
            isStatic : false,      
            restitution : 1,
            density : 1,
            friction : 0.5

        }

        this.body = Bodies.circle(x,y,r,options);
       this.r = r;
       //this.body = Constraint.create(options);
       World.add(world, this.body);
        
    }

        display(){
            var angle = this.body.angle;
            push();
            translate(this.body.position.x, this.body.position.y);
            fill("white");
            ellipseMode(RADIUS);
            ellipse(0,0,this.r,this.r);
             pop();

        }
    }
