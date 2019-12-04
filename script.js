var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector(".button");

function resetColors() {
    color1.value = "#ff0000"
    color2.value = "#ffff00"
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    // css.textContent = body.style.background + ";";
    css.textContent = `linear-gradient(to right, ${hexRgb(color1.value)}, ${hexRgb(color2.value)});`;
}


function setGradient() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    // css.textContent = body.style.background + ";";
    css.textContent = `linear-gradient(to right, ${hexRgb(color1.value)}, ${hexRgb(color2.value)});`;
}

var shuffle = function (array) {
    var currentIndex = array.length;
    var temporaryValue, randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

function generateColor() {
    var hex = ['a', 'b', 'c', 'd', 'e', 'f', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    var color = '#';
    for (var i = 0; i < 6; i++) {
        shuffle(hex);
        color += hex[0];
    }
    return color;
}

function setRandomColors() {
    color1.value = generateColor();
    color2.value = generateColor();
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    // css.textContent = body.style.background + ";";
    css.textContent = `linear-gradient(to right, ${hexRgb(color1.value)}, ${hexRgb(color2.value)});`;
}

const hexa = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

const hexDec = (par) => { // convert number. HEX to DEC
    let parArray = par.split("");
    let decArray = [];
    parArray.forEach(n => {
        hexa.forEach((value, index) => {
            if (value.toString() === n.toString()) {
                decArray.push(index);
            }
        });
    })
    return (decArray[0] * 16) + decArray[1];
}

const hexRgb = (par) => { // convert color code. HEX to RGB
    let hexArray = par.split("");
    hexArray.shift();
    const num1 = hexDec(hexArray[0].toUpperCase().concat(hexArray[1]).toUpperCase());
    const num2 = hexDec(hexArray[2].toUpperCase().concat(hexArray[3]).toUpperCase());
    const num3 = hexDec(hexArray[4].toUpperCase().concat(hexArray[5]).toUpperCase());
    return (`rgb(${num1}, ${num2}, ${num3})`);
}


color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
button.addEventListener("click", setRandomColors);
resetColors();