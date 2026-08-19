

function Track({ id, name, artist, album, onAdd, onRemove }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>{artist} • {album}</p>

      {onAdd && (
      <button onClick={() => onAdd({id, name, artist, album})}> + </button>
      )}

      {onRemove && (
        <button onClick={() => onRemove({id, name, artist, album})}> - </button>
      )}
    </div>
  )
}

export default Track