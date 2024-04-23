// const mongoose = require('mongoose');
// const {Schema,model} = mongoose;
// const TransactionSchema = new Schema({
//     name : {type:String,required:true},
//     price : {type:String,require:true},
//     description:{type:Number,required:true},
//     datetime:{type:Date,required:true},
// });
// const TransactionModel = model('Transaction',TransactionSchema);
// module.exports = TransactionModel; 
const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const TransactionSchema = new Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true }, // Changed require to required
    description: { type: String, required: true }, // Changed type to String
    datetime: { type: Date, required: true },
});

const TransactionModel = model('Transaction', TransactionSchema);

module.exports = TransactionModel;
