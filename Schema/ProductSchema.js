const mongoose = require('mongoose')

const productSchema= new mongoose.Schema({
    imgLink:{
        type:String
        
    },
    des:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    }

})

const homeProductData=mongoose.model('homeProductData',productSchema);

module.exports=homeProductData;