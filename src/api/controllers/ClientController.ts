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

    public readClients(){

    }
}