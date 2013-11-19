
var CANVAS_WIDTH = 700;
var CANVAS_HEIGHT = 400;


var draw_rect = function(x, 
						 y, 
						 width, 
						 height, 
						 fill_color, 
						 border_color, 
						 border_width
) {
	context.beginPath();
	context.rect(x, y, width, height);
	context.fillStyle = fill_color;
	context.fill();
	context.lineWidth = border_width;
	context.strokeStyle = border_color;
	context.stroke();
}

var draw_circle = function(center_x, 
						   center_y, 
						   rad, 
						   fill_color, 
						   border_color, 
						   border_width
) {
	context.beginPath();
	context.arc(center_x, 
				center_y, 
				rad, 
				0, 
				2 * Math.PI, 
				false
	);
	context.fillStyle = fill_color;
	context.fill();
	context.lineWidth = border_width;
	context.strokeStyle = border_color;
	context.stroke();
}





function Bubble(rad, color) {

	this.radius = rad;
	this.fillcolor = color;
	this.outlinecolor = 'black';
	this.outlinesize = 2;
	
	//horizontal speed factor
	this.hsf = 25 / this.radius; 
	
	//vertical speed factor
	this.vsf = this.radius * .05 + 2.7;
	
	//initial values of tracking variables
	this.x = rad;
	this.height = CANVAS_HEIGHT * .5;
	this.vx = this.hsf;
	this.vy = 0;

	
	this.move = function() { 

		var leftx = this.x - this.radius;
		var rightx = this.x + this.radius;
		var topy = this.y + this.radius;

		//Horizontal speed is linear
		if(leftx < 0) 
			this.vx = this.hsf;
		if(rightx > CANVAS_WIDTH) 
			this.vx = -this.hsf;
		this.x = this.x + this.vx; 

		//Apply Vertical Speed to Height, which translates to a Y value
		this.height = this.height - this.vy;
		this.y = CANVAS_HEIGHT - this.height;

		//When a bubble hits the top, its velocity becomes zero
		if(this.y < 0) 
			this.vy = 0;

		//Bouncing
		if(topy > CANVAS_HEIGHT)
			this.vy = -this.vsf;

		//Gravity
		this.vy = this.vy + .05;
		
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

