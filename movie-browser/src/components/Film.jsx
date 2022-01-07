import React, { useState, useEffect } from 'react'
import MovieCards from './MovieCards';

export default function Film() {

    const [movies, setMovies] = useState([]);

    const displayMovie = () => {
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDBKEY}&language=fr&sort_by=popularity.desc&include_adult=false`)
        .then(res => res.json())
        .then(data => {
            if(!data.errors){
                setMovies(data.results);
            }
            else{
                setMovies([]);
            }
        })
    }

    useEffect(() => {
        displayMovie()
    }, [])
    
    return (
        <div className='cardContainer'>
                {movies.length > 0 && (
                    <ul>
                        {movies.map((movie) => (
                            <li key={movie.id}>
                                <MovieCards movie={movie} />
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        )
}
