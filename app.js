import dotenv from "dotenv"
import express from"express"
import cors from "cors"
import { errorHandler } from "./middleware/errorHandler.js";
import router from "./route/numberRoute.js";

dotenv.config();

const app = express();

const port = process.env.PORT||10000

app.set("json spaces", 4);

app.use(cors())

app.use(express.json())

app.use('/api/classify-number', router)

app.use(errorHandler)

app.listen(port, (req, res) => {
    console.log(`Server is running on ${port}....`)
})