const express = require('express');
const app = express();



app.get('/', (req, res) => {
    res.send('Here my form will go')
})


app.get('/contact', (req, res) => {
    res.send('contact info will be here')
})


app.listen(3000, () => {
    console.log("server is running at local host 3000")
})


// testing changes on this branch