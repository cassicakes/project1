var allCards = $("#boxcard div");
var allImages = [ "images/bulbasaur.jpg" , "images/caterpee.jpg" , "images/charmander.jpg" , "images/eevee.jpg" , "images/jigglypuff.jpg" , "images/meowth.jpg" , "images/pikachu.jpg" , "images/psyduck.jpg" , "images/squirttle.jpg" , "images/weedle.jpg" , "images/bulbasaur.jpg" , "images/caterpee.jpg" , "images/charmander.jpg" , "images/eevee.jpg" , "images/jigglypuff.jpg" , "images/meowth.jpg" , "images/pikachu.jpg" , "images/psyduck.jpg" , "images/squirttle.jpg" , "images/weedle.jpg"];

var randomIndex = '';

$(document).ready(function() {
	
	for (i = 1; i <= allCards.length; i++) {
	randomIndex = Math.floor(Math.random() * allCards.length)
	console.log(randomIndex)
 	// This prints a random number set from 0-19 but repeats it's self. 
	$("#boxcard div:nth-child(" + i + ")").css("background-image" , "url(" + allImages[randomIndex] + ")");
 	// 
};
	
	// $("#boxcard div:nth-child(4)").css("background-image" , "url(" + allImages[3] + ")");


//end loop
});

