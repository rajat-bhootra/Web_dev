// Generate a dummy data in this format in a collection called employees in a db called company

// {
//     name: "Harry",
//     salary: 45000000,
//     language: "Python",
//     city: "New York",
//     isManager: true
// }

// Generate 10 such records when a button called generate data is clicked!
// Create an Express app with mongoose to acheive it
// Everytime the button is clicked, you should clear the collection 

const express = require('express')
const mongoose = require('mongoose');
const Employee = require('./models/Employees')
const app = express()
const port = 3000


mongoose.connect("mongodb://localhost:27017/company")
app.set('view engine', 'ejs')

const getRandom = (arr)=>{
    let r_num = Math.floor(Math.random() * (arr.length - 1))
    return arr[r_num]
}

app.get('/', (req, res) => {
    res.render('index', { foo: 'FOO' })
})

app.get('/generate', async (req, res) => {
    await Employee.deleteMany({})
    //Generate the data
    
    let randomNames = ["Rajat", "Vishesh", "Ankit", "Nimesh"]
    let randomLang = ["Java", "Python", "C++", "JS"]
    let randomCities = ["Indore", "Jodhpur", "Delhi", "Surat"]

    for (let index = 0; index < 10; index++) {


        let e = await Employee.create(
            {
                name: getRandom(randomNames),
                salary: Math.floor(Math.random()* 40000),
                language: getRandom(randomLang),
                city: getRandom(randomCities),
                isManager: Math.random() > 0.5 ? true : false
            }
        )

        e.save()
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
