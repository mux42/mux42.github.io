//by maxime dourov

function displayIcon(x,y,file){
	document.getElementById("board").innerHTML += "<div class=\"G"+x+y+"\"><style type=\"text/css\">.G"+x+y+" {grid-area: G"+x+y+"; background-image: url(\""+file+"\");}</style></div>";
}


function message(text){
	document.getElementById("feedBackText").textContent = text;
}


function getSelection(){
	return [+document.getElementById("xChoice").value, +document.getElementById("yChoice").value];
}