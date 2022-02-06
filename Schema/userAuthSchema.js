const mongoose=require('mongoose');

const userAuthSchema=new mongoose.Schema(
   {
    
    userId:{
        type:Number,
        required:[true,'invaild userId']
    },
    name:{
        type:String,
        unique:true,
        required:[true, 'name required'],
        minlength:3

    }, 
    email:{
        required:[true, 'e-mail address required'],
        unique:[true,'existing email addresss '],
        type:String,
        lowercase:true
    },
    password:{
        type:String,
        unique:true,
        required:[true, 'hased password required']
       
    } 
   
} 
)
const userAuth =mongoose.model('userAuth',userAuthSchema);

module.exports=userAuth;