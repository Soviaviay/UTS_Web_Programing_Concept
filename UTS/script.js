
const Kursor = document.getElementById("Kursor");

document.addEventListener("mousemove", e => {
    Kursor.setAttribute("style", "top: " + e.pageY + "px; left: " + e.pageX + "px;")
});

