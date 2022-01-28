const router = require('express').Router();
const {ProductData ,ProductDataExdes}= require('../Schema/ProductSchemas');

router.route('/singleproduct/:id').get((req,res)=>{
    const id=req.params.id;
    ProductData.findOne({productId:id}).then((doc)=>{
        res.status(200).json(doc);
       
    }).catch((err)=>{
        console.log(err)
        res.json({});
    })
    

})

router.route('/singleproductexdes/:id').get((req,res)=>{
    const id=req.params.id;  
     console.log(id)
    ProductDataExdes.findOne({productId:id}).then((doc)=>{
        res.json(doc);
    }).catch((err)=>{
        console.log(err)
        res.json({});
    })
});

// router.route('/').post((req,res)=>{

//     const NewHomeProductData= new ProductDataExdes(req.body);
//      NewHomeProductData.save().then(res.end('hey mama'));
    
// });

module.exports=router;