function displayIcon(x,y,file){
	document.getElementById("board").innerHTML += "<div id=\"G"+x+y+"\"><img src=\""+file+"\"><style type=\"text/css\">#G"+x+y+" {grid-area: G"+x+y+";}</style></div>";
}


function message(text){
	getElementById("feedBackText").innerHTML = text;
}


function getSelection(){
	return (+getElementById("xChoice").value, +getElementById("yChoice").value);
}