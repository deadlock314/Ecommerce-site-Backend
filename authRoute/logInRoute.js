const router = require('express').Router();
const bcrypt = require('bcrypt');
const {userAuth} =require('../Schema/userAuthSchema');
const jwt =require('jsonwebtoken');
const credentialsMiddleware = require('../middleware/cookieCredentialsMid');

router.route('/').post( credentialsMiddleware ,(req,res)=>{
   
    
    const logUser=req.body;
    
            userAuth.findOne({email:logUser.email}).then((doc,err)=>{
                if(err)
                    res.status(400).json({isUserLoggedIn:false,isCorrectPassword:false,isNetworkError:true});
                else if(doc)
                {
                    const tokenData={doc,date: new Date() }
                    //console.log(doc)
                    bcrypt.compare(logUser.password, doc.password, (err, result)=> {
                        if(result){
                            const token= jwt.sign(tokenData, process.env.SECRECT);
                            res.cookie("auth",token ,{maxAge:1000*60*600,sameSite:'none'}).json
                            ({isUserLoggedIn:true,isCorrectPassword:true,isCorrectUser:true});
                        }
                        else
                            res.status(400).json({isUserLoggedIn:false,isCorrectPassword:false});
                   
                    })
                } 
                else
                res.status(400).json({isUserLoggedIn:false,isCorrectPassword:false,isCorrectUser:false})
                
        }).catch((err)=>{
                console.log(err)
                res.status(400).json({isUserLoggedIn:false,isNetworkError:true})
            })
   
})



module.exports=router;
