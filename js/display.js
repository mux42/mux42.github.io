//by maxime dourov

function displayIcon(x,y,file){
	document.getElementById("board").innerHTML += "<div class=\"G"+x+y+"\"><style type=\"text/css\">.G"+x+y+
		" {grid-area: G"+x+y+"; background-image: url(\""+file+"\");}</style></div>";
}

function displayBoat(x,y,rot,typ,len){
	if (rot == 0){
		document.getElementById("board").innerHTML += "<div class=\"G"+x+y+"\"><style type=\"text/css\">.G"+x+y+
		" {grid-area: G"+x+y+" / G"+x+y+" / span "+len+" / G"+x+y+"; background-image: url(\"assets/"+typ+1+".png\");}</style></div>";
	}
	else {
		document.getElementById("board").innerHTML += "<div class=\"G"+x+y+"\"><style type=\"text/css\">.G"+x+y+
		" {grid-area: G"+x+y+" / G"+x+y+" / G"+x+y+" / span "+len+"; background-image: url(\"assets/"+typ+0+".png\");}</style></div>";
	}
}

function message(text){
	document.getElementById("feedBackText").textContent = text;
}


function getSelection(){
	return [+document.getElementById("xChoice").value, +document.getElementById("yChoice").value];
}