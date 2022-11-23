import { Router } from "express";
import { viewAllOrders, addOrder, viewOrder, editOrder, deleteOrder } from "../controller/controllerOrders.js";

const routerOrders = Router();

routerOrders
    .route('/')
    .get(viewAllOrders)
    .post(addOrder)

routerOrders
    .route('/:id')
    .get(viewOrder)
    .put(editOrder)
    .delete(deleteOrder)

    export default routerOrders;