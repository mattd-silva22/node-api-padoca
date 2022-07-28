import { connection } from "../../connection"
import { Client } from "../models/Client"



export class ClientRepository {

    

    async findAll(){
        const query = " SELECT * FROM clients "
        const queryResult = await connection.promise().query(query)
        return queryResult[0]
    }

    async findOne(client_id:string){
        const query = " SELECT * FROM clients WHERE id = ? "
        const queryResult = await connection.promise().query(query,client_id)
        return queryResult[0]
    }

    async create(clientData:Client) {
        const client = [clientData.first_name,clientData.last_name,
                        clientData.cep,clientData.address]
        const query = " INSERT INTO clients(first_name,last_name,cep,address) VALUE (?, ? ,? , ?) "
        const queryResult = await connection.promise().query(query, client)
        return queryResult
    }

   async delete(id:string) {
    const query = "DELETE FROM clients WHERE id = ?"
    const queryResult = await connection.promise().query(query, [id])
    return queryResult
   }
}

