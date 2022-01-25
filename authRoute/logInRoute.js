const router = require('express').Router();
const bcrypt = require('bcrypt');
const user =require('../Schema/userSchema');
const jwt =require('jsonwebtoken');

router.route('/').post( (req,res)=>{
    const logUser=req.body;
    
            user.findOne({email:logUser.email},(err,doc)=>{
               
                const tokenData={doc,date: new Date() }
                bcrypt.compare(logUser.password, doc.password, function(err, result) {
                    if(result)
                    {    const token=jwt.sign(tokenData,'skhatLaunda');
                         res.cookie("auth",token,{maxAge:1000*60*60,SameSite:false,secure:true}).json({isUserLoggedIn:true});
                    }
                    
                     else{
                         res.status(400).json({isUserLoggedIn:false})
                     }
                });
                      
                
            })
   
})



module.exports=router;
