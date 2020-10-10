const moment = require('../.gitignore/node_modules/moment/ts3.1-typings/moment')

function timer(req, res, next){

    console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));
    next();
};
module.exports = timer
