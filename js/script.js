var allCards = $("#boxcard div");
var allImages = [ "images/bulbasaur.jpg" , "images/caterpee.jpg" , "images/charmander.jpg" , "images/eevee.jpg" , "images/jigglypuff.jpg" , "images/meowth.jpg" , "images/pikachu.jpg" , "images/psyduck.jpg" , "images/squirttle.jpg" , "images/weedle.jpg" , "images/bulbasaur.jpg" , "images/caterpee.jpg" , "images/charmander.jpg" , "images/eevee.jpg" , "images/jigglypuff.jpg" , "images/meowth.jpg" , "images/pikachu.jpg" , "images/psyduck.jpg" , "images/squirttle.jpg" , "images/weedle.jpg"];

var nthChildCounter = 1;
var clickCounter = 0;
var clickedImage1 = 0;
var clickedImage2 = 0;


//used the Fisher-Yates Shuffle:

var shuffle = function(array) {
	"use strict";
    let counter = array.length;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        let index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
}

$(document).ready(function() {

	// shuffle the deck
	var newDeck = shuffle(allImages);
	
	//assign iamges to cards randomly
	for (i = 0; i <= allCards.length; i++) {
 		// This variable is so that counter will go from 1 to 20 cause nth child starts at 1, an array starts at 0, vaiable declared above so outside of loop and isn't reestablished at 1.

		$("#boxcard div:nth-child(" + nthChildCounter + ")").css("background-image" , "url(" + newDeck[i] + ")");

		nthChildCounter++;
	};

	// player clicks div
	// computer checks div and stores img in var
	// player clicks second div
	// computer checks div and stores img in var (wether or not they are same)
	$("#boxcard div").on("click", function() {
		clickCounter++; 
		if (clickCounter % 2 !== 0 ) {
			clickedImage1 = $(this).css("background-image");
			console.log(clickedImage1);
		} else if (clickCounter % 2 == 0 ) {
			clickedImage2 = $(this).css("background-image");
			console.log(clickedImage2);
			// need another if statement to check if image is the same 
			if (clickedImage1 == clickedImage2 ) {
				alert("A Match!");
			} else {
				alert("Try again");
			}
		};
});

});

