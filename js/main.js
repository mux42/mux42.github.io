//by maxime dourov

const explodeFile = "assets/explosion.png";
const missFile = "assets/sink.png";

const boatsIDs = [["A",5],["B",4],["C",3],["D",3],["E",2]];

let board;
let boatsPos = [];


function start(){
	//board init
	board = [];
	for (let i = 0; i < 10; i++){
		let tmp = [];
		for (let j = 0; j < 10; j++){
			tmp.push(0);
		}
		board.push(tmp);
	}

	//board filling
	createShips();
}


function update(){
	let x = getSelection()[0];
	let y = getSelection()[1];
	let temp = shoot(x,y);

	if (temp == 1){
		displayIcon(x,y,explodeFile);
		message("you hit something!");
	}
	else if (temp == -1){
		displayIcon(x,y,missFile);
		message("you missed");
	}
	else {
		message("you alredy shot there")
	}
	if (killFinder()){end()} 
}


function end(isReveal = false){
	if (isReveal == false){
		message("you win");
	}
}


function reset(){
	document.getElementById("board").innerHTML = "";
	message("");
	start();
}

//==================================================//
start();