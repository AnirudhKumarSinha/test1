class Boggie{
    constructor(x,y,width,height){
      //var options ={ isStatic: true}
      
      this.body =  Bodies.rectangle(x,y,width,height);
      World.add(myWorld,this.body);
      this.width = width;
      this.height = height;
      this.image=loadImage("coach.png");
      Matter.Body.setMass(this.body, this.body.mass*2);
    }
    show()
    {
        imageMode(CENTER);
       
        image(this.image,this.body.position.x, this.body.position.y,this.width, this.height);

    }
  
  }
  