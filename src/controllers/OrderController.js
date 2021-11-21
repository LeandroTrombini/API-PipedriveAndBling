const Order = require('../models/OrderModel');

class OrderController {
   
    show(req, res) {
        var orders = ["Leandro", "Ana", "Gabriel"]
        return res.status(200).json({
            error: false,
            orders
        })
    }

    async store(req, res) {

        const { name, email } = req.body;
        const data = {
            name,
            email
        }

        await Order.create(data, (err) => {
            if(err) 
            return res.status(400).json({
                error: true,
                message: "Error when trying to enter data into mongoDB Atlas"
            })
            return res.status(200).json({
                error: false,
                message: "Order registered successfully"
            })
        })
    }

}


module.exports = new OrderController();