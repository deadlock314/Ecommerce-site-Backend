const router = require('express').Router();
let {ProductData,EarphoneData,MoblieData}=require('../Schema/ProductSchemas');

let SchemaVar= ProductData;

router.route('/').get((req,res)=>{
res.redirect(`/laptops`);
})

router.route('/:products').get((req,res)=>{
    
    SchemaVar=(req.params.products=='mobiles')?MoblieData:(req.params.products=='earphones') ? EarphoneData : ProductData;

    SchemaVar.find({},(err,doc)=>{
        (err) ? res.end(err):res.cookie('firsthit','kjkjaskjla',{maxAge:1000*60*600,sameSite:'none',secure:true}).json(doc);
    })
    
});





// router.route('/').post((req,res)=>{

//     const NewHomeProductData= new ProductData(req.body);
//      NewHomeProductData.save().then(res.end('hey mama'));
    
// });


module.exports=router;