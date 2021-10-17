//maxime
/**
 * create ships on the board (10x10 matrix).
 *
 * generate random x,y,r to place a boat. test for presence of boats in the way
 * reject and re-roll if obstacle.
 * assign to selected corrdonates along boat length.
 *
 * @const {Array} boatsIDs 	the list of list [char,int] w/ boats ids and length
 * @extern {Array} board	grid of 10x10 filled with 0
 */
function createShips(){
	for (let i = 0; i < boatsIDs.length; i++){

		let rotation = random(0,1);
		let tempPos;

		if (rotation == 0){
			tempPos = [random(0,9),random(0,9-boatsIDs[i][1]-1)];
		}
		else {
			tempPos = [random(0,9-boatsIDs[i][1]-1),random(0,9)];
		}

		//until boat coordonates fit
		while (true){
			//test for obstacle along boat length
			let okPos = true;

			//go trough boat length
			for (let j = 0; j < boatsIDs[i][1]; j++){
				//vertical boat
				if (rotation == 0){
					if (isShip(tempPos[0], tempPos[1]+j)){
						okPos = false;
						break;
					}
				}
				//horizontal boat
				else {
					if (isShip(tempPos[0]+j, tempPos[1])){
						okPos = false;
						break;
					}
				}
			}

			if (okPos) break; //coordonates are valid

			rotation = random(0,1);
			if (rotation == 0){
				tempPos = [random(0,9),random(0,9-boatsIDs[i][1]-1)];
			}
			else {
				tempPos = [random(0,9-boatsIDs[i][1]-1),random(0,9)];
			}
		}

		//remeber values for furture display
		boatsIDs[i][2] = tempPos[0];
		boatsIDs[i][3] = tempPos[1];
		boatsIDs[i][4] = rotation;
		//assign values to valid coordonates
		for (let j = 0; j < boatsIDs[i][1]; j++){
			//vertical
			if (rotation == 0){
				board[tempPos[1]+j][tempPos[0]] = [boatsIDs[i][0],rotation];
			}
			//horizontal
			else {
				board[tempPos[1]][tempPos[0]+j] = [boatsIDs[i][0],rotation];
			}
		}
	}
	console.log(boatsIDs);
}


//Neal
/**
 * shoots the given coords.
 *
 * modify hit square acording to specs (0 => 1 | ["A",0 + 10])
 *
 * @method shoot
 *
 * @param  {int} x 	valid coordonate in the board
 * @param  {int} y 	valid coordonate in the board
 *
 * @return {int} 1 = hit | -1 = miss | 0 = previously shot
 */
function shoot(x, y){
	if (Array.isArray(board[y][x])){
		if (board[y][x][1] < 10){
			board[y][x][1] += 10;
			return 1;
		}
		return 0;
	}
	else {
		if (board[y][x] == 0) {
			board[y][x] += 1;
			return -1;
		}
		return 0;
	}
}


//Julien & simon
/**
 * test for win conditions.
 *
 * test each boat suqares for board[y][x][1] < 10
 * if none are, every boats is dead
 *
 * @method killFinder
 *
 * @return {bool} true = win | false = not yet
 */
function killFinder(){
	let boats = {"A":0,"B":0,"C":0,"D":0,"E":0};

	//go trough every square of the board
	for (let i = 0; i < board.length; i++){
		for (let j = 0; j < board[0].length; j++){
			//count up if still aive
			if (Array.isArray(board[i][j])){
				if (board[i][j][1] < 10){
					boats[board[i][j][0]] += 1;
				}
			}
		}
	}

	if (boats["A"] == 0){
		displayBoat(boatsIDs[0][2],boatsIDs[0][3],boatsIDs[0][4],"A",boatsIDs[0][1]);
	}
	else if (boats["B"] == 0){
		displayBoat(boatsIDs[1][2],boatsIDs[1][3],boatsIDs[1][4],"B",boatsIDs[1][1]);
	}
	else if (boats["C"] == 0){
		displayBoat(boatsIDs[2][2],boatsIDs[2][3],boatsIDs[2][4],"C",boatsIDs[2][1]);
	}
	else if (boats["D"] == 0){
		displayBoat(boatsIDs[3][2],boatsIDs[3][3],boatsIDs[3][4],"D",boatsIDs[3][1]);
	}
	else if (boats["E"] == 0){
		displayBoat(boatsIDs[4][2],boatsIDs[4][3],boatsIDs[4][4],"E",boatsIDs[4][1]);
	}
}


//Arthur
/**
 * test for the presence of a ship at coords
 * and 4 adjacent squares.
 *
 * ignores the out of grid suquares.
 *
 * @method isShip
 *
 * @param  {int} x 	valid coordonate in the board
 * @param  {int} y 	valid coordonate in the board
 *
 * @return {bool} true = yes | false = none
 */
function isShip(x,y){
	if (board[y][x] != 0){
		return true;
	}
	//up
	else if (x > 0 && board[y][x-1] != 0){
		return true;
	}
	//left
	else if (y > 0 && board[y-1][x] != 0){
		return true;
	}
	//down
	else if (x < board[0].length-1 && board[y][x+1] != 0){
		return true;
	}
	//right
	else if (y < board.length-1 && board[y+1][x] != 0){
		return true;
	}
	return false;
}


//Lionel
/**
 * generate a random number between two extremes (inculded).
 *
 * @method random
 *
 * @param {Number} m	the lower limit (included)
 * @param {Number} n 	the upper limit (included)
 *
 * @return {Number} the random number
 */
function random(m,n) {
	return Math.round((Math.random() * (n - m)) + m);
}
