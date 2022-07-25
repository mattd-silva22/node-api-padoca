import { Router } from "express";
import { ClientController } from "../api/controllers/ClientController";

const clientRoutes = Router()

const clientController = new ClientController

clientRoutes.post("/create" , clientController.create)


export {clientRoutes}