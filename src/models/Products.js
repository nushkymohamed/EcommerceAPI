const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({


    productID:{
        type:String,
        required:true,
        default:''
    },

    productName:{
        type:String,
        required:true,
        default:''
    },
    productPrice:{
        type:Number,
        required:true,
        default:''
    },
    productQuantity:{
        type:Number,
        required:true,
        default:''
    },
    productColour:{
        type:String,
        required:true,
        default:''
    },
    productBrand:{
        type:String,
        required:true,
        default:''
    },
    productDescription:{
        type:String,
        required:true,
        default:''
    },

},)

let Product = mongoose.model('Products',productSchema);

module.exports = Product;