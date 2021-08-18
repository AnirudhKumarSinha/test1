class Rock{
    constructor(x,y,width,height){
      //var options ={ isStatic: true}
      
      this.body =  Bodies.rectangle(x,y,width,height);
      World.add(myWorld,this.body);
      this.width = width;
      this.height = height;
      this.image=loadImage("rock1.png")
    }
    show()
    {
        imageMode(CENTER);
       
        image(this.image,this.body.position.x, this.body.position.y,this.width, this.height);

    }
  
  }
  