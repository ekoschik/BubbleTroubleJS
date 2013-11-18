

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

$(document).ready( function() {
	context = createContext();
	run();
});

var run = function() {
	var bubbles = [ new Bubble(15, 'red'),
					new Bubble(20, 'green'),
					new Bubble(25, 'blue'),
					new Bubble(30, 'black'),
					new Bubble(35, 'orange'),
					new Bubble(40, 'purple'),
					new Bubble(45, 'none')];


	setInterval(function() {

		draw_rect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT, '#FFFFAD', 'black', 3);
		for(var i = 0; i<bubbles.length; i++) bubbles[i].move();
		for(var i = 0; i<bubbles.length; i++) bubbles[i].draw();

	}, 3);
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

