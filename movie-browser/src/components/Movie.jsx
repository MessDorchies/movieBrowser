import React, { useState, useEffect } from 'react'
import MovieCards from './MovieCards';

export default function Movie() {

    const [movies, setMovies] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);

    const displayMovie = () => {
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDBKEY}&language=fr&sort_by=popularity.desc&include_adult=false&page=${pageNumber}`)
        .then(res => res.json())
        .then(data => {
            if(!data.errors){
                setMovies(data.results);
                console.log(movies)
            }
            else{
                setMovies([]);
            }
        })
    }

    const nextPage = () => {
        setPageNumber(pageNumber + 1);
    }
    const previousPage = () => {
        if(pageNumber >= 1){
            setPageNumber(pageNumber - 1);
        }
    }

    useEffect(() => {
        displayMovie()
    }, [pageNumber])
    
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
                <button className='prev' onClick={previousPage} > - </button> {pageNumber} <button className='next' onClick={nextPage} > + </button>
        </div>
        )
}
