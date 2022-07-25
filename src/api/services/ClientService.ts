import { Client } from "../models/Client"
import { ServiceResponse } from "../models/ServiceResponse"

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

                console.log(client)

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
            data : "error on create client"
        }
        return response
    }
    
    }

    createZap(){
        console.log("teste")
        const response:ServiceResponse = {
            sucess :false,
            httpCode: 500,
            data : "error on create client"
        }
        return response
    }
    

}


export {ClientService}