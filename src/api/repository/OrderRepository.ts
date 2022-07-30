import { connection } from "../../connection"
import { Category } from "../models/Category"
import { NewOrder, Order } from "../models/Order"

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

    async create(categoryData:NewOrder) {
        const category = []
        const query = ` INSERT  INTO orders  (id_client,id_items,create_at)  VALUE (?,?,?,?);
                        INSERT INTO itens_oders (id_order,id_product,amount) VALUE (LAST_INSERT_ID(),?,?);
        
        `
        const queryResult = await connection.promise().query(query, [])
        return queryResult
    }
    // UPDATE Customers SET ContactName = 'Alfred Schmidt', City = 'Frankfurt' WHERE CustomerID = 1;

   
}