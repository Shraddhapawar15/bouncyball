class Box{
constructor(x,y,width,height){

var options={                //JSON datastructure
    'restitution':1.0,
    'friction':0.8,
    'density':0.8
}

this.body=Bodies.rectangle(x,y,width,height,options);
this.width=width;
this.height=height;

World.add(world,this.body);
}

display()
{
    var pos=this.body.position;
    rectMode(CENTER);
    rect(pos.x,pos.y,40,50);
}

}