//CRUD Operations
use("crudDB")

// Create
db.createCollection("courses")

// db.courses.insertOne({
//     name: "Web Dev",
//     price: 2000,
//     assignments: 12,
//     projects: 5
// })

// db.courses.insertMany([
//     {
//         name: "Web Dev",
//         price: 2000,
//         assignments: 12,
//         projects: 5
//     },
//     {
//         name: "Data Structures",
//         price: 1800,
//         assignments: 20,
//         projects: 3
//     },
//     {
//         name: "Machine Learning",
//         price: 3500,
//         assignments: 15,
//         projects: 6
//     },
//     {
//         name: "Python Programming",
//         price: 1500,
//         assignments: 10,
//         projects: 4
//     },
//     {
//         name: "Java Development",
//         price: 2200,
//         assignments: 14,
//         projects: 5
//     },
//     {
//         name: "Mobile App Dev",
//         price: 3000,
//         assignments: 16,
//         projects: 7
//     },
//     {
//         name: "Cyber Security",
//         price: 2800,
//         assignments: 18,
//         projects: 4
//     },
//     {
//         name: "Cloud Computing",
//         price: 3200,
//         assignments: 13,
//         projects: 6
//     },
//     {
//         name: "DevOps",
//         price: 2700,
//         assignments: 11,
//         projects: 5
//     },
//     {
//         name: "AI Fundamentals",
//         price: 2500,
//         assignments: 9,
//         projects: 3
//     }
// ])

// Read
// let a = db.courses.find({projects: 5})
// console.log(a);

let b = db.courses.findOne({projects: 5})
console.log(b);

// Update
// db.courses.updateOne({projects: 5}, {$set:{projects: 3}})
db.courses.updateMany({projects: 3}, {$set:{projects: 5}})

// Delete
db.courses.deleteOne({price: 3500})
