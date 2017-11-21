

var $one = document.getElementById('circle-red');
var $two =  document.getElementById('circle-green');
var $three = document.getElementById('circle-yellow');
var $for = document.getElementById('circle-blue');

var tab_board = [$one, $two, $three, $for];
var current_board = [];
var played_board = [];


$one.onclick = function() { 
	played_board.push(this);
	console.log(played_board);

 };
$two.onclick = function() { 
	played_board.push(this);
	console.log(played_board);


 };
$three.onclick = function() { 
	played_board.push(this);
	console.log(played_board);

 };
$for.onclick = function() { 
	played_board.push(this);
	console.log(played_board);
 };


function start_game (){
	var random = Math.floor(Math.random()*4);
	return ligth(random);
}

function ligth(random){

	for(var i = 0; i < current_board.length-1; i++)
	{
		current_board[i].classList.add('circle-ligth'); current_board[i].classList.remove('circle-ligth');
	}
		tab_board[random].classList.add('circle-ligth'); tab_board[random].classList.remove('circle-ligth');
	 console.log(tab_board[random]);

		current_board.push(tab_board[random]);
	 console.log(current_board);
}

function player_turn(){
	tab_board.onclick = function() {
		alert('OUI !!!!');
		// played_bord.push
		while(current_board === played_board){
		randomize();
		}
	}
	alert("game over !");
}


start_game();
