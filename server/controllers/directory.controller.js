import fs from "fs-extra"
import path from "node:path";
import { fileURLToPath } from 'node:url'

// * CREACION DE LA RUTA ABSOLUTA
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const audioPath = path.join(__dirname, "../audios/");

export async function readDirectory(req, res) {
    try {
        console.log(audioPath);

        const files = await fs.readdir(audioPath);
        return res.status(200).json(files);
    } catch (error) {
        console.error("Error al leer los archivos del directorio", error);
    }
}
