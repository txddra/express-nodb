 function logger(req,res,next ){
    //method: gets the verb (GET, PUT, POST)
    console.log(req.method, req.url, res.statusCode);
    next();

}

module.exports = logger 