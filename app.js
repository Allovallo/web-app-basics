const express = require('express');
const app = express();

app.use('/', () => {
    console.log('Це колбек для app.use('/')');
})

app.listen(4444, () => { 
    console.log(`Application server is running on port ${4444}`);
});