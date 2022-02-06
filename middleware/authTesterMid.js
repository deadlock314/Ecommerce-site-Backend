 const jwt =require('jsonwebtoken');
const userAuth=require('../Schema/userAuthSchema')


const authTesterMiddleware=(req,res,next)=>{
    
    jwt.verify(req.cookies.auth, process.env.SECRECT ,(err,data)=>{
       
    if(typeof(data)=='undefined')
        res.status(302).json({isUserAdded:false,isUserLoggedIn:false});
    
    else 
        { 
            userAuth.findOne({email:data.doc.email},(err,doc)=> {
                if(doc.email==data.doc.email)
                {
                    req.id=data.doc.userId;
                    next();
                }
                   
                else
                   res.status(302).json({isUserAdded:false,isUserLoggedIn:false});
           })
           
        }
       
        
    })
}

module.exports=authTesterMiddleware;