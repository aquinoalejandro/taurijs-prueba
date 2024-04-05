import express from "express"
import morgan from "morgan";
import cors from "cors";
import fs from "node:fs";
import ytdl from "ytdl-core";

const app = express()

app.use(morgan("dev"))
app.use(cors())

const descargar = async (url) => {
    ytdl(url)
        .pipe(fs.createWriteStream('video.mp4'));
}

app.listen(8000, () => {
    console.log("Server is running on port 8000");
    descargar('https://www.youtube.com/watch?v=Edqf2NfkxSQ&pp=ygULbW9tbyBhbmFzaGU%3D')
})