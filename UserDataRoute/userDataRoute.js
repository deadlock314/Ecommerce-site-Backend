const router = require('express').Router();
const authTesterMiddleware=require('../middleware/authTesterMid');
const User =require('../Schema/userDataSchema');

router.route('/user/:id').get(authTesterMiddleware,(req,res)=>{
    const Userid=req.params.id;
    (async()=>{
        try{
       
        const doc= await User.findOne({"userAccData.email":`${Userid}`.replace(" ",'')})
        res.json(doc);
            }
    catch(err){
        res.status(400).json({isSuccess:false});
            }  
        })();
})

router.route('/updateuser/:id').post(authTesterMiddleware,(req,res)=>{
    const Userid=req.params.id;

    (async()=>{
    try{
        const doc= await User.findOneAndUpdate({"userAccData.email":Userid},req.body)
        res.status(200).json({isUpdatetd:false});
    }
    catch(err){
        res.status(400).json({isUpdatetd:false});
    }
     })();

})



module.exports=router;