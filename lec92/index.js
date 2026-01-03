const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    let sitename = "Adidas"
    let search = "Search Now"
    res.render('index', {sitename: sitename, search: search})
})

app.get('/', (req, res) => {
    let blogtitle = "Why and How?"
    let blogContent = "It is a demo text"
    res.render('temp/blogpost.html', {blogtitle : blogtitle,blogContent: blogContent})
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})