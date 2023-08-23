const express = require('express');
const exhbs = require('express-handlebars');

const app = express();

app.use(express.static('public'));
app.set('view engine', '.hbs');
app.engine(
    '.hbs',
    exhbs.engine({
        extname: '.hbs',
    }),
);

// http://localhost: 4444/
// http://localhost: 4444/about

app.get('/', (req, res) => {
    // console.log('Це колбек для app.get("/")');
    // console.log(req.url);
    // res.send('<h1>Привіт, це /</h1>');
    res.render('home');
});

app.get('/products', (req, res) => {
    // console.log('Це колбек для app.get("/")');
    // console.log(req.url);
    // res.send('<h1>Привіт, це /</h1>');
    res.render('products');
});

app.get('/about', (req, res) => {
    // console.log('Це колбек для app.get("/about")');
    // console.log(req.url);
    // res.send('<h1>Привіт, це /about</h1>');
    res.render('about');
});

app.listen(4444, () => { 
    console.log(`Application server is running on port ${4444}`);
});

