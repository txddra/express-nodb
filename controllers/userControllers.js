//name your function
//give it functionality
const users = require('../models/usersArray')
module.exports = {
    getAllUsers: (res, req) => {
        res.status(200).json({
            confirmation: 'Success',
            users
        });

    }
    // res.send(newUser)
}
module.exports = {
    createNewUser: (req, res) => {
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
    }
}


// getAllUsers