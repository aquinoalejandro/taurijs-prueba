import { downloadAudioService } from '../helpers/youtubeDownloader.healper.js';

export async function downloadAudioController(req, res) {
    try {
        const data = req.body

        console.log(data);

        const { url, options } = data;
        const downloadedAudio = await downloadAudioService(url, options);
        return res.status(200).json({ message: 'Descarga completada: ', downloadedAudio });
        

    } catch (error) {
        console.error('Ocurrió un error en la descarga:', error);
        throw error;
    }
}