const router = require('express').Router();
const bcrypt = require('bcrypt');
const userAuth =require('../Schema/userAuthSchema');
const User =require('../Schema/userDataSchema');

router.route('/').post((req,res)=>{

    const users=req.body;
    const userID=(async()=>{
        try{
            const countVal=await userAuth.count({})
            return countVal;
        }
        catch(err){
             return false;
        }
    })();
    
const promiseUserID=Promise.resolve(userID);

promiseUserID.then((userID)=>{
    console.log(userID)
    if(userID==false)
    res.status(400).json({isUserSignedUp:false});
    else{

        const newUserAuth= new userAuth({...users,userId:userID+1});
        const newUser= new User({userAccData:{name:users.name,email:users.email,userId:userID+1},userNonImpData:{}});

    bcrypt.hash(newUserAuth.password, 12, function (err, hashPassword) {

        if(err)
          res.status(400).json({isUserSignedUp:false});
        else
        {    
            newUserAuth.password=hashPassword;
            (async()=>{
                try{
                    const res1=await newUser.save();
                    const res0=await newUserAuth.save();
                  res.status(201).json({isUserSignedUp:true})  
                }
                catch(err){ 
                    
                    console.log(err)
                ;}
            })();
            
        }
    });
   
        }

}).catch(err=>res.status(400).json({isUserSignedUp:false}))
    

});
    
  module.exports=router;