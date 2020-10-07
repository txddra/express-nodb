function timer(moment, format, next){

    console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));
    next()
};
module.exports = timer