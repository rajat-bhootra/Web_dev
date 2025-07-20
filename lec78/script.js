const randDelay = ()=>{
    return new Promise((resolve, reject) =>{
        timeout = 1 + 6*Math.random()
        setTimeout(() => {
            resolve()
        }, timeout*1000);
    })
}

const addmsg = async(item) => {
     await randDelay();
     let div = document.createElement("div")
     div.innerHTML = item
     document.body.append(div)
}

async function main() {
    
    let t = setInterval(() => {
       let last = document.body.getElementsByTagName("div");
       last = last[last.length - 1]
       if(last.innerHTML.endsWith("...")){
            last.innerHTML = last.innerHTML.slice(0, last.innerHTML.length - 3)
       }
       else{
            last.innerHTML += "." 
       }
    }, 700);
    
    let text = [">>> Initialized hacking now reading your data ",
        ">>> Reading your files ",
        ">>> Password files Detected ",
        ">>> Sending all passwords and personal files to server ",
        ">>> Cleaning up "]
        
    for (const msg of text) {
        await addmsg(msg)
    }
    
    await randDelay()
    clearInterval(t)
}

main()