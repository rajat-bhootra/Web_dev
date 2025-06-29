let arr = [1,3,5,7]

console.log(arr);
console.log(arr.length);

arr[0] = 4
console.log(arr);

console.log(arr.toString());
console.log(arr.join("_"));

console.log(arr.pop());

console.log(arr.push("Hello"));
console.log(arr);

let a1 = [1,2,3]
let a2 = [4,5,6]
let a3 = [7,8,9]

console.log(a1.concat(a2,a3));

let unsort_arr = [3,5,1,6,9,6,4,5,2]
console.log(unsort_arr.sort());
console.log(unsort_arr.splice(2,3));

// for (let index = 0; index < a1.length; index++) {
//     console.log(a1[index]);   
// }

for (const element of unsort_arr) {
    console.log(element);   
}

let new_arr = unsort_arr.map((e)=>{
    return e**2
})
console.log(new_arr);


let gt = (e)=>{
    if(e >= 5){
        return true
    }
    return false
}

console.log(unsort_arr.filter(gt));


let arr2 = [1,2,3,4,5,6]
const facto = (a,b)=>{
    return a*b
}
console.log(arr2.reduce(facto));

