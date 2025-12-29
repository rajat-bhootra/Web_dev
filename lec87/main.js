const { error } = require("console");
const fs = require("fs")
// console.log(fs);

console.log("Starting");
// fs.writeFileSync("rajat.txt", "I am a student.")

fs.writeFile("info.txt", "this is the tut 87.",()=>{
    console.log("Done"); 
    fs.readFile("info.txt", (error, data) => {
        console.log(error, data.toString());
    } ) 
})

fs.appendFile("rajat.txt", " learning Web dev.", (e,d) => {
    console.log(d);
})

console.log("Ending");

