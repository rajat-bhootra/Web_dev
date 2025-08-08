async function sleep() {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(45)
        }, 3000);
    })
}

// IIFE
(async function main() {
    // let a = await sleep()
    // console.log(a);
    // let b = await sleep()
    // console.log(b);

    let [x,y, ...rest] = [1,2,3,4,5,6,7]
    console.log(x,y, rest);

    let obj = {
        a : 11,
        b : 23,
        c : 35
    }

    let {a,b} = obj
    console.log(a,b);
    
    let arr = [2,4,6]
    console.log(arr[0]+arr[1]+arr[2]);
    console.log(sum(...arr));

    
})()