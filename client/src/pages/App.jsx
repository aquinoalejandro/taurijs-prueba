import { AudioPlayer } from "../components/LoadAudio"
import { AudioList } from "../components/AudioList"
import { useFetch } from "../hooks/useFetch"

const App = () => {

  const { data } = useFetch("/readDirectory")

  console.log(data);

  return (
    <div>
      <h2>Reproductor de MP3</h2>
      <AudioPlayer />
      <AudioList />
    </div>
  )
}
export default App
