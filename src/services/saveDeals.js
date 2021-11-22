const Deal = require("../models/DealModel");

module.exports = async (data) => {
    
    const deal = {
        deals: data.map(el => ({
            person_id: el.person_id.owner_id,
            name: el.person_id.name,
            deal_id: el.id,
            product_count: el.product_count,
            value: el.value
        }) )
    }
    return await Deal.create(deal);
}