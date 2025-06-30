let boxes = document.getElementsByClassName("box")
console.log(boxes);
boxes[2].style.backgroundColor = "violet"

document.getElementById("yellow").style.backgroundColor = ("yellow")

document.querySelector(".box").style.backgroundColor = "brown"

document.querySelectorAll(".box").forEach(e => {e.style.backgroundColor = "aqua"})