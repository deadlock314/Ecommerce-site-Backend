const router = require('express').Router();
let {ProductData}=require('../Schema/ProductSchemas');
const credentialsMiddleware = require('../middleware/cookieCredentialsMid');


router.route('/terms?').get( credentialsMiddleware, async(req,res)=>{
     

    const regexDes=new RegExp (`${req.query.des.replace(/\s/g,"*",)}`,"ig");
    console.log(regexDes);
    try{
        const resData= await ProductData.find({},req.query.product_type)
        if(resData.length>0){
            const ulResData=resData[0][req.query.product_type];
            
            res.json(ulResData.filter(x=>regexDes.test(x.des)))
        }
        else
        res.json({isFiniteee:false})
    }catch(err){
        console.warn(err);
        res.json({isFinite:false})
    }

    
});


module.exports=router;