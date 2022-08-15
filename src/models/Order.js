const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({


    orderID:{
        type:String,
        required:true,
        default:''
    },
    supplierID:{
        type:String,
        required:true,
        default:''
    },
    customerID:{
        type:String,
        required:true,
        default:''
    },
    freight:{
        type:String,
        required:true,
        default:''
    },
    orderName:{
        type:String,
        required:true,
        default:''
    },
    orderNumber:{
        type:Number,
        required:true,
        default:''
    },
    orderDate:{
        type:String,
        required:true,
        default:''
    },
    orderAddress:{
        type:String,
        required:true,
        default:''
    },
    orderContact:{
        type:String,
        required:true,
        default:''
    },
    shipVia:{
        type:String,
        required:true,
        default:''
    },
    shippedDate:{
        type:String,
        required:true,
        default:''
    },
    orderDescription:{
        type:String,
        required:true,
        default:''
    },

},)

let Order = mongoose.model('orders',orderSchema);

module.exports = Order;