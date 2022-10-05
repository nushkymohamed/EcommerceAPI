const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const supplierSchema = new Schema({


    supplierID:{
        type:String,
        required:true,
        default:''
    },

    firstName:{
        type:String,
        required:true,
        default:''
    },
    lastName:{
        type:String,
        required:true,
        default:''
    },
    contactNumber:{
        type:Number,
        default:''
    },
    email:{
        type:String,
        default:''
    },
    address:{
        type:String,
        default:''
    },


},)

let Supplier = mongoose.model('Supplier',supplierSchema);

module.exports = Supplier;