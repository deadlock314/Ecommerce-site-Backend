const router = require('express').Router();
let {ProductData}=require('../Schema/ProductSchemas');


router.route('/').get((req,res)=>{

    ProductData.find({},(err,doc)=>{
        (err) ? res.end(err):res.json(doc);
    })
    
});

// router.route('/').post((req,res)=>{

//     const NewHomeProductData= new ProductData(req.body);
//      NewHomeProductData.save().then(res.end('hey mama'));
    
// });


module.exports=router;