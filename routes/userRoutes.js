const express = require('express');
const router = express.Router();
let users = require('../models/usersArray.js')

const {getAllUsers} = require('../controllers/userControllers.js')
router.get('/all-users',getAllUsers);


//get one user based on id 
const{createNewUser} = require('../controllers/userControllers.js')
router.get('/single-user/:id',createNewUser);



router.put('/update-user/:id',(req, res)=>{
let updateUser = req.body;

users.filter ((foundUser)=>{
    if(foundUser.id === req.params.id){
        foundUser.name = updateUser.name ? updateUser.name :foundUser.name;
        foundUser.password= updateUser.password ? updateUser.password : foundUser.password;

    }
});
//return array of users

return res.status(200).json({message: 'User Updates', users})
});



router.delete('/delete-user/:id',(req, res)=>{
    //filter user based on id parameter in 

    let removeUser = users.filter((foundUser)=>{
        return foundUser.id !== req.params.id
    })

    users = removeUser;
    return res.status(200).json({ confirmation:'success', users});
});







module.exports=router