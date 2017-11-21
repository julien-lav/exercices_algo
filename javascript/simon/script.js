

var $one = document.getElementById('circle-red');
var $two =  document.getElementById('circle-green');
var $three = document.getElementById('circle-yellow');
var $for = document.getElementById('circle-blue');

var tab_board = [$one, $two, $three, $for];
var current_board = [];
var played_bord = [];


$one.onclick = function() { 
	played_board.push(this);
	//console.log(played_board);

 };
$two.onclick = function() { 
	played_board.push(this);
	//console.log(played_board);


 };
$three.onclick = function() { 
	played_board.push(this);
	//console.log(played_board);

 };
$for.onclick = function() { 
	played_board.push(this);
	//console.log(played_board);
 };


function randomize (){
	var random = Math.floor(Math.random()*4);
	return ligth(random);
}

function ligth(random){

	for(var i = 0; i < current_board.length-1; i++)
	{
		current_board[i].classList.add('circle-ligth').delay(1000).remove('circle-ligth').delay(1000);
	}

	tab_board[random].classList.add('circle-ligth').delay(1000).remove('circle-ligth');
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


start_game();
