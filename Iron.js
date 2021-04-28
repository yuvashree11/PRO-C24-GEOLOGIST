class Iron {
	constructor(x,y,width,height){
		var options = {
			'density':30,
			'friction': 3,
			'restitution':0.8,
		}
	// assign options to the iron
	    this.body = Bodies.rectangle(x,y,50,20,options)
		this.width = 120;
        this.height = 120;
		World.add(world, this.body);

	}
	display()
	{
			var pos = this.body.position;	
			var angle = this.body.angle;
			push()
			translate(pos.x, pos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("black");
			rect(0, 0, this.width, this.height);
			pop()
	}

}