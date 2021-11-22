const mongoose = require('mongoose');

const Deal = new mongoose.Schema({
    person_id: String,
    name: String,
    deal_id: String,
    product_count: Number,
    value: Number
}, {id: false})

const DealModel = new mongoose.Schema({
     
    created_at: {
        type: Date, 
        default: Date.now()
    },
    updated_at: {
        type: Date, 
        default: Date.now()
    },
    deals: {
        type: [Deal]
    }
    
} 
);


 
module.exports = mongoose.model('Deal', DealModel);