const router = require('express').Router();
const {ProductDataExdes}= require('../Schema/ProductSchemas');
const credentialsMiddleware = require('../middleware/cookieCredentialsMid');

router.route('/singleproductexdes/:products/:id').get(credentialsMiddleware ,(req,res)=>{
    const Qinfo=req.params;

    ProductDataExdes.findOne({},Qinfo.products).then((doc,err)=>{
    (err) ? res.json({}) : res.status(200).json(doc[Qinfo.products].find(x=>x.productId==Qinfo.id));   
    }).catch((err)=>{
        console.log(err)
        res.json({});
    })

});



// router.route('/lap').post((req,res)=>{

//     const NewHomeProductData= new ProductDataExdes(req.body);
//      NewHomeProductData.save().then(res.end('hey mama'));
    
// });

module.exports=router;