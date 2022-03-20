
const credentialsMiddleware=(req, res, next)=> {
  res.header("Access-Control-Allow-Origin", req.headers.host);
   
    next()
  }
  module.exports=credentialsMiddleware;