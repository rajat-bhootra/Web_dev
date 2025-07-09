let button = document.getElementById("btn")

button.addEventListener("dblclick", ()=>{
    document.querySelector(".box").innerHTML = "Hello world!!!"
})

button.addEventListener("keydown", (e)=>{
        console.log(e);
})