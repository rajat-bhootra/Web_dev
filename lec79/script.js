let a = prompt("Enter First Number: ")
let b = prompt("Enter Second Number: ")
if (isNaN(a) || isNaN(b)) {
    throw "Invalid Input !!!"
}

let sum = parseInt(a) + parseInt(b)

function main() {
    let x = 5
    try {
        console.log("The sum is : ", sum * x);
        return true
    } catch (error) {
        console.log("Error Spotted!!!");
        return false
    }
    finally{
        console.log("Closing");
    }
}

let c = main()
