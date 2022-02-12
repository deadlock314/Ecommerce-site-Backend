const router = require('express').Router();

router.route('/').post((req,res)=>{
    console.log(req.cookies)
    res.clearCookie('auth',{path:'/'}).json({isUserLoggedOut:true});
})



module.exports=router;