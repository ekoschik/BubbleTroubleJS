

var BUTTON_LEFT = 0;
var BUTTON_RIGHT = 0;





var left_strcode = "z";
var right_strcode = "c";




function KeyCodeToString(e) {
	var keynum;
	
	if(e.keyCode) {
		keynum = e.keyCode;
	}
	else if(e.which){
		keynum = e.which;
	}
	else {
		console.log("ERROR, keypress");
	}

	return String.fromCharCode(keynum);
}

function KeyUp_Handler(e){
	
	var key_str = KeyCodeToString(e);
	console.log("up" + key_str);

	if(key_str == left_strcode)
		BUTTON_LEFT = 0;
	if(key_str == right_strcode)
		BUTTON_RIGHT = 0;

}

function KeyDown_Handler(e){
	
	var key_str = KeyCodeToString(e);
	console.log("down" + key_str);

	if(key_str == left_strcode) {
		BUTTON_LEFT = 1;
		console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
	}
	if(key_str == right_strcode)
		BUTTON_RIGHT = 1;
	

}

