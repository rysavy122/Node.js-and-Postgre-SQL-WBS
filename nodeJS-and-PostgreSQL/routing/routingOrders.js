import { Router } from "express";
const routerOrders = Router();

routerOrders
    .route('/')
    .get()
    .post()

routerOrders
    .route('/:id')
    .get()
    .put()
    .delete()
