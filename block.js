class Block{
    constructor(x,y,w,h){
        var options={
            restitution:0.4,
            friction:0.1

        }
        this.visibility=255
        this.w = w
        this.h = h
        this.x = x
        this.y = y
        this.body=Bodies.rectangle(x,y,w,h,options)
        World.add(world,this.body)
    }
score(){
    if(this.visibility<0 && this.visibility>-105){
        score++
    }
}
display(){
    if(this.body.speed<3){
        push()
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        rectMode(CENTER)
        rect(0,0,this.w,this.h)
        pop()
    }
    else{
push()
World.remove(world,this.body)
this.visibility-=5
pop()
    }

}
}