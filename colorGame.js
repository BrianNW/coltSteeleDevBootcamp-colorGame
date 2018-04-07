var numSquares = 6;
var colors = [];
var pickedColor;
var colorDisplay = document.getElementById("colorDisplay"); //assigns the span element to a variable
var squares = document.querySelectorAll(".square");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
	
	setupModeButtons();		
	setupSquares();			
	reset();
}

function setupModeButtons() {
	// Mode button event listeners
		//Loop through list of buttons.  Can add more button for difficulty more efficiently this way.
		for(var i = 0; i < modeButtons.length; i++){
			modeButtons[i].addEventListener("click", function() {
				modeButtons[0].classList.remove("selected");
				modeButtons[1].classList.remove("selected");
				this.classList.add("selected");
				//Figure out how many squares to show. ternary operator to decide which difficulty
				this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
				
				// Before refactoring
				/* if(this.textContent === "Easy") {
					numSquares = 3;
				}else {
					numSquares = 6;
				}
				 */		
				reset();
			});
		}	
}

function setupSquares(){
	for(var i = 0; i < squares.length; i++)  {	
		//add click listeners to squares
		squares[i].addEventListener("click", function() {
			//grab color of clicked square
			var clickedColor = this.style.background;
			//then compare color to pickedColor
			if(clickedColor === pickedColor) {			
			messageDisplay.textContent = "Correct!";			
			resetButton.textContent = "Play again?";
						
			changeColors(clickedColor);
			h1.style.background = clickedColor;
			} else {
			this.style.background = "#232323";
			messageDisplay.textContent = "Try again!";
			}
		});
	} 	
}


function reset() {
	//generate all new colors
	colors = generateRandomColors(numSquares);
	//pick new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match picked Color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors"
	// change colors of squares
	messageDisplay.textContent = "";	
	
	// Loop through all the squares and update their color
	for(var i = 0; i < squares.length; i++) {
		if(colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		}else {
			squares[i].style.display = "none";
		}
	}
	h1.style.background = "steelblue";
}

/* easyBtn.addEventListener("click", function() {
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");	
	// creates only 3 squares
	numSquares = 3;
	//Then generate random colors with numSquares amount
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++) {
		if(colors[i]) {
			squares[i].style.background = colors[i];
		}else {
			squares[i].style.display = "none";
		}
	}
});

hardBtn.addEventListener("click", function() {
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
		// creates only 6 squares
		numSquares = 6;
		//Then generate random colors with numSquares amount
		colors = generateRandomColors(numSquares);
		pickedColor = pickColor();
		colorDisplay.textContent = pickedColor;
			for(var i = 0; i < squares.length; i++) {			
				squares[i].style.background = colors[i];			
				squares[i].style.display = "blocl";
			}
		
}); */

resetButton.addEventListener("click", function() {
	reset();
}); 

function changeColors(color) {
	//loop through all squares
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.background = color;		
	//change each color to match given color
	}
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	//make an array
	var arr = []
	//add num random colors to array
	for(var i = 0; i < num; i++) {
		//get random color and push into arr
		arr.push(randomColor());
				
	}
	// return that array
	return arr;
}

function randomColor() {
	//pick a "red" from 0-255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from 0-255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue" from 0-255
	var b = Math.floor(Math.random() * 256);
	return "rgb("+ r + ", " + g + ", " + b + ")";
}


