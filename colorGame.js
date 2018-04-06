var colors = [
	"rba(255, 0, 0)",
	"rba(255, 255, 0)",
	"rba(0, 255, 0)",
	"rba(0, 255, 255)",
	"rba(0, 0, 255)",
	"rba(255, 0, 255)"
]

var squares = document.querySelectorAll(".square");
var pickedColor = colors[3];
var colorDisplay = document.getElementById("colorDisplay"); //assigns the span element to a variable

colorDisplay.textContent = pickedColor;
//Makes the colorDisplay show the picked color array indice


for(var i = 0; i < squares.length; i++)  {
	//add initial colors to squares
	//iterates through all the color indices
	squares[i].style.backgroundColor = colors[i];
	
	//add click listeners to squares
	squares[i].addEventListener("click", function () {
		//grab color of clicked square
		var clickedColor = this.style.background;
		//then compare color to pickedColor
		if(clickedColor === pickedColor) {
			
		} else {
			
		}
	}
} 