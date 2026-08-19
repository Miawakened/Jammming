
import { useState } from 'react'
import SearchBar from './components/SearchBar'
import SearchResults from './components/SearchResults'
import Playlist from './components/Playlist'

function App() {

  const tracks = [
    {
      id: 1,
      name: 'Blinding Lights',
      artist: 'The Weeknd',
      album: 'After Hours'
    },
    {
      id: 2,
      name: 'Do I Wanna Know?',
      artist: 'Arctic Monkeys',
      album: 'AM'
    },
    {
      id: 3,
      name: '505',
      artist: 'Arctic Monkeys',
      album: 'Favourite Worst Nightmare'
    }
  ]

  const [playlistName, setPlaylistName] = useState('My Awesome Playlist')

  const updatePlaylistName = (name) => {
    setPlaylistName(name)
  }

  const [playlistTracks, setPlaylistTracks] = useState([
    { 
      id: 4, 
      name: 'Starboy', 
      artist: 'The Weeknd', 
      album: 'Starboy' 
    },
    { 
      id: 5, 
      name: 'R U Mine?', 
      artist: 'Arctic Monkeys', 
      album: 'AM' 
    }
  ])

  const addTrack = (track) => {
    setPlaylistTracks((prevTracks) => [...prevTracks, track])
  }

  const removeTrack = (track) => {
    setPlaylistTracks((prevTracks) =>
      prevTracks.filter((item) => item.id !== track.id)
    )
  }

  return (
    <>
      <h1>Jammming</h1>

      <SearchBar />

      <SearchResults tracks={tracks} onAdd={addTrack}/>

      <Playlist
        name={playlistName}
        tracks={playlistTracks}
        onRemove={removeTrack}
        onNameChange={updatePlaylistName}
      />
    </>
  )
}

export default App