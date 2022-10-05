const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customerSchema = new Schema({


    customerID:{
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


},)

let Customer = mongoose.model('Customer',customerSchema);

module.exports = Customer;