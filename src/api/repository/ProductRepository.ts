import { connection } from "../../connection"
import { Product } from "../models/Product"

export class ProductRepository {
    async findAll(){
        const query = " SELECT * FROM products "
        const queryResult = await connection.promise().query(query)
        return queryResult[0]
    }

    async findOne(category_id:string){
        const query = " SELECT * FROM products WHERE id = ?"
        const queryResult = await connection.promise().query(query,category_id)
        return queryResult[0]
    }

    async create(productData:Product) {
        const product = [productData.name,productData.description,productData.category_id,productData.price]
        const query = " INSERT INTO products(name,description,id_category,price) VALUE (?,?,?,?)"
        const queryResult = await connection.promise().query(query, product)
        console.log(queryResult[0])
        return queryResult
    }
    // UPDATE Customers SET ContactName = 'Alfred Schmidt', City = 'Frankfurt' WHERE CustomerID = 1;

    async update(productData:Product) {
        const product = [productData.name,productData.description,productData.category_id,productData.price,productData.id]
        const query = " UPDATE products SET name = ? ,description = ? ,  id_category = ? , price WHERE id = ?"
        const queryResult = await connection.promise().query(query, product)
        return queryResult
    }

    async delete(id:string) {
        const query = "DELETE FROM products WHERE id = ?"
        const queryResult = await connection.promise().query(query, [id])
        return queryResult
    }
}