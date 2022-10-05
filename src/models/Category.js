const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema({


    categoryID:{
        type:String,
        required:true,
        default:''
    },
    categoryName:{
        type:String,
        required:true,
        default:''
    },
    categoryDescription:{
        type:String,
        required:true,
        default:''
    },

},)

let Category = mongoose.model('category',categorySchema);

module.exports = Category;