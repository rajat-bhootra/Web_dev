const express = require('express')
const app = express()
const port = 3000
const blog = require('./routes/blog')
const shop = require('./routes/shop')


app.use(express.static("public"))
app.use("/blog",blog)
app.use("/shop",shop)


app.get('/', (req, res) => {
    console.log("it is a get request.");
    res.send('Hello World!')
})

app.post('/', (req, res) => {
    console.log("It is a post request");
    res.send('Hello World Post!')
})

app.put('/', (req, res) => {
    console.log("It is a put request");
    res.send('Hello World Put!')
})

app.get('/index', (req, res) => {
    console.log("It is a index");
    res.sendFile('temp/index.html', {root : __dirname})
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
