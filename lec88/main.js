const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))


//app.get or app.post or app.put or app.delete(path, handler)
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/about', (req, res) => {
    res.send('About us')
})

app.get('/contact', (req, res) => {
    res.send('Contact us')
})

app.get('/blog', (req, res) => {
    res.send('Hello Blog!')
})

app.get('/blog/:slug', (req, res) => {
    // logic to fetch {slug} from the db
    // for URL:  http://localhost:3000/blog/chai-pe-charcha?mode=dark&region=in
    console.log(req.params); // output { slug: 'chai-pe-charcha' }
    console.log(req.query); // output { mode: 'dark', region: 'in' }
    res.send(`Hello ${req.params.slug}`)
})

// app.get('/blog/intro-to-js', (req, res) => {
//     // logic to fetch intro to js from the db
//     res.send('Intro to JS')
// })

// app.get('/blog/intro-to-py', (req, res) => {
//     // logic to fetch intro to python from the db
//     res.send('Intro to python')
// })

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})