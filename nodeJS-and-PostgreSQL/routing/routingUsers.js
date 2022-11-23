import { Router } from "express";
import { viewAllUsers, addUser, viewUser, editUser, deleteUser } from "../controller/controllerUsers.js";

const routerUsers = Router();

routerUsers
    .route('/')
    .get(viewAllUsers)
    .post(addUser)

routerUsers
    .route('/:id')
    .get(viewUser)
    .put(editUser)
    .delete(deleteUser)

    export default routerUsers;