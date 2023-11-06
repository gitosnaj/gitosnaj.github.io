const express = require('express');
const nodemon = require('nodemon');





//init app & middleware

const app = express();


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

//routes

app.get('/', (req, res) => {
    res.json({
        message: 'Member login page'
    });


});
