import express from "express"
import { clientRoutes } from "./routes/clients.routes";

const port = 3333
const app = express();
app.use(express.json())
app.use("/client",clientRoutes)

app.get("/",(request,response) => {
    return response.json(
        {
            message : "Olá mundo"
        }
    )
});

app.listen(port)