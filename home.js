


$(document).ready( function() {
	
	// After the canvas object exists, the 'context' object
	// must be created before anything can draw to the context
	var canvas = document.getElementById("mainCanvas");
    var ratio = 1;
    canvas.width = CANVAS_WIDTH * ratio;
    canvas.height = CANVAS_HEIGHT * ratio;
    canvas.style.width = CANVAS_WIDTH + "px";
    canvas.style.height = CANVAS_HEIGHT + "px";
    canvas.getContext("2d").setTransform(ratio, 0, 0, ratio, 0, 0);
    context = canvas.getContext("2d");
	
	//Register Key Handler
	$(document).keyup(function(e){KeyUp_Handler(e);});
	$(document).keydown(function(e){KeyDown_Handler(e);});
	
	//Run Game
	RunGame();

});

