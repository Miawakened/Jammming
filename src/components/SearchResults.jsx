import Track from './Track'

function SearchResults({ tracks }) {
  return (
    <section>
      <h2>Search Results</h2>

      {tracks.map(track => (
        <Track
          key={track.id}
          name={track.name}
          artist={track.artist}
          album={track.album}
        />
      ))}
    </section>
  )
}

export default SearchResults