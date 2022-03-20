const router = require('express').Router();
let {ProductData}=require('../Schema/ProductSchemas');

router.route('/:products').get((req,res)=>{

    ProductData.find({},req.params.products,(err,doc)=>{
        (err) ? res.end(err):res.json(doc);
    })
    
});





// router.route('/:products').post((req,res)=>{
    
//    const newProductdata= new ProductData({...req.body});

//     newProductdata.save().then(()=>res.json({sucess:true})).catch((err)=>
//      { console.log(err);
//          res.json({sucess:false})}
//      )
    
// });


module.exports=router;