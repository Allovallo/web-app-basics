const express = require('express');
const exhbs = require('express-handlebars');

const app = express();

app.use(express.static('public'));
app.set('view engine', 'handlebars');
app.engine('hbs', exhbs({
    extname: 'hbs',
}));

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

