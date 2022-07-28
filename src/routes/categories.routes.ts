import { Router } from "express";
import { CategoriesController } from "../api/controllers/CategoriesController";

const categoriesRoutes = Router()

const categoriesController = new  CategoriesController()

categoriesRoutes.post("/create" , categoriesController.create)
categoriesRoutes.get("/findAll" , categoriesController.findAll)
categoriesRoutes.get("/findOne/:id" , categoriesController.findOne)
categoriesRoutes.put("/update/:id" , categoriesController.update)
categoriesRoutes.delete("/delete/:id", categoriesController.delete)


export {categoriesRoutes}