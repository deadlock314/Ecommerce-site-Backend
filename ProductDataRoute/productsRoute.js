const router = require('express').Router();
let {EarphoneData,MoblieData}=require('../Schema/ProductSchemas');

router.route('/laptops').get((req,res)=>{
    res.redirect('/');
});

router.route('/mobiles').get((req,res)=>{

    MoblieData.find({},(err,doc)=>{
        (err) ? res.end(err):res.json(doc);
    })
    
});
router.route('/earphones').get((req,res)=>{

    EarphoneData.find({},(err,doc)=>{
        (err) ? res.end(err):res.json(doc);
    })
    
});


// router.route('/mobiles').post((req,res)=>{

//     const NewHomeProductData= new  MoblieData(req.body);
//      NewHomeProductData.save().then(res.end('hey mama'));
    
// });
// router.route('/earphones').post((req,res)=>{

//     const NewHomeProductData= new EarphoneData(req.body);
//      NewHomeProductData.save().then(res.end('hey mama'));
    
// });


module.exports=router;