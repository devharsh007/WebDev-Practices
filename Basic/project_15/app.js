var screen = document.querySelector("#scr");

var plusBtn = document.querySelector("#plus");
var resetBtn = document.querySelector("#reset");
var minusBtn = document.querySelector("#minus");

let counter = 0;

plusBtn.addEventListener("click", updatePlus);
minusBtn.addEventListener("click", updateMinus);
resetBtn.addEventListener("click", updateReset);

function updatePlus() {
    counter += 1;   
    update();
}
function updateMinus() {
        counter -= 1;
    update();
}
function updateReset() {
    counter = 0;
    update();
}
function update() {
    screen.innerHTML = counter;
}
