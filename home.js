

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

var draw_rect = function(x, y, width, height, fill) {
	context.fillStyle=fill;
	context.fillRect(x, y, width, height);
}

var draw_circle = function(x, y, rad, fill, stroke) {
	context.beginPath();
	context.arc(x, y, rad, 0, 2 * Math.PI, false);
	context.fillStyle = fill;
	context.fill();
	context.lineWidth = 1;
	context.strokeStyle = stroke;
	context.stroke();
}

$(document).ready(function(){

	context = createContext();

	draw_rect(50, 25, 150, 100, 'green');

	draw_circle(190, 90, 45, 'red', 'black');

});



