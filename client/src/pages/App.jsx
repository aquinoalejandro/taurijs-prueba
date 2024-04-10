import { AudioPlayer } from "../components/AudioPlayer"
import { useFetch } from "../hooks/useFetch"

const App = () => {

  const { data } = useFetch("http://localhost:5000/readDirectory")

  console.log(data);

  return (
    <div>
      <h1>Reproductor de MP3</h1>
      <AudioPlayer />
    </div>
  )
}
export default App
