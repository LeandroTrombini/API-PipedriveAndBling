const { Router } = require('express');

const OrderController = require('./controllers/OrderController');
const routes = new Router(); 


routes.post("/order", OrderController.store);
routes.get("/order", OrderController.show);



module.exports = routes;