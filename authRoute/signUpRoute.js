const router = require('express').Router();
const bcrypt = require('bcrypt');
const user =require('../Schema/userSchema');


router.route('/').post((req,res)=>{
    const users=req.body; 
  const newUser= new user(users);
    bcrypt.hash(newUser.password, 12, function(err, hashPassword) {

        if(err)
        res.status(400).json({isUserSignedUp:false}); 
        else
        {
                
             newUser.password=hashPassword;
            newUser.save((err)=>{
                if(err) {
                    res.status(400).json({isUserSignedUp:false})
                } 
                else{
                    res.json({isUserSignedUp:true})
                }
            })
        }
    });
   
});

module.exports=router;