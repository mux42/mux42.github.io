//by maxime dourov

const defaultFeedBack = "";
const missFeedBack = "you missed";
const hitFeedBack = "you hitted";
const destroyedFeedBack = "you destroyed something";

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

	if (shoot(x,y)){
		displayIcon(x,y,explodeFile);
	}
	else {
		displayIcon(x,y,missFile);
	}
	if (killFinder()) end();
}


function end(){
	message("you win");
}


function reset(){
	document.getElementByID("board").innerHTML = "";
	message("test");
	start();
}

//==================================================//
start();