const mongoose=require("mongoose");

const userDataSchema = new mongoose.Schema({
    
    userAccData:{
        name:{
          type:String,
          required:[true, 'name required'],
          minlength:3

        }, 
        email:{
            required:[true, 'e-mail address required'],
            unique:[true,'existing email addresss '],
            type:String,
            lowercase:true
        },
        mobile:{
            type:String, minlength:10
        },  
        orders:{

            fullfilledOrders:{
               type:Array
            },
            pendingOrders:{
              type:Array
            },
            cartProducts:{
              type:Array
            }
        },
        
        profession:{
            type:String
        }  
    }
    ,
    userNonImpData:{
        
       AccCreationDate:{
         type:Date

       } 
    }
    
    

        
});
const User=mongoose.model('user',userDataSchema)
module.exports=User;