const express = require('express');
const nodemon = require('nodemon');
const {connectToDb , getDb}= require('./db');



//init app & middleware

const app = express();


//connect to db
let db
connectToDb((err) => {
    if (err) {
        console.log('Could not connect to database');
        process.exit(1);
    } else {
        app.listen(3000, () => {
            console.log('Server is running on port 3000');
        });
        
        
        db= getDb();


    }
});


//routes

app.get('/developers', (req, res) => {
    res.json({
        message: 'Member login page'
    });


});
