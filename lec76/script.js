// async function getdata() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(455)
//         }, 2000);
//     })
// }

async function getdata() {
    // let a = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let a = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify({
                    title: 'foo',
                    body: 'bar',
                    userId: 1,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
    let data = await a.json()
    return data
}

async function main() {
    console.log("loading modules");

    console.log("Do something else");

    console.log("Load data");
    let data = await getdata()

    console.log(data);

    console.log("Process data");
    console.log("Task 2");
}

main()  
// data.then((v) => {
//     console.log(data);

//     console.log("Process data");
//     console.log("Task 2");
// })




