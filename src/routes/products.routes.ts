import { Router } from "express";
import { ProductsController } from "../api/controllers/ProductsController";

const productsRoutes = Router()

const productsController = new ProductsController

productsRoutes.post("/create" , productsController.create)
productsRoutes.get("/findAll" , productsController.findAll)
productsRoutes.get("/findOne/:id" , productsController.findOne)
productsRoutes.delete("/delete/:id" , productsController.delete)
productsRoutes.put("/update/:id" , productsController.update)


export {productsRoutes}