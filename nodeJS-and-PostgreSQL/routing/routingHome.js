import { Router } from "express";
import { getHome } from "../controller/controllerHome.js";

const routingHome = Router();

routingHome
    .route('/')
    .get(getHome);

export default routingHome;