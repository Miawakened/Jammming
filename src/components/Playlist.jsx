import Tracklist from './Tracklist'

function Playlist({ name, tracks, onRemove }) {
  return (
    <section>
      <h2>{name}</h2>

      <Tracklist tracks={tracks} onRemove={onRemove} />

      <button>Save To Spotify</button>
    </section>
  )
}

export default Playlist