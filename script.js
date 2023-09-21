var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomButton = document.getElementById("randomButton");

// Color inputs

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

function setGradient() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    css.textContent = body.style.background + ";"
}

setGradient();

// Randomizer button 
// logic from https://css-tricks.com/snippets/javascript/random-hex-color/

randomButton.addEventListener("click", setRandom);

function setRandom() {
    var randomColor = Math.floor(Math.random() * 2 ** 24).toString(16).padStart(6, 0);
    var randomColor2 = Math.floor(Math.random() * 2 ** 24).toString(16).padStart(6, 0);
    color1.value = "#" + randomColor;
    color2.value = "#" + randomColor2;
    setGradient();
}