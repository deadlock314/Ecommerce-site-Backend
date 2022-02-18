const router = require('express').Router();
const {tempAuthUser,userAuth} =require('../Schema/userAuthSchema');
const {createMailSender , mailSenderFun}=require('../HelperFun/SendMailFuns');
router.route('/').post((req,res)=>{

const users=req.body;

    const newTempAuthUser= new tempAuthUser({email:users.email,otp:parseInt(Math.random()*999999)});

     userAuth.findOne({email:users.email}).then((doc,err)=>{
        if(doc){
            res.status(400).json({isUserSignedUp:false,isDuplicateUser:true,isEmailSent:false});
        }
        else {
            newTempAuthUser.save((err,result)=>{
                if(err)
                res.status(400).json({isUserSignedUp:false,isDuplicateUser:true,isEmailSent:false})
                else{
                   createMailSender();
                    const mailRes =mailSenderFun(result.email,"verifying sign Up mail",{otp:result.otp,name:users.name});
                    (mailRes)? res.status(200).json({isUserSignedUp:false,isDuplicateUser:false,isEmailSent:true}) :
                    res.status(200).json({isUserSignedUp:false,isDuplicateUser:false,isEmailSent:false});
                }
            })
        }
     });


    

});
    
  module.exports=router;