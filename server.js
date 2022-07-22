//Dependencies
const express = require("express");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
// const recipiesController = require('./controllers/recipies');

//initalizing the app
const app = express();

//configure the app settings
require("dotenv").config();
const PORT = process.env.PORT;


// database connection
const DATABASE_URL = process.env.DATABASE_URL;
mongoose.connect(DATABASE_URL);

const db = mongoose.connection; 

db.on('error', (error) => {
    console.error(error.message + 'mongodb error!');
});

db.on('connected', () => {
    console.log('mongoDB fully connected');
});

db.on('disconnected', () => {
    console.log('mongoDB disconnected');
});

//middlewear
app.use(express.urlencoded({ extended: false })); //body parser
app.use(express.static('public')) // makes assets in public folder available to the application
app.use(methodOverride('_method')) // allows us to use app.put and app.delete

//mount route
app.get('/', (req, res) => {
    res.redirect('/recipies')
})

//Router Middlewear
// app.use('/recipies', recipiesController)

//listen 
app.listen(PORT, () => {
    console.log(`im listening on port ${PORT}`)
})