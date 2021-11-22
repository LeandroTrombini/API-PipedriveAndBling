const express = require('express');

const OrderController = require('./controllers/OrderController');
const BlingController = require('./controllers/BlingController');

const routes = express.Router(); 

routes.get('/', (req, res) => {
    return res.redirect('/deals')
})


routes.get('/deals', OrderController.index);
routes.get('/deals/consolidated', OrderController.consolidated);
routes.get('/deals/bling', BlingController.index);



module.exports = routes;