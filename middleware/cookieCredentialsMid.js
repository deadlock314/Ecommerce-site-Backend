
const credentialsMiddleware=(req, res, next)=> {
  res.header("Access-Control-Allow-Origin", req.headers.origin);
  console.log(req.headers)
   
    next()
  }
  module.exports=credentialsMiddleware;