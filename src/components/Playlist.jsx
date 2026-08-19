
import { useState } from 'react'
import Tracklist from './Tracklist'

function Playlist({ name, tracks, onRemove, onNameChange }) {

  const [isEditing, setIsEditing] = useState(false)
  const [newName, setNewName] = useState(name)

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleSubmit = () => {
    onNameChange(newName)
    setIsEditing(false)
  }


  return (
    <section>

{isEditing ? (
        <div>
          <input
            value={newName}
            onChange={handleNameChange}
          />
          <button onClick={handleSubmit}>Save</button>
        </div>
      ) : (
        <h2 onClick={() => setIsEditing(true)}>{name}</h2>
      )}

      <Tracklist tracks={tracks} onRemove={onRemove} />

      <button>Save To Spotify</button>
    </section>
  )
}

export default Playlist