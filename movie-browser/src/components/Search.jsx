import React, { useState } from 'react'
import MovieCards from './MovieCards';
import SerieCards from './SerieCards';

export default function Search() {

    const [query, setQuery] = useState("");
    const [movieResults, setMovieResults] = useState([]);
    const [serieResults, setSerieResults] = useState([]);
    const searchMovies = (e) => {
        setQuery(e.target.value);
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDBKEY}&language=fr&page=1&include_adult=false&query=${e.target.value}`)
        .then(res => res.json())
        .then(data => {
            if(!data.errors){
                setMovieResults(data.results);
            }
            else{
                setMovieResults([]);
            }
        })
    }
    const searchSeries = (e) => {
        setQuery(e.target.value);
        fetch(`https://api.themoviedb.org/3/search/tv?api_key=${process.env.REACT_APP_TMDBKEY}&language=fr&page=1&include_adult=false&query=${e.target.value}`)
        .then(res => res.json())
        .then(data => {
            if(!data.errors){
                setSerieResults(data.results);
            }
            else{
                setSerieResults([]);
            }
        })
    }

    return (
        <div className='searchContainer'> 
            <div className='inputWrapper'>
                <input type="text" placeholder='search...' value={query} onChange={ (e) => {searchMovies(e); searchSeries(e)}}/>
            </div>
            <div className='cardContainer'>
                {movieResults.length > 0 && (
                    <ul>
                        {movieResults.map((movie) => (
                            <li key={movie.id}>
                                <MovieCards movie={movie} />
                            </li>
                        ))}
                        {serieResults.map((serie) => (
                            <li key={serie.id}>
                                <SerieCards serie={serie} />
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    )
}

