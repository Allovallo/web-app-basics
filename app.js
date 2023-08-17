const express = require('express');
const app = express();

// http://localhost: 4444/
// http://localhost: 4444/about

app.get('/', () => {
    console.log('Це колбек для app.get("/")');
})

app.get('/about', () => {
    console.log('Це колбек для app.get("/about")');    
})

app.listen(4444, () => { 
    console.log(`Application server is running on port ${4444}`);
});

