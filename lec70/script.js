let boxes = document.getElementsByClassName("box")

function getRandomColor(){
        let R = Math.floor(Math.random()*255)
        let G = Math.floor(Math.random()*255)
        let B = Math.floor(Math.random()*255)
        return `rgb(${R}, ${G}, ${B})`
}

Array.from(boxes).forEach(e => {
    e.style.backgroundColor = getRandomColor()
    e.style.color = getRandomColor()
    e.style.border = `5px solid ${getRandomColor()}`
})