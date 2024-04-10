import express from "express"
import morgan from "morgan";
import cors from "cors";
import {downloadRouter} from "./routes/download.routes.js"

const app = express()

app.use(morgan("dev"))
app.use(cors())
app.use(express.json())
app.use(downloadRouter)

const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
