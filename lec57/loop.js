for (let i = 0; i < 50; i++) {
    console.log(i+1);
}

let obj = {
    Name: "Rajat",
    Role: "Student",
    Branch: "Collage"
}

for (const key in obj) {
    const ele = obj[key];
    console.log(key,":", ele);
}

for (const c of "Rajat") {
    console.log(c);
}

let i = 0
while (i < 6) {
    console.log(i);
    i++;
}

let j = 3
do {
    console.log(j);
    j++;
} while (j < 4);