var colorStock = ["#662400", "#006663", "#00B3AD", "#C2C0A6", "#6A8C69", "#024554", "#EF6024", "#90A19D", "#363432", "#196774", "#F0941F"]
var btn = document.querySelector("#btn");
var color = document.querySelector(".color")
function genRandNum(){
    return Math.floor(Math.random() * colorStock.length);   
} 
btn.addEventListener("click", function () {
    let rand = genRandNum();
    document.body.style.backgroundColor = colorStock[rand];
    color.innerHTML = colorStock[rand];
})
