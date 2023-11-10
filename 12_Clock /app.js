
let root = document.getElementById('clock');
console.log(root);

setInterval(function () { 
    let date = new Date();
    root.innerHTML = date.toLocaleTimeString();
}, 1000);