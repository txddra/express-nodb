const express = require('express');
const router = express.Router();
let users = require('../models/usersArray.js')

const {
    getAllUsers
} = require('../controllers/userControllers.js')
router.get('/all-users', (req, res) => {
    //removed this:
    // res.status(200).send('My first Express Server');

    res.status(200).json({
        conformation: 'success',
        users
    })
});


//get one user based on id 
const {
    createNewUser
} = require('../controllers/userControllers.js')
router.get('/single-user/:id', (req, res) => {
    let foundUser = users.filter((user) => {
        if (user.id === req.params.id) {
            return res.json({
                confirmation: 'success',
                user
            })
        }
    })
    if (!foundUser.length) {
        return res.status(400).json({
            confirmation: 'fail',
            message: 'User Does Not Exist'
        })
    }
});


//when posting, whatever is put insdie the input is put inside the body
router.post('/create-user', (req, res) => {
    //error first handling/validate inputs
    if (!req.body.name || !req.body.email || !req.body.password) {
        return res.status(400).json({
            conformation: 'fail',
            message: 'All inputs must be filled'
        })
    }

    let existingUser = users.filter((user) => user.email === req.body.email);
    if (existingUser.length) {
        return res.status(400).send('User already Exists')
    }



    //creating an object
    const newUser = {};
    //values for newUser based on req.body inputs in postman 
    newUser.name = req.body.name;
    newUser.email = req.body.email;
    newUser.password = req.body.password;
    newUser.id = String(users.length + 1);

    //add the user to the array
    users.push(newUser);
    //return to the user
    return res.status(200).json({
        confirmation: 'Success',
        newUser
    })
    // res.send(newUser)
});

router.put('/update-user/:id', (req, res) => {
    let updateUser = req.body;

    users.filter((foundUser) => {
        if (foundUser.id === req.params.id) {
            foundUser.name = updateUser.name ? updateUser.name : foundUser.name;
            foundUser.password = updateUser.password ? updateUser.password : foundUser.password;

        }
    });
    //return array of users

    return res.status(200).json({
        message: 'User Updates',
        users
    })
});



router.delete('/delete-user/:id', (req, res) => {
    //filter user based on id parameter in 

    let removeUser = users.filter((foundUser) => {
        return foundUser.id !== req.params.id
    })

    users = removeUser;
    return res.status(200).json({
        confirmation: 'success',
        users
    });
});







module.exports = router