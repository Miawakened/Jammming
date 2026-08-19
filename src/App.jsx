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

  return (
    <>
      <h1>Jammming</h1>

      <SearchBar />

      <SearchResults tracks={tracks} />

      <Playlist />
    </>
  )
}

export default App