const moment = require('moment')

function timer(req, res, next){

    console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));
    next();
};
module.exports = timer
