


var $one = document.getElementById('circle-red');
var $two =  document.getElementById('circle-green');
var $three = document.getElementById('circle-yellow');
var $for = document.getElementById('circle-blue');

var tab_board = [$one, $two, $three, $for];
var current_board = [];
var played_bord = [];

// var random = Math.floor(Math.random()*4);


function randomize (){
	var random = Math.floor(Math.random()*4);
	return ligth(random);
}
function ligth(random){

	tab_board[random].classList.add('circle-ligth');
	// console.log(tab_board[test]);

	current_board.push(tab_board[random]);

	// console.log(current_board);
}
function player_turn(){
	tab_board.onclick = function() {
		alert('OUI !!!!');
		// played_bord.push
		while(current_board === played_bord){
		randomize();
		}
	}
	alert("game over !");
}


player_turn();
