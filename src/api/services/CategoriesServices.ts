import { Category } from "../models/Category";
import { ServiceResponse } from "../models/ServiceResponse";
import { CategoriesRepository } from "../repository/CategoriesRepository";

const categoriesRepository = new CategoriesRepository()

export class CategoriesServices{

    public async createCategory(categoryData:Category) {
        
        try {
            const { name } = categoryData
            if( name == undefined  || name.trim() == "" ) {
                const response:ServiceResponse = {
                    sucess : false,
                    httpCode: 400,
                    message : "error on request body"
                }

                return response
            } else {

                const category = {
                    name : name
                }
                await  categoriesRepository.create(category)
                 

                const response:ServiceResponse = {
                    sucess :true,
                    httpCode: 201,
                    message : "category created"
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

    public async findAll() {
        const result = await  categoriesRepository.findAll()

        const response:ServiceResponse = {
            sucess :true,
            httpCode: 200,
            data : result
        }
        return response 
    }

    public async findOne(id:string) {
        const result = await  categoriesRepository.findOne(id)
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

    public async delete(id:string) {
        if(id) {
            await  categoriesRepository.delete(id)
                 

                const response:ServiceResponse = {
                    sucess :true,
                    httpCode: 201,
                    message : "category deleted"
                }

                return response
        } else {
            const response:ServiceResponse = {
                sucess : false,
                httpCode: 400,
                message : "id not found"
            }

            return response
        }
    }

    public async update(categoryData:Category) {
        try {
            const { name , id  } = categoryData
            if( ( name == undefined  || name.trim() == ""  ) || (!id) ) {
                const response:ServiceResponse = {
                    sucess : false,
                    httpCode: 400,
                    message : "error on request body"
                }

                return response
            } else {

                const category = {
                    id: id,
                    name : name
                }
                await  categoriesRepository.update(category)
                 

                const response:ServiceResponse = {
                    sucess :true,
                    httpCode: 201,
                    message : "category updated"
                }

                return response
            }
            

            
        } catch(error) {

            const response:ServiceResponse = {
                sucess :false,
                httpCode: 500,
                message : "internal error"
            }
            return response
        }
    }

}