class Box{

    constructor(x,y,width,height){
       var options ={
       
       restitution:0.8,
       friction:1.0,
       density:1.0, 
       }
       this.body = Bodies.rectangle(x,y,width,height,options);
       this.height = height ;
       this.width = width ;
       World.add(world,this.body)
    }
    display(){
      push();
      var pos = this.body.position;
      rectMode(CENTER);
      translate(pos.x,pos.y)
      fill ("white"); 
      rect(0,0,this.width,this.height)
      pop ();
    }
    
    
    }