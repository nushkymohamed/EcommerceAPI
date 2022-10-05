const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cartSchema = new Schema({


    shoppingCartID:{
        type:String,
        required:true,
        default:''
    },
    productID:{
        type:String,
        required:true,
        default:''
    },
    orderID:{
        type:String,
        required:true,
        default:''
    },
    Quantity:{
        type:Number,
        required:true,
        default:''
    },
    size:{
        type:Number,
        required:true,
        default:''
    },

},)

let Cart = mongoose.model('ShoppingCart',cartSchema);

module.exports = Cart;