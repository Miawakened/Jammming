
function Track({ id, name, artist, album, onAdd }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>{artist} • {album}</p>
      <button onClick={() => onAdd({id, name, artist, album})}> + </button>
    </div>
  )
}

export default Track