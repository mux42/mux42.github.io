//by maxime dourov

const explodeFile = "assets/explosion.png";
const missFile = "assets/sink.png";

const boatsIDs = [["A",5,0,0,0],["B",4,0,0,0],["C",3,0,0,0],["D",3,0,0,0],["E",2,0,0,0]];

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
	displayBoat(boatsIDs[0][2],boatsIDs[0][3],boatsIDs[0][4],"A",boatsIDs[0][1]);
	displayBoat(boatsIDs[1][2],boatsIDs[1][3],boatsIDs[1][4],"B",boatsIDs[1][1]);
	displayBoat(boatsIDs[2][2],boatsIDs[2][3],boatsIDs[2][4],"C",boatsIDs[2][1]);
	displayBoat(boatsIDs[3][2],boatsIDs[3][3],boatsIDs[3][4],"D",boatsIDs[3][1]);
	displayBoat(boatsIDs[4][2],boatsIDs[4][3],boatsIDs[4][4],"E",boatsIDs[4][1]);
}


function reset(){
	document.getElementById("board").innerHTML = "";
	message("");
	start();
}

//==================================================//
start();