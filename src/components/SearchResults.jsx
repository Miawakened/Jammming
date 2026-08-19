import Track from './Track'

function SearchResults({ tracks, onAdd }) {
  return (
    <section>
      <h2>Search Results</h2>

      {tracks.map(track => (
        <Track
          key={track.id}
          id={track.id}
          name={track.name}
          artist={track.artist}
          album={track.album}
          onAdd={onAdd}
        />
      ))}
    </section>
  )
}

export default SearchResults