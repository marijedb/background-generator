var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient(){
	var background = "linear-gradient(to right, " +  color1.value + " , " + color2.value + ")";
	body.style.background = background;
	css.textContent = background + ";";
}

color1.addEventListener("input", setGradient)
color2.addEventListener("input", setGradient)