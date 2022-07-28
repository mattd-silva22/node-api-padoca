import { Client } from "../models/Client"
import { ServiceResponse } from "../models/ServiceResponse"
import { ClientRepository } from "../repository/ClientRepository"

const clientRepository = new ClientRepository()

class ClientService {


    public async createClient(clientData:Client):Promise<ServiceResponse> {
    
        try {

            const { first_name,last_name,address,cep } = clientData

            if(
                first_name == undefined  || first_name.trim() == "" ||
                last_name == undefined || last_name.trim() == "" ||
                address == undefined || address.trim() == "" ||
                cep == undefined 
            ) {
                
                const response:ServiceResponse = {
                    sucess : false,
                    httpCode: 400,
                    message : "error on request body"
                }

                return response

            } else {
                
                const client:Client = {
                    first_name,
                    last_name,
                    address,
                    cep
                }
                
                await  clientRepository.create(client)
                 

                const response:ServiceResponse = {
                    sucess :true,
                    httpCode: 201,
                    message : "client created"
                }

                return response
                
                
            }


    } catch(error) {

        const response:ServiceResponse = {
            sucess :false,
            httpCode: 500,
            data : "internal error"
        }
        return response
    }
    
    }

    public async findAll(){
        const result = await  clientRepository.findAll()

        const response:ServiceResponse = {
            sucess :true,
            httpCode: 200,
            data : result
        }
        return response 
    }

    public async findOne(id:string){

        const result = await  clientRepository.findOne(id)
        if (Object.keys(result)[0] !== undefined) {
            const response:ServiceResponse = {
                sucess :true,
                httpCode: 200,
                data : result
            }
            return response 
        } else {
            const response:ServiceResponse = {
                sucess :true,
                httpCode: 200,
                data : "item not found"
            }

            return response 
        }
        
    }

    async delete(id:string) {
        const result = await  clientRepository.delete(id)
        if (Object.keys(result)[0] !== undefined) {
            const response:ServiceResponse = {
                sucess :true,
                httpCode: 200,
                data : result
            }
            return response 
        } else {
            const response:ServiceResponse = {
                sucess :true,
                httpCode: 200,
                data : "item not found"
            }

            return response 
        }
    }
    

}


export {ClientService}