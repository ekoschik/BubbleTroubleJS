
var CANVAS_WIDTH = 700;
var CANVAS_HEIGHT = 400;

function Bubble(rad, color) {

	this.radius = rad;
	this.fillcolor = color;
	this.outlinecolor = 'black';
	this.outlinesize = 2;

	this.x = 10;
	this.height = this.radius;
	this.y = function(){return CANVAS_HEIGHT - this.height};
	
	this.vx = 50/this.radius;
	this.vy = 0;

	this.leftx = function() {return this.x - this.radius;}
	this.rightx = function() {return this.x + this.radius;}

	this.move = function() { 

		//  X		
		if(this.leftx() < 0) this.vx = Math.abs(this.vx)
		if(this.rightx() > CANVAS_WIDTH) this.vx = -Math.abs(this.vx);
		this.x = this.x + this.vx; 

		//  Height
		this.height = this.height - this.vy;
		if(this.y < 0) this.vy = Math.abs(this.vy);
		if(this.y + this.radius > CANVAS_HEIGHT)
			this.vy = -this.radius / 10;
		this.vy = this.vy + .05;
		this.y = CANVAS_HEIGHT - this.height;



	}

	this.draw = function() {
		draw_circle(this.x, 
					this.y, 
					this.radius, 
					this.fillcolor, 
					this.outlinecolor, 
					this.outlinesize
		);
	}

}


// initializer:
// 	radius
// 	x
// 	color
// 	horizontalSpeed=HORIZONTAL_SPEED_CONSTANT/(radius);
// 	height=radius*6;
// 	verticalSpeed=-.1;
// 	y=600-100-height;

// move:
// 	x+=horizontalSpeed;
// 	if(x-radius<=0)
// 		horizontalSpeed = Math.abs(horizontalSpeed);
	
// 	if(x+radius>=800)
// 		horizontalSpeed= -Math.abs(horizontalSpeed);
	
// 	y-=verticalSpeed;
// 	verticalSpeed-=GRAVITY;
	
// 	if(y+radius>=500)
// 	{
// 		double temp = Math.sqrt((.1) + 2*(GRAVITY)*(height));
// 		hasBounced=true;
// 		verticalSpeed=temp;		
// 	}

