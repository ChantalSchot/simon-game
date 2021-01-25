var buttonColours = ["green", "red", "yellow", "blue"]; // Create an array for the four buttons

var gamePattern = []; // Create an empty array for the game pattern
var userPattern = [];

var started = false;
var level = 0;

// Setting a new random number between 0-3:
function nextSequence() {
	userPattern = [];
	var randomNumber = Math.floor(Math.random() * 4);
	var randomColour = buttonColours[randomNumber];	//Set random colour based on random number
	gamePattern.push(randomColour); //add random colour to game pattern

	$("#level-title").html("Level " + level);
	level++;

	$("#" + randomColour).fadeOut(100).fadeIn(100); //Flash chosen button
	playSound(randomColour);
}

function playSound(color) {
	var audio = new Audio("sounds/" + color + ".mp3"); //Play button sound
	audio.play();
}

function animatePress(color) {
	var button = $("#" + color);
	button.addClass("pressed");

	setTimeout(function() {
		button.removeClass("pressed");
	}, 100);
}

function checkAnswer(currentLevel) {
	if (userPattern[currentLevel] === gamePattern[currentLevel]) {
		if (userPattern.length === gamePattern.length) {
			setTimeout(function() {
				nextSequence();
			}, 1000);
		}
	} else {
		startOver();
	}
}

function startOver() {
	playSound('wrong');
	$("body").addClass("game-over");
	$("#level-title").html("Game over! <br>Press Any Key To Restart")

	started = false;
	level = 0;
	gamePattern = [];

	setTimeout(function() {
		$("body").removeClass("game-over");
	}, 200);
}

$("body").keypress(() => {
	if (!started) {
		started = true;
		nextSequence();
	}
});

$(".btn").click(e => {
	var clickedColour = e.target.id;
	if (clickedColour && started) {
		userPattern.push(clickedColour);

		playSound(clickedColour);
		animatePress(clickedColour);

		checkAnswer(userPattern.length - 1);
	}
});
