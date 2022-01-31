const mongoose = require('mongoose')

const productSchema= new mongoose.Schema({
    productId:{
        type:String, required:true, unique:true
    },
    imgLink:{
        type:String
        
    },
    des:{
        type:String, required:true
    },
    price:{
        type:String, required:true
    }

});

const productExdesSchema= new mongoose.Schema({
     productId:{
        type:String, required:true, unique:true
    },
    extendedDes:{
        type:Object, required:true,
        General:{
            type:Array,
            required:true
        }

    }
})

const ProductData=mongoose.model('homeProductData',productSchema);
const MoblieData=mongoose.model('MoblieData',productSchema);
const EarphoneData=mongoose.model('EarphoneData',productSchema);

const ProductDataExdes=mongoose.model('ProductDataExdes',productExdesSchema);
const MoblieExdesData=mongoose.model('MoblieExdesData',productExdesSchema);
const EarphoneExdesData=mongoose.model('EarphoneExdesData',productExdesSchema);

module.exports={ProductData ,ProductDataExdes ,EarphoneData,MoblieData ,EarphoneExdesData,MoblieExdesData};