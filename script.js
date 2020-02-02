var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("body");

function setColor(){
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

    css.textContent = body.style.background + ";";
}
// function setColorText(){
//     css.innerHTML = "linear-gradient(to right, " + color1.value + ", " + color2.value + ");";
// }

color1.addEventListener("input", setColor);
// color1.addEventListener("input", setColorText);

color2.addEventListener("input", setColor);
// color2.addEventListener("input", setColorText);

// setColorText();


// All the commented out stuff is to change the h3 value into the #color value instead of the rgb() value. 