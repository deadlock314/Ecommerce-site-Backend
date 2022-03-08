const mongoose = require('mongoose');

const productArr=['laptops','earphones','mobiles','smartwatches'];

let SchemaObj={},ExdesSchemaObj={};

const schemaPropObj= new mongoose.Schema({
    
    productId: {   type: String,  },
    imgLink: { type: String },
    des: { type: String },
    price: {  type: String }

});
const exdesSchemaPropObj= new mongoose.Schema({

    productId: {  type: String,  unique: true  },
    extendedDes: {  type: Object, 
        General: {
            type: Array,
            required: true
        }
    }
});


 for (let i = 0; i <productArr.length; i++){
     SchemaObj[productArr[i]]=[schemaPropObj]
     ExdesSchemaObj[productArr[i]]=[exdesSchemaPropObj];
 }
      

const productSchema = new mongoose.Schema({...SchemaObj });
const productExdesSchema = new mongoose.Schema({ ...ExdesSchemaObj })

const ProductData = mongoose.model('ProductData', productSchema);
const ProductDataExdes = mongoose.model('ProductDataExdes', productExdesSchema);

module.exports = { ProductData, ProductDataExdes };