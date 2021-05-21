class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
if(pointA.x<220){
    strokeWeight(7);
    stroke("#301608")
    line(pointA.x-20, pointA.y, pointB.x-10, pointB.y+5);
    line(pointA.x-20, pointA.y, pointB.x+20, pointB.y+10);
    image(sling3,pointA.x-30,pointA.y-15,15,38)
}
else{
    strokeWeight(4);
            stroke("#301608")
            line(pointA.x+20, pointA.y, pointB.x-10, pointB.y+5);
            line(pointA.x+20, pointA.y, pointB.x+20, pointB.y+10);
            image(sling3,pointA.x+25,pointA.y-20,15,38)
}



            
        }
    }
    
}