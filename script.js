var currentCss = document.querySelector("h3");
// .querySelector(.color) 取class的方法
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
// console.log(body);
// console.log(currentCss);
// console.log(color1);
// console.log(color2);

// set color1 input event
color1.addEventListener("input", function() {
    // test get value
    // console.log(color1);
    // console.log(color1.value);
    
    // change the background to gradient
    // background: linear-gradient(to right, red , blue);
    body.style.background = "linear-gradient(to right, " +
                            color1.value +
                            " , " +
                            color2.value +
                            ")";
})

// set color2 input event
color2.addEventListener("input", function() {
    // test get value
    // console.log(color2)
    // console.log(color2.value)

    // change the background to gradient
    body.style.background = "linear-gradient(to right, " +
                            color1.value +
                            " , " +
                            color2.value +
                            ")";
})