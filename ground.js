class Ground{
    constructor(){
        var options={
            isStatic:true
        }
        this.ground = Bodies.rectangle(450,390,900,20,options)
        World.add(world,this.ground)
    }
    display(){
        fill("green")
        rect(this.ground.position.x,this.ground.position.y,900,20)
    }
}