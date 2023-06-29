const mongoose = require('mongoose');
const SchemaTypes = mongoose.Schema.Types;

const ItemSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    price : {
        type : SchemaTypes.Decimal128,
        required : true
    },
    
})
const Item = mongoose.model('Item',ItemSchema)
module.exports = Item;