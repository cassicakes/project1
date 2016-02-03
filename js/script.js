var allCards = $(".card");
var allImages = [ "images/bulbasaur.jpg" , "images/caterpee.jpg" , "images/charmander.jpg" , "images/eevee.jpg" , "images/jigglypuff.jpg" , "images/meowth.jpg" , "images/pikachu.jpg" , "images/psyduck.jpg" , "images/squirttle.jpg" , "images/weedle.jpg" , "images/bulbasaur.jpg" , "images/caterpee.jpg" , "images/charmander.jpg" , "images/eevee.jpg" , "images/jigglypuff.jpg" , "images/meowth.jpg" , "images/pikachu.jpg" , "images/psyduck.jpg" , "images/squirttle.jpg" , "images/weedle.jpg"];

var nthChildCounter = 1;
var clickCounter = 0;
var clickedImage1 = 0;
var clickedImage2 = 0;
var clickedCard1 =  0;
var clickedCard2 = 0;
var newDeck;
var matchedCounter = 0;

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

	$(".card").flip ({
		axis: "y",
		trigger: "click"
	});

	function setBoard(){
		nthChildCounter=1;
		// shuffle the deck
		newDeck = shuffle(allImages);
		//assign iamges to cards randomly
		for (i = 0; i < newDeck.length; i++) {
	 		// This variable is so that counter will go from 1 to 20 cause nth child starts at 1, an array starts at 0, vaiable declared above so outside of loop and isn't reestablished at 1.
	 		
			$("div .card:nth-child(" + nthChildCounter + ") .back").css("background-image" , "url(" + newDeck[i] + ")");

			nthChildCounter++;
		};
	};
	// player clicks div
	// computer checks div and stores img in var
	// player clicks second div
	// computer checks div and stores img in var (wether or not they are same)
	$("#boxcard div .front").on("click", function() {
		clickCounter++; 
		$("#counter").html(clickCounter);
		if (clickCounter % 2 !== 0 ) {
			clickedCard1 = $(this);
			clickedImage1 = $(this).siblings().css("background-image");
		} else if (clickCounter % 2 == 0 ) {
			clickedImage2 = $(this).siblings().css("background-image");
			clickedCard2 = $(this);
			// need another if statement to check if image is the same 
			if (clickedImage1 == clickedImage2 ) {
				// clickedCard1.children().off('.flip');
				// figure oout how to make pairs unclickable
				// clickedCard2.children().off(".flip");
				matchedCounter++;
				if (matchedCounter == 10) {
					setTimeout(alert("You win baby girl!"), 1000);
				}
			} else {
				setTimeout(function(){
					clickedCard1.parent().flip('toggle');
					clickedCard2.parent().flip('toggle');
				}, 1000)
			}
		};
	});
	$("#reset").on("click", function() {
		clickCounter = 0;
		setBoard();
		$(".card").flip(false);
		$("#counter").html(clickCounter);
		matchedCounter = 0;
	});

setBoard();

});

