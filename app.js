const express = require('express');
const app = express();

// http://localhost: 4444/
// http://localhost: 4444/about

app.get('/', (req, res) => {
    // console.log('Це колбек для app.get("/")');
    // console.log(req.url);
    res.send('<h1>Привіт, це /</h1>')
})

app.get('/about', (req, res) => {
    // console.log('Це колбек для app.get("/about")');
    // console.log(req.url);
    res.send('<h1>Привіт, це /about</h1>')
})

app.listen(4444, () => { 
    console.log(`Application server is running on port ${4444}`);
});

