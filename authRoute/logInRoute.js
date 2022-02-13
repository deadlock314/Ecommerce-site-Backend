const router = require('express').Router();
const bcrypt = require('bcrypt');
const userAuth =require('../Schema/userAuthSchema');
const jwt =require('jsonwebtoken');

router.route('/').post( (req,res)=>{
    const logUser=req.body;
    //console.log(logUser)
    
            userAuth.findOne({email:logUser.email}).then((doc,err)=>{
                if(err)
                    res.status(400).json({isUserLoggedIn:false})
               else{
                    const tokenData={doc,date: new Date() }
                    bcrypt.compare(logUser.password, doc.password, (err, result)=> {
                        if(result){
                            const token= jwt.sign(tokenData, process.env.SECRECT);
                            res.cookie("auth",token ,{maxAge:1000*60*600,sameSite:'none',secure:true}).json({isUserLoggedIn:true,id:doc._id});
                        }
                        else
                            res.status(400).json({isUserLoggedIn:false})
                   
                    })
               }
                
        }).catch((err)=>{
                console.log(err)
                res.status(400).json({isUserLoggedIn:false})
            })
   
})



module.exports=router;
