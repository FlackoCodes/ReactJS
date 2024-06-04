import { useState, useEffect } from 'react'
import './App.css'
import searchIcon from './search.svg'
import MovieCard from './MovieCard'
// props -- allows sharing of data amongst components
// they (props) are the only arguments that will be accepted in a component
// addbf819

// useEffect -- used to fetch data from an API endpoint once the component initially renders
// const apiURL = 'http://www.omdbapi.com/?i=tt3896198&apikey=addbf819'

const apiURL = ' http://www.omdbapi.com/?i=tt3896198&apikey=addbf819'

const movie1 = {
  "Title": "The Power of the Dog",
  "Year": "2021",
  "imdbID": "tt10293406",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BZGRhYjE2NWUtN2FkNy00NGI3LTkxYWMtMDk4Yjg5ZjI3MWI2XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_SX300.jpg"
}

const App = () => {

  const [movies, setMovies] = useState([])
  const [searchTerm, setSearchTerm] = useState()

  const searchMovies = async (title) =>{
    const response = await fetch(`${apiURL}&s=${title}`)
    const data = await response.json()
    setMovies(data.Search);
  }

  useEffect(()=>{
    searchMovies('superman'),
    []
  })


  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input 
        type="text" 
        placeholder='search for movies'
        value={searchTerm}
        onChange={(e)=>{
          setSearchTerm(e.target.value )
        }}
        />
        <img src={searchIcon} alt="search-icon" 
        onClick={()=>{
          searchMovies(searchTerm)
        }}
        />
      </div>

      {
        movies?.length > 0 ?(
          <div className="container">
          {movies.map((movie) => 
          <MovieCard movie={movie} />
          )}
      </div>
        ) : (
          <div className="empty">
            <h2>No movies found</h2>
          </div>
        )
      }
    
        
     
    </div>
  )
}

export default App