class Stand{
    constructor(x,y,w,h){
        var options={
            isStatic:true

        }
        this.w = w
        this.h = h
        this.x = x
        this.y = y
        this.body=Bodies.rectangle(x,y,w,h,options)
        World.add(world,this.body)
    }
display(){
    push()
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        rectMode(CENTER)
        rect(0,0,this.w,this.h)
        pop()
    }
}