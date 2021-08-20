var currentCss = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");


// change the background to gradient
// background: linear-gradient(to right, red , blue);
function setGradientBackground() {
    body.style.background = "linear-gradient(to right, " +
                            color1.value +
                            " , " +
                            color2.value +
                            ")";
    // insert element.textContent
    currentCss.textContent = body.style.background + ";";
}

// // set color1 input event
color1.addEventListener("input", setGradientBackground)


// // set color2 input event
color2.addEventListener("input", setGradientBackground)

