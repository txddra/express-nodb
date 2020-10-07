//created first express server
//adding a package that is included in node
const path = require('path');
//bring in the package we downloaded
const express=  require('express');
//needs to be invoked
const app = express();
//so other people can't see
require('dotenv').config()


const logger = require('./middlewares/logger')
const timer = require('./middlewares/timer')

//look for a port in my env file, if not there, go to '3000'
const port = process.env.PORT || 3000;

//looking for static files
// app.use(express.static(path.join(__dirname, 'public')));





//middleware, just a function, never forget to add the 'next' function or it will not work properly
// function logger(req,res,next ){
//     //method: gets the verb (GET, PUT, POST)
//     console.log(req.method, req.url, res.statusCode);
//     next();

// }
//anytime you have a middleware that's going to run every time.

// app.use(logger)
app.use(timer)

let users = [
    { id: '1', name: 'jd', email: 'jd@me.com', password: '123' },
    { id: '2', name: 'paul', email: 'paul@me.com', password: '123' },
    { id: '3', name: 'lois', email: 'lois@me.com', password: '123' },
    { id: '4', name: 'sidney', email: 'sidney@me.com', password: '123' },
    { id: '5', name: 'canton', email: 'canton@me.com', password: '123' },
  ];



app.listen(port,()=>{
console.log(`listening on ${port}`);
});

//1st route, no middleware
app.get('/',(req,res)=>{
    //removed this:
    // res.status(200).send('My first Express Server');

    res.status(200).json({conformation: 'success', users})
});