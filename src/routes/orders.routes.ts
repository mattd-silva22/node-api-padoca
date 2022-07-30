import { Router } from "express";
import { OrdersController } from "../api/controllers/OrdersController";

const ordersRoutes = Router()

const ordersController = new OrdersController

ordersRoutes.post("/create" , ordersController.create)
ordersRoutes.get("/findAll" , ordersController.findAll)
ordersRoutes.get("/findOne/:id" , ordersController.findOne)



export {ordersRoutes}