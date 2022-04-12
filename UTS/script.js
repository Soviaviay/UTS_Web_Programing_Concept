
const Kursor = document.getElementById("Kursor");

document.addEventListener("mousemove", e => {
    Kursor.setAttribute("style", "top: " + e.pageY + "px; left: " + e.pageX + "px;")
});

function random(Mycolor) {
    return Math.floor(Math.random() * Mycolor);
}

document.onclick  = function () { 
Warnawarni = "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";
Kursor.style.background = Warnawarni;
}