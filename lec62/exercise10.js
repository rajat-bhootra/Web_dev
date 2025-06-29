let rand1 = Math.random()
let first,sec, thr

if (rand1 < .33){
    first = "Crazy"
}
else if(.33 <= rand1 && rand1 < .66){
    first = "Amazing"
}
else {
    first = "fire"
}

let rand2 = Math.random()
if (rand2 < .33){
    sec = "Engine"
}
else if(.33 <= rand2 && rand2 < .66){
    sec = "Food"
}
else {
    sec = "Garments"
}

let rand3 = Math.random()
if (rand3 < .33){
    thr = "Bros"
}
else if(.33 <= rand3 && rand3 < .66){
    thr = "Limited"
}
else {
    thr = "Hub"
}

console.log(first,sec,thr);
