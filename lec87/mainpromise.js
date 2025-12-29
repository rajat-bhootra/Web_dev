import fs from "fs/promises"

let a = await fs.readFile("info.txt")
console.log(a.toString());

let b = await fs.appendFile("info.txt", "this is a promise.");
console.log(a.toString());

