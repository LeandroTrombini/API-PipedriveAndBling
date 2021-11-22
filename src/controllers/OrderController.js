const Order = require('../models/OrderModel');
const { getOportunitiesFromPipedrive } = require("../services/getOportunitiesFromPipedrive")
const { createOrder } = require("../services/bling")
const saveDeals = require("../services/saveDeals")
const getDeals = require("../services/getDeals")

module.exports = {
    async consolidated(req, res) {
        try {
            const deals = await getDeals();
            return res.status(200).send(deals)
        }catch(err) {
              console.error(err)
              return res.status(500).json({
                  message: "error!",
                  err
              })
          }
    },
    async index(req, res) {
        try {  
            const wonOportunities = await getOportunitiesFromPipedrive()
            
            if (!wonOportunities) return res.status(404).json({
                message: "No deals!"
            })

            const createOrderPromises = wonOportunities.map(deal => {
                const id = deal.id
                const personName = deal.person_id === null ? "Any Name" : deal.person_id.name                
                const dealTitle = deal.title === null ? "Any Title" : deal.title
                const dealValue = deal.value === null ? "Any Value" : deal.value
                const createdAt = deal.add_time
                const updatedAt = deal.update_time
                Order.findOne({"id": id}, "id", async (err, deal) => {
                    if (err) return res.status(500).json({
                        message: "error!"
                    })

                    if (deal === null) {
                        const newDeal = new Order({
                            id,
                            person_name: personName,                           
                            deal_title: dealTitle,
                            deal_value: dealValue,
                            created_at: createdAt,
                            updated_at: updatedAt
                        })
                
                        await newDeal.save()
                    }
                })
                
                return createOrder(deal)
            })
    
            await Promise.all(createOrderPromises)
            await saveDeals(wonOportunities)
            return res.json(wonOportunities)
    
          } catch(err) {
              console.error(err)
              return res.status(500).json({
                  message: "error!",
                  err
              })
          }
    }

}