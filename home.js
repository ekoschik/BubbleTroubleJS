

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

var draw_rect = function(x, y, width, height, fill_color, border_color, border_width) {
	context.beginPath();
	context.rect(x, y, width, height);
	context.fillStyle = fill_color;
	context.fill();
	context.lineWidth = border_width;
	context.strokeStyle = border_color;
	context.stroke();
}

var draw_circle = function(center_x, center_y, rad, fill_color, border_color, border_width) {
	context.beginPath();
	context.arc(center_x, center_y, rad, 0, 2 * Math.PI, false);
	context.fillStyle = fill_color;
	context.fill();
	context.lineWidth = border_width;
	context.strokeStyle = border_color;
	context.stroke();
}

$(document).ready(function(){

	//setup, done after all elements load
	context = createContext();


	//tests for the draw_ functions
	draw_rect(50, 50, 100, 100, 'none', 'black', 2);
	draw_circle(CANVAS_WIDTH/2, CANVAS_HEIGHT/2, 45, 'red', 'black', 3);

});



