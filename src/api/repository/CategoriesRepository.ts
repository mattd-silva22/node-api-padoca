import { connection } from "../../connection"
import { Category } from "../models/Category"

export class CategoriesRepository {

    async findAll(){
        const query = " SELECT * FROM category "
        const queryResult = await connection.promise().query(query)
        return queryResult[0]
    }

    async findOne(category_id:string){
        const query = " SELECT * FROM category WHERE id = ? "
        const queryResult = await connection.promise().query(query,category_id)
        return queryResult[0]
    }

    async create(categoryData:Category) {
        const category = [categoryData.name]
        const query = " INSERT INTO category(name) VALUE (?) "
        const queryResult = await connection.promise().query(query, category)
        return queryResult
    }
    // UPDATE Customers SET ContactName = 'Alfred Schmidt', City = 'Frankfurt' WHERE CustomerID = 1;

    async update(categoryData:Category) {
        const category = [categoryData.name , categoryData.id]
        const query = " UPDATE category SET name = ? WHERE id = ?"
        const queryResult = await connection.promise().query(query, category)
        return queryResult
    }

    async delete(id:string) {
        const query = "DELETE FROM category WHERE id = ?"
        const queryResult = await connection.promise().query(query, [id])
        return queryResult
    }
}