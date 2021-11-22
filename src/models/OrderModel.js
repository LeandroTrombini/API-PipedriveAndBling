const mongoose = require('mongoose');


const OrderModel = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    person_name: {
        type: String,        
        required: true
    },
    deal_title: {
        type: String,
        required: true
    },
    deal_value: {
        type: String,
        required: true
    },
    created_at: {
        type: Date, 
        default: Date.now()
    },
    updated_at: {
        type: Date, 
        default: Date.now()
    }
    
} 
);


const Order = mongoose.model('Order', OrderModel);
module.exports = Order;