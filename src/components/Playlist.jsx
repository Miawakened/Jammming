import Tracklist from './Tracklist'

function Playlist({ name, tracks }) {
  return (
    <section>
      <h2>{name}</h2>

      <Tracklist tracks={tracks} />

      <button>Save To Spotify</button>
    </section>
  )
}

export default Playlist