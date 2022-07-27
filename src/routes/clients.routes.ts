import { Router } from "express";
import { ClientController } from "../api/controllers/ClientController";

const clientRoutes = Router()

const clientController = new ClientController

clientRoutes.post("/create" , clientController.create)
clientRoutes.get("/findAll" , clientController.findAll)
clientRoutes.get("/findOne/:id" , clientController.findOne)
clientRoutes.get("/delete/:id" , clientController.delete)
clientRoutes.get("/update/:id" , clientController.update)


export {clientRoutes}