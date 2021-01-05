class Chain{
constructor(bodyA,bodyB){
    var options={
        bodyA: bird.body,
        bodyB: constraintlog.body,
        stiffness:0.04,
        length:10
    
    }
     this.chain=Constraint.create(options);
    World.add(world,this.chain);






}
display(){
    strokeWeight(3);
    line(bird.body.position.x,bird.body.position.y,constraintlog.body.position.x,constraintlog.body.position.y);






}





}