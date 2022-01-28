const mongoose = require('mongoose')

const productSchema= new mongoose.Schema({
    productId:{
        type:String,
        required:true,
        unique:true
    },
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

});

const productExdesSchema= new mongoose.Schema({
     productId:{
        type:String,
        required:true,
        unique:true
    },
    extendedDes:{
        type:Object,
        required:true,
        General:{
            type:Array,
            required:true
        }

    }
})

const ProductData=mongoose.model('homeProductData',productSchema);
const ProductDataExdes=mongoose.model('ProductDataExdes',productExdesSchema);

module.exports={ProductData ,ProductDataExdes };