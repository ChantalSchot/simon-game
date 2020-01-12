var buttonColours = ["green", "red", "yellow", "blue"]; // Create an array for the four buttons
var gamePattern = []; // Create an empty array for the game pattern

// Setting a new random number between 0-3:
function nextSequence() {
	var randomNumber = Math.floor(Math.random() * 4);
	var randomChosenColour = buttonColours[randomNumber];	//Set random colour based on random number
	gamePattern.push(randomChosenColour); //add random colour to game pattern
		$("#" + randomChosenColour).fadeOut(100).fadeIn(100); //Flash chosen button

	var audio = new Audio("sounds/" + randomChosenColour + ".mp3"); //Play button sound
	audio.play();

	console.log(gamePattern);
}

$("body").on("click", function() {
		nextSequence();
});
