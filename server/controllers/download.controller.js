import { downloadAudioService } from '../helpers/youtubeDownloader.healper.js';

export async function downloadAudioController(req, res) {
    try {
        const data = req.body

        const { url, options = {
            "quality": "highestaudio",
            "filter": "audioonly",
            "format": "mp3"
          } } = data;
          
        const downloadedAudio = await downloadAudioService(url, options);
        return res.status(200).json({ message: 'Descarga completada: ', downloadedAudio });
        

    } catch (error) {
        console.error('Ocurrió un error en la descarga:', error);
        throw error;
    }
}