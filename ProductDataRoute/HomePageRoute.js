const router = require('express').Router();
let {ProductData}=require('../Schema/ProductSchemas');


router.route('/').get((req,res)=>{

    ProductData.find({},(err,doc)=>{
        if(err){
            res.end(err)
        }
        else{
            res.json(doc);
        }
    })
    
});

// router.route('/').post((req,res)=>{

//     const NewHomeProductData= new ProductData(req.body);
//      NewHomeProductData.save().then(res.end('hey mama'));
    
// });


module.exports=router;