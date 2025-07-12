console.log("Promises");

let prom1 = new Promise((resolve, reject) => {
    let num = Math.random()
    if (num < .5) {
        console.log("not supported");
    }
    else {
        setTimeout(() => {
            console.log("Yes I am done");
            resolve("done")
        }, 3000);
    }
})

let prom2 = new Promise((resolve, reject) => {
    let num = Math.random()
    if (num < .5) {
        console.log("not supported 2");
    }
    else {
        setTimeout(() => {
            console.log("Yes I am done 2");
            resolve("done 2")
        }, 1000);
    }
})

let p3 = Promise.allSettled([prom1, prom2]) //.all .allSettled

p3.then((e) => {
    console.log(e);
}).catch((err)=>{
    console.log(err);
})