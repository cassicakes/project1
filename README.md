#Project1 (Memory Game)
## Memory Game

This is a simple point and click Memory game using jQuery. Click the card, find it's pair somewhere in the rest of the board. Play by your self or, challenge another playyer to beat your click score.

##Wire-frame
![Mock Up Screen Shot]
(Mock-Screen shot.png)

I actually strayed from my moc-up just a bit due to spacing issues. But I still kept the logos to the left and the paying board on the right for easy layout. 


##Approach and Application
	1. Identified what I could do myself, and executed. Created and linked html, css, and javascript. Mapped out basic html and css components. Created needed variables in Javascript. (all cards in one variable, and all images in an array)

	2. Needed to be able to randomly set board with images from array, so researched shuffle, and found "Fisher-Yates Shuffle," and had to implement "use strict command" for shuffle function to work. 

	3. Created a function to  shuffle deck, add random images to cards.

	4. Creaated a jQuery listener that on click did the following:
		*established two clicks as turns
		*checked to see if there was a match
		*turned the card over if there was no match, after specific amount of time
		*announced the winner if all cards were matched, and diplay alert if winner

	5. Implemented jQuery flip, and chagned html, and script where needed to get to de-bug

	6. Created buttons
		1. A click counter button, a count was already esablished so I linked that to display
		2. A reset button, which I designed to do the following:
			*set the click counter to 0
			*turn all cards over
			*set a new random board

	7. De dugged the ability to click already clicked cards, and cards that were matched

	8. Stlyed with Sweetalert

	9. Added more css by playing in inspect element
			

##Issues
*Didn't focus on responvie design. Didn't design mobile first, I know, I know. Will be applying later.
*If you get click crazy on the cards it may get buggy and you'll have to reset the game. 


##Credits
*jQUery Flip
*SweetAlert
*Fisher Yates Shuffle 
*"Use Stict" (had to find this command in stackoverflow to get shuffle to work)
*COde Pen: Mario Vidov
*General Aseembly instructors and T.A.s








