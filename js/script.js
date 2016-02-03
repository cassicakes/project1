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
	"use strict"; // used this command from searching here. http://stackoverflow.com/questions/33001246/uncaught-syntaxerror-block-scoped-declarations-let-const-function-class-no
    let counter = array.length;

    while (counter > 0) {
        let index = Math.floor(Math.random() * counter);
        counter--;
        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }
    return array;
}

$(document).ready(function() {

	$(".card").flip ({
		axis: "y",
		trigger: "manual"
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

	$("#boxcard div .front").on("click", function() {
		$(this).parent().flip(true);
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
				matchedCounter++;
				if (matchedCounter == 10) {
					swal({   
						title: "You won baby girl!",   
						text: " ",   
						imageUrl: "images/nichead.png" 
					});
				}
			} else {
				setTimeout(function(){
					clickedCard1.parent().flip('toggle');
					clickedCard2.parent().flip('toggle');
				}, 900)
			}
		}
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

