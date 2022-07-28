import {Request ,Response } from "express"
import { ProductsServices } from "../services/ProductsServices"


const productsServices = new ProductsServices()
export class ProductsController {

    public async create(request:Request,response:Response) {

        const { name ,description ,category_id, price } = request.body
        const productData = {
            name : name,
            description: description,
            category_id :category_id,
            price : price

        }
        const result = await productsServices.createProduct(productData)
        return response.status(result.httpCode).json({response : result.data}).send()
    }

    public async findOne(request:Request,response:Response) {
            const { id } = request.params
            const result = await productsServices.findOne(id)
            return response.status(result.httpCode).json(result.data).send()
    }

    public async findAll(request:Request,response:Response) {
            const result = await productsServices.findAll()
            return response.status(result.httpCode).json(result.data).send()
    }

    public async delete(request:Request,response:Response) {
        const { id } = request.params
        const result = await productsServices.delete(id)
        return response.status(result.httpCode).json({response : result.message}).send()
    }

    public async update(request:Request,response:Response) {
        const { name ,description , category_id , price } = request.body
        const { id } = request.params
        const productData = {
            id : id,
            name : name,
            description: description,
            category_id :category_id,
            price : price
        }
        const result = await productsServices.update(productData)
        return response.status(result.httpCode).json({response : result.message}).send()
        
    }
    
}