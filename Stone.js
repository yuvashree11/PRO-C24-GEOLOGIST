class Stone {
	constructor(x,y,width,height){
		var options = {
			'density':12,
			'friction': 0.9,
			'restitution':0.8,
		}
	// assign options to the stone
	    this.body = Bodies.rectangle(x,y,70,20,options)
		this.width = 120;
        this.height = 50;
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
			fill("red");
			rect(0, 0, this.width, this.height);
			pop()
	}

}