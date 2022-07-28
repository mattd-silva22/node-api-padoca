import {Request ,Response } from "express"
import { CategoriesServices } from "../services/CategoriesServices"


const categoriesServices = new CategoriesServices()
export class CategoriesController {

    public async create(request:Request,response:Response) {

        const { name  } = request.body
        const categoryData = {
            name : name
        }
        const result = await categoriesServices.createCategory(categoryData)
        return response.status(result.httpCode).json({response : result.message}).send()
    }

    public async findOne(request:Request,response:Response) {
            const { id } = request.params
            const result = await categoriesServices.findOne(id)
            return response.status(result.httpCode).json(result.data).send()
    }

    public async findAll(request:Request,response:Response) {
            const result = await categoriesServices.findAll()
            return response.status(result.httpCode).json(result.data).send()
    }

    public async delete(request:Request,response:Response) {
        const { id } = request.params
        const result = await categoriesServices.delete(id)
        return response.status(result.httpCode).json({response : result.message}).send()
    }

    public async update(request:Request,response:Response) {
        const { name  } = request.body
        const { id } = request.params
        const categoryData = {
            id : id,
            name : name
        }
        const result = await categoriesServices.update(categoryData)
        return response.status(result.httpCode).json({response : result.message}).send()
        
    }
    
}