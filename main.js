

console.log("index.html is linked");


var allSquares = $(".square");
var movesPlayer = 0;
var player1Score = 0;
var player2Score = 0;
var winner = "nobody";


//GAME RENDERS!


var ticTacToe = ["t","i","c",".","t","a","c",".","t","o","e","."]
var i = 0;
var headerText = "";

var intervalId = setInterval(function (){
	headerText = headerText + ticTacToe[i];
	$("#tictactoe").text(headerText);
	i++;
	if (i === ticTacToe.length) {
		clearInterval(intervalId);
	}
}, 250);


//CHOOSING NAMES!


var newGameButton = $("#newGame");

var inputNamePlayer1 = "";
var inputNamePlayer2 = "";

$("#playerInput").on("click", function(event){
	inputNamePlayer1 = $("#input-name-player1").val();
	inputNamePlayer2 = $("#input-name-player2").val();
	$("#player1").text(inputNamePlayer1);
	$("#player2").text(inputNamePlayer2);
	player1Score = 0;
	player2Score = 0;
});


$("#wipeScores").on("click", function(event){
	location.reload();
})


//ready.to.play.




var winScenarios = [
$(".row1"), $(".row2"), $(".row3"),
$(".col1"), $(".col2"), $(".col3"),
$(".diag1"), $(".diag2")]


allSquares.one("click", function(event){
	// movesPlayer++;
	identifySquares();
});

var identifySquares = function identifySquares(){
	movesPlayer++;
	if (movesPlayer > 8){
		$(event.target).text("x").hide().fadeIn(500);
		winner = "nobody";
		gameOver();
	}else if (movesPlayer % 2 !== 0){
		$(event.target).text("x").hide().fadeIn(500);
		evaluateWinner();
	} else if (movesPlayer % 2 === 0){
		$(event.target).text("o").hide().fadeIn(500);
		evaluateWinner();
	}
}

var evaluateWinner = function evaluateWinner(){
	for (var i = 0; i < winScenarios.length; i++){	
		if (winScenarios[i].text() === "xxx"){
			winner = inputNamePlayer1;
			player1Score++;
			scoreKeeping();
			gameOver();
		} else if (winScenarios[i].text() === "ooo"){
			winner = inputNamePlayer2;
			player2Score++;
			scoreKeeping();
			gameOver();
		}
	}
}

var scoreKeeping = function scoreKeeping(){
	$("#enterScore1").text(player1Score);
	$("#enterScore2").text(player2Score);
}
scoreKeeping();

var winnerText = $("#winnerText");

var gameOver = function gameOver (){
	$("#myModal2").modal();
	winnerText.text(winner + " wins.");
}

$("#yes").on("click",function(){
	resetGame();
	console.log("reset game");
})

$("#no").on("click", function(){
	console.log("game is over");
	location.reload();
});

var resetGame = function resetGame(){
	movesPlayer = 0;
	console.log("reading reset game function");
	allSquares.text("").empty();
	allSquares.one("click", function(event){
	identifySquares();
});
};


//HOW TO CHOOSE A WINNER!



//the first player to align three of their boxes in a 
//row or a diagonal wins the game.

//if there is no alignment there is a tie



//BONUS! (IF THERE IS TIME)



//if someone reaches 5 won games they get to pick a 
//new object to use besides Xs and Os.






