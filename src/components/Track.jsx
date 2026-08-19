
function Track({ name, artist, album }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>{artist} • {album}</p>
    </div>
  )
}

export default Track