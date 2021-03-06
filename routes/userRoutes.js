const express = require('express');
const router = express.Router();
let users = require('../models/usersArray.js')



const {getAllUsers, createUser, findOneUser, updateUser,deleteUser} = require('../controllers/userControllers')
// const {getAllUsers} = require('../controllers/userControllers.js')
router.get('/all-users',getAllUsers);
//create user
// const {createUser} = require('../controllers/userControllers.js')
router.post('/create-user', createUser)
//get one user based on id 
// const{findOneUser} = require('../controllers/userControllers.js')
router.get('/single-user/:id',findOneUser);
//update user
// const {updateUser} = require('../controllers/userControllers.js')
router.put('/update-user/:id',updateUser);

// delete user
// const{deleteUser} = require('../controllers/userControllers.js')
router.delete('/delete-user/:id',deleteUser);







module.exports=router