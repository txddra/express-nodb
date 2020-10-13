const express = require('express');
const router = express.Router();
let users = require('../models/usersArray.js')

const {getAllUsers} = require('../controllers/userControllers.js')
router.get('/all-users',getAllUsers);


//get one user based on id 
const{findOneUser} = require('../controllers/userControllers.js')
router.get('/single-user/:id',findOneUser);

const {updateUser} = require('../controllers/userControllers.js')
router.put('/update-user/:id',updateUser);


const{deleteUser} = require('../controllers/userControllers.js')
router.delete('/delete-user/:id',deleteUser);







module.exports=router;