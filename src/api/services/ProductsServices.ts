import { Product } from "../models/Product"
import { ServiceResponse } from "../models/ServiceResponse"
import { ProductRepository } from "../repository/ProductRepository"

const productRepository = new ProductRepository()

class ProductsServices {


    public async createProduct(productData:Product):Promise<ServiceResponse> {
    
        try {

            const { name, description, category_id  , price } = productData

            if(
                name == undefined  || name.trim() == "" ||
                description == undefined || description.trim() == "" ||
                category_id == undefined ||  
                price == undefined  || NaN
            ) {
                
                const response:ServiceResponse = {
                    sucess : false,
                    httpCode: 400,
                    message : "error on request body"
                }

                return response

            } else {
                
                const product:Product = {
                    name,
                    description,
                    category_id,
                    price
                }
                
                await  productRepository.create(product)
                 

                const response:ServiceResponse = {
                    sucess :true,
                    httpCode: 201,
                    message : "product created"
                }

                return response
                
                
            }


    } catch(error) {

        const response:ServiceResponse = {
            sucess :false,
            httpCode: 500,
            data : `erro: ${error}`
        }
        return response
    }
    
    }

    public async findAll(){
        const result = await  productRepository.findAll()

        const response:ServiceResponse = {
            sucess :true,
            httpCode: 200,
            data : result
        }
        return response 
    }

    public async findOne(id:string){

        const result = await  productRepository.findOne(id)
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
        const result = await  productRepository.delete(id)
        if (Object.keys(result)[0] !== undefined) {
            const response:ServiceResponse = {
                sucess :true,
                httpCode: 200,
                message : "item deleted"
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

    async update(productData:Product){
        const response:ServiceResponse = {
            sucess :true,
            httpCode: 200,
            data : "confia"
        }

        return response
    }
    

}


export {ProductsServices}