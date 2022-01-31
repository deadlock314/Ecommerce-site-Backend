const router = require('express').Router();
const {ProductData ,ProductDataExdes ,EarphoneData,MoblieData ,EarphoneExdesData,MoblieExdesData}= require('../Schema/ProductSchemas');


let SchemaVar=ProductData;
let ExdesSchemaVar= ProductDataExdes;



router.route('/singleproduct/:products/:id').get((req,res)=>{

   SchemaVar=(req.params.products=='mobiles')?MoblieData:(req.params.products=='earphones') ? EarphoneData : ProductData;

    SchemaVar.findOne({productId:req.params.id}).then((doc)=>{
        res.status(200).json(doc);
       
    }).catch((err)=>{
        console.log(err)
        res.json({});
    })
    

})

router.route('/singleproductexdes/:products/:id').get((req,res)=>{

    ExdesSchemaVar=(req.params.products=='mobiles')?MoblieExdesData:(req.params.products=='earphones') ? EarphoneExdesData : ProductDataExdes;

    ExdesSchemaVar.findOne({productId:req.params.id}).then((doc)=>{
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