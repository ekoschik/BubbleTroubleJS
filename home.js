

var CANVAS_WIDTH = 700;
var CANVAS_HEIGHT = 400;

var createContext = function() {
    var canvas = document.getElementById("mainCanvas");
    var ratio = 1;
    canvas.width = CANVAS_WIDTH * ratio;
    canvas.height = CANVAS_HEIGHT * ratio;
    canvas.style.width = CANVAS_WIDTH + "px";
    canvas.style.height = CANVAS_HEIGHT + "px";
    canvas.getContext("2d").setTransform(ratio, 0, 0, ratio, 0, 0);
    return canvas.getContext("2d");
}

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
	context.arc(center_x, center_y, rad, 0, 2 * Math.PI, false);
	context.fillStyle = fill_color;
	context.fill();
	context.lineWidth = border_width;
	context.strokeStyle = border_color;
	context.stroke();
}







function Bubble(startx, 
				starty, 
				rad, 
				color, 
				_outlinecolor, 
				_outlinesize
) {

	this.radius = rad;
	this.fillcolor = color;
	this.outlinecolor = _outlinecolor;
	this.outlinesize = _outlinesize;

	this.x = startx + this.radius;
	this.y = starty + this.radius;
	this.Vx = 1;
	this.Vy = 1;


	this.topy = function() {return this.y - this.radius;}
	this.bottomy = function() {return this.y + this.radius;}
	this.leftx = function() {return this.x - this.radius;}
	this.rightx = function() {return this.x + this.radius;}



	this.move = function() { 
		
		if(this.leftx() < 0 || this.rightx() > CANVAS_WIDTH)
			this.Vx *= -1;

		if(this.topy() < 0 || this.bottomy() > CANVAS_HEIGHT) {
			this.Vy *= -1;
		}
			


		this.x = this.x + this.Vx; 
		this.y = this.y + this.Vy; 

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


var run = function() {

	var b1 = new Bubble(10, 100, 30, 'green', 'black', 2);
	var b2 = new Bubble(50, 300, 30, 'red', 'black', 5);
	

	setInterval(function() {
		b1.move();
		b2.move();

		draw_rect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT, 'white', 'black', 1);
		b1.draw();
		b2.draw();


	}, 3);

}


$(document).ready(function(){

	context = createContext();
	run();

});



