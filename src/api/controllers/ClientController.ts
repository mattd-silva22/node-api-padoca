import {Request ,Response } from "express"
import { Client } from "../models/Client"
import { ClientService } from "../services/ClientService"

const clientService = new ClientService()

export class ClientController {

    
    
    public async create(request:Request,response:Response) {
        
        const { first_name,last_name,address,cep } = request.body
        const clientData:Client = {
                first_name,
                last_name,
                address,
                cep
            }

            

        const result = await clientService.createClient(clientData)
        return response.status(result.httpCode).json({response : result.message}).send()
            
        
    }

    public async findOne(request:Request,response:Response){
        const { id } = request.params
        const result = await clientService.findOne(id)
        return response.status(result.httpCode).json(result.data).send()
    }

    public async findAll(request:Request,response:Response){
        const result = await clientService.findAll()
        return response.status(result.httpCode).json(result.data).send()
    }

    public async delete(request:Request,response:Response) {
        const result = await clientService.delete()
        return response.status(result.httpCode).json(result.data).send()
    }

    public async update(request:Request,response:Response) {

    }

    

}