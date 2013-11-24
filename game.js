

var MAXBUBBLESIZE = 70;
var MINBUBBLESIZE = 10;

var BubblesList = [];


function initdots_allcolors(){
	for( var i = 0; i<ColorsList.length+10; i++)
		BubblesList.push(new Bubble(40, random_color(), i * 20, i*10))
}

function initdots_allsizes(){
	var step = 5;
	for( var i = MAXBUBBLESIZE; i>=MINBUBBLESIZE; i-=step)
		BubblesList.push(new Bubble(i, random_color(), i*10, 300))
}

function RunGame() {

	//initdots_allcolors();
	initdots_allsizes();

	setInterval(function() {

		draw_rect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT, '#FFFFAD', 'black', 3);
		for(var i = 0; i<BubblesList.length; i++) BubblesList[i].move();
		for(var i = 0; i<BubblesList.length; i++) BubblesList[i].draw();

		console.log("BUTTON_LEFT: " + BUTTON_LEFT + ", BUTTON_RIGHT: " + BUTTON_RIGHT);

	}, 8);


}


var ColorsList = [	"blue" ,
					"red" ,
					"yellow" ,
					"purple",
					"green" ,
					"coral" ,
					"midnightBlue" ,
					"olive" ,
					"orange",
					"aqua" ,
					"brown" ,
					"coral" ,
					"darkBlue" ,
					"darkGoldenRod" ,
					"darkMagenta" ,
					"darkSeaGreen" ,
					"darkTurquoise" ,
					"fireBrick" ,
					"gold" ,
					"indigo"  ,
					"saddleBrown" ,
					"salmon" ,
					"springGreen" ,
					"teal" ,
]

var cur_color = 0
var random_color = function() {
	var ret = ColorsList[cur_color];
	cur_color = cur_color + 1;
	if(cur_color >= ColorsList.length)
		cur_color = 0;
	return ret;
}