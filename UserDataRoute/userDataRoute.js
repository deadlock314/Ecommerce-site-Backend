const router = require('express').Router();
const authTesterMiddleware=require('../middleware/authTesterMid');
const User =require('../Schema/userDataSchema');

router.route('/user/:id').get(authTesterMiddleware,(req,res)=>{
    (async()=>{
        try{
        
        const doc= await User.findOne({userId:req.id})
        res.json(doc);
            }
    catch(err){
        res.status(400).json({isSuccess:false});
            }  
        })();
})

router.route('/user/:id').post(authTesterMiddleware,(req,res)=>{
    (async()=>{
    try{
        const doc= await User.findOneAndUpdate({userId:req.id},req.body)
        res.status(200).json({isUpdatetd:false});
    }
    catch(err){
        res.status(400).json({isUpdatetd:false});
    }
     })();

})



module.exports=router;