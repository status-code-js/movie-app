import React from 'react'
import './App.css'
import SearchIcon from './search.svg'
import { useState, useEffect } from 'react'
import MovieCard from './MovieCard'

const API_URL = 'https://www.omdbapi.com?apikey=3d7fc2aa'

const App = () => {
    
    const [movies, setMovies] = useState([])
    const [search, setSearch] = useState('')

    const searchMovies = async(title) => {
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json()

        setMovies(data.Search)
    }
    useEffect( () => {
        searchMovies('Superman')
    }, [])

    return (
        <div className="app">
            <h1>Movie App</h1>
            <div className="search">
                <input 
                placeholder="Search your movie"
                 value={search}
                 onChange={(e) => setSearch(e.target.value)}
                />
                <img 
                src={SearchIcon}
                alt="search"
                onClick={() => searchMovies(search)}
                />
            </div>

            {
                movies?.length > 0 
                ? (
                 <div className="container">
               {movies.map( (movie) => (
                <MovieCard movie={movie}/>
               ))}
                </div>
                ) : (
                <div className="empty">
                    <h2>No movies found</h2>
                </div>
            )}
        </div>
    )
}


export default App