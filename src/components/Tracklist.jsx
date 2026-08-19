import Track from './Track'

function Tracklist({ tracks, onRemove }) {
  return (
    <div>
      {tracks.map(track => (
        <Track
          key={track.id}
          id={track.id}
          name={track.name}
          artist={track.artist}
          album={track.album}
          onRemove={onRemove}
        />
      ))}
    </div>
  )
}

export default Tracklist