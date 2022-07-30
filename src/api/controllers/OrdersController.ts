import {Request ,Response } from "express"
import { ordersServices } from "../services/OrdersServices"


const ordersServices = new OrdersServices()
export class OrdersController {

    public async create(request:Request,response:Response) {

        const { name ,description ,category_id, price } = request.body
        const productData = {
            name : name,
            description: description,
            category_id :category_id,
            price : price

        }
        const result = await ordersServices.createProduct(productData)
        return response.status(result.httpCode).json({response : result.data}).send()
    }

    public async findOne(request:Request,response:Response) {
            const { id } = request.params
            const result = await ordersServices.findOne(id)
            return response.status(result.httpCode).json(result.data).send()
    }

    public async findAll(request:Request,response:Response) {
            const result = await ordersServices.findAll()
            return response.status(result.httpCode).json(result.data).send()
    }

    

    
    
}