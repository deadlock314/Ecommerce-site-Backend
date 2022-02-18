const router = require('express').Router();
const bcrypt = require('bcrypt');
const {tempAuthUser,userAuth} =require('../Schema/userAuthSchema');
const User =require('../Schema/userDataSchema');


router.route('/signup/alphakey').post((req,res)=>{
    const userSideData=req.body;
    
    tempAuthUser.findOne({otp:userSideData.otp}).then((doc,err)=>{
        if(doc && doc.email==userSideData.email){  

            const newUserAuth= new userAuth({name:userSideData.name,email:userSideData.email,password:userSideData.paasword});
            const newUser= new User({userAccData:{name:userSideData.name,email:userSideData.email},userNonImpData:{}});

        bcrypt.hash(userSideData.password, 12, function (err, hashPassword){
            if(err)
            res.status(500).json({isUserSignedUp:false});
            else{   

                newUserAuth.password=hashPassword;
                //anonmoyous  async fun for saving user data
                (async()=>{
                try{
                    const res1=await newUser.save();
                    const res0=await newUserAuth.save();
                    res.status(201).json({isUserSignedUp:true,isResendOtp:false,isOtpWrong:false})  
                }
                catch(err){ 
                    res.status(500).json({isUserSignedUp:false,isResendOtp:true,isOtpWrong:true}); 
                }
                })();
            }
        }); 

    }
    else{
        res.status(400).json({isUserSignedUp:false,isResendOtp:true,isOtpWrong:true});
    }

    })

 
})


module.exports=router;