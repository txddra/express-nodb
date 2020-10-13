//name your function
//give it functionality
const router = require('../routes/userRoutes.js')
const users = require('../models/usersArray')

// getAllUsers
module.exports = {
    getAllUsers: (res, req) => {
        res.status(200).json({
            confirmation: 'Success',
            users
        });

    }
    // res.send(newUser)
}
//create a new user
// module.exports = {
    
// }

module.exports = {
    findOneUser:(req, res) => {
        let foundUser = users.filter((user) => {
          if (user.id === req.params.id) {
            return res.status(200).json({ confirmation: 'success', user });
          }
        });
        if (!foundUser.length)
          return res
            .status(400)
            .json({ confirmation: 'fail', message: 'User Does Not Exist' });
      }
}
 //

//update user
module.exports={
   updateUser: (req, res) => {
        //grab the inputted information
        let updatedUser = req.body;
      
        //search the users array
        users.filter((foundUser) => {
          //find the user
          if (foundUser.id === req.params.id) {
            //change values for user if inputted
            foundUser.name = updatedUser.name ? updatedUser.name : foundUser.name;
            foundUser.password = updatedUser.password
              ? updatedUser.password
              : foundUser.password;
          }
        });
        //return array of users
        return res.status(200).json({ message: 'User Updates', users });
}






module.exports={
    deleteUser:(req, res)=>{
        //filter user based on id parameter in 
    
        let removeUser = users.filter((foundUser)=>{
            return foundUser.id !== req.params.id
        })
    
        users = removeUser;
        return res.status(200).json({ confirmation:'success', users});
}
}