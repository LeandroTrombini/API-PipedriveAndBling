const Order = require("../models/OrderModel")

module.exports = {
    async index(req, res) {
        try {
            const deals = await Order.find({}).sort({"created_at": 1}).sort({"deal_value": 1})

            if (!deals) return res.status(404).json({
                message: "No deals yet!"
            })
    
            return res.json(deals)
        } catch(err) {
            console.error(err)
            return res.status(500).json({
                message: "error! Please try again later.",
                err
            })
        }
    }
}