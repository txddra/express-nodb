//created first express server
//adding a package that is included in node
const path = require('path');
//bring in the package we downloaded
const express=  require('express');
//needs to be invoked
const app = express();
//so other people can't see

const router = express.Router();
require('./.gitignore/node_modules/dotenv/types').config()
const morgan = require('morgan')
const users = require('./models/usersArray')
const logger = require('./middlewares/logger')
const timer = require('./middlewares/timer')
app.use(timer)
app.use(morgan('dev'))
app.use(express.json());
app.use(express.urlencoded({extended: false}))
//look for a port in my env file, if not there, g  '3000'

const userRoutes = require('./routes/userRoutes')
const port = process.env.PORT || 3000;

//routes middleware
app.use('/api/v1/users/', userRoutes)



//looking for static files
// app.use(express.static(path.join(__dirname, 'public')));


// router.get('/',(req,res)=>{
//   //removed this:
//   // res.status(200).send('My first Express Server');

//   res.status(200).json({conformation: 'success', users})
// });


// //get one user based on id 
// router.get('/user/:id',(req, res)=>{
// let foundUser =  users.filter((user)=>{
//   if(user.id === req.params.id){
//   return res.json({confirmation: 'success', user})
//   }
// })
// if(!foundUser.length){
// return res.status(400).json({confirmation: 'fail', message: 'User Does Not Exist'})}
// });




//middleware, just a function, never forget to add the 'next' function or it will not work properly
// function logger(req,res,next ){
//     //method: gets the verb (GET, PUT, POST)
//     console.log(req.method, req.url, res.statusCode);
//     next();

// }
//anytime you have a middleware that's going to run every time.

// app.use(logger)





//get all users
//1st route, no middleware
// router.get('/',(req,res)=>{
//     //removed this:
//     // res.status(200).send('My first Express Server');

//     res.status(200).json({conformation: 'success', users})
// });


//get one user based on id 
// app.get('/user/:id',(req, res)=>{
// let foundUser =  users.filter((user)=>{
//     if(user.id === req.params.id){
//     return res.json({confirmation: 'success', user})
//     }
//   })
//   if(!foundUser.length){
//   return res.status(400).json({confirmation: 'fail', message: 'User Does Not Exist'})}
// });

// app.get(('/user/:id,(req, res) =>{
//   users.filter((user)=>{
//   if(user.id ===req.params.id){
//     // return res.status(200).json({comfirmation: 'success', user});
// return res.json({conformation: 'success', user})
//   // }else{
//   //   return res.status(400).send('User does not exist');
//   })
  //do i need this? questions that need answers
  // res.send(req.params.id)
// })



app.listen(port,()=>{
console.log(`listening on ${port}`);
});

