import express from "express"
import { categoriesRoutes } from "./routes/categories.routes";
import { clientRoutes } from "./routes/clients.routes";
import { productsRoutes } from "./routes/products.routes";

const port = 3333
const app = express();
app.use(express.json())
app.use("/client",clientRoutes)
app.use("/category",categoriesRoutes)
app.use("/product",productsRoutes)

app.get("/",(request,response) => {
    return response.json(
        {
            message : "Olá mundo"
        }
    )
});

app.listen(port)