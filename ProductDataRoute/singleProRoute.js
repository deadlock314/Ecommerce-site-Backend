const router = require('express').Router();
const {ProductData ,ProductDataExdes ,EarphoneData,MoblieData ,EarphoneExdesData,MoblieExdesData}= require('../Schema/ProductSchemas');


let InfoSchemaVar=ProductData;
let ExdesSchemaVar= ProductDataExdes;

const fetchData=(schemaVar,id,res)=>{
     schemaVar.findOne({productId:id}).then((doc,err)=>{
        (err)?res.json({}):res.status(200).json(doc);   
    }).catch((err)=>{
        console.log(err)
        res.json({});
    })
}


router.route('/singleproduct/:products/:id').get((req,res)=>{

   InfoSchemaVar=(req.params.products=='mobiles')?MoblieData:(req.params.products=='earphones') ? EarphoneData : ProductData;
   fetchData(InfoSchemaVar,req.params.id,res)
})

router.route('/singleproductexdes/:products/:id').get((req,res)=>{

    ExdesSchemaVar=(req.params.products=='mobiles')?MoblieExdesData:(req.params.products=='earphones') ? EarphoneExdesData : ProductDataExdes;
    fetchData(ExdesSchemaVar,req.params.id,res);
});



// router.route('/').post((req,res)=>{

//     const NewHomeProductData= new ProductDataExdes(req.body);
//      NewHomeProductData.save().then(res.end('hey mama'));
    
// });

module.exports=router;