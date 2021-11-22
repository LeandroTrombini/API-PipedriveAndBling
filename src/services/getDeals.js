const Deal = require("../models/DealModel");

module.exports = async () => {
    
    return await Deal.find();
}