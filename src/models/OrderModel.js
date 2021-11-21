const mongoose = require('mongoose');


const OrderModel = new mongoose.Schema({
    id: mongoose.ObjectId,
    name: {
        type: String,        
        required: true
    },
    email: {
        type: String,
        required: true
    }
    
}, {
    timestamps: true
}
);


const Order = mongoose.model('Order', OrderModel);
module.exports = Order;