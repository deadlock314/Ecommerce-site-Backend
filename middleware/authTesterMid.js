 const jwt =require('jsonwebtoken');
const user=require('../schema/userSchema')



const authTesterMiddleware=(req,res,next)=>{
    
    jwt.verify(req.cookies.auth,'skhatLaunda',(err,data)=>{
        console.log(data)
       
    if(typeof(data)=='undefined')
    {
        res.status(302).json({isUserAdded:false,isUserLoggedIn:false});
    }
    else 
        { 
            user.findOne({email:data.doc.email},(err,doc)=> {
                if(doc.email==data.doc.email){
                   next();
                   
                }
                else{
               res.status(302).json({isUserAdded:false,isUserLoggedIn:false});
           }})
           
           }
       
        
    })
}

module.exports=authTesterMiddleware;