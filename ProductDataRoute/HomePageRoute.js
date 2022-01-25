const router = require('express').Router();
let homeProductData=require('../Schema/ProductSchema');


router.route('/').get((req,res)=>{

    homeProductData.find({},(err,doc)=>{
        if(err){
            res.end(err)
        }
        else{
            res.json(doc);
        }
    })
    
});

// router.route('/').post((req,res)=>{

//     const NewHomeProductData= new homeProductData(req.body);
//      NewHomeProductData.save().then(res.end('hey mama'));
    
// });


module.exports=router;