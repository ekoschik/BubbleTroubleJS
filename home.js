

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
	var bubbles = [ new Bubble(10, 'red'),
					new Bubble(15, 'green'),
					new Bubble(20, 'blue'),
					new Bubble(25, 'yellow'),
					new Bubble(30, 'black'),
					new Bubble(35, 'orange'),
					new Bubble(40, 'purple'),
					new Bubble(45, 'white'),
					new Bubble(50, 'none'),
	];
		
	setInterval(function() {

		draw_rect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT, '#FFFFAD', 'black', 3);
		for(var i = 0; i<bubbles.length; i++) bubbles[i].move();
		for(var i = 0; i<bubbles.length; i++) bubbles[i].draw();

	}, 8);
}

