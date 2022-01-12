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
    const goToPage = (value) => {
        if(value === 1){
            setPageNumber(pageNumber - 2);
        }
        else if(value === 2){
            setPageNumber(pageNumber - 1);
        }
        else if(value === 3){
            setPageNumber(pageNumber);
        }
        else if(value === 4){
            setPageNumber(pageNumber + 1);
        }
        else if(value === 5){
            setPageNumber(pageNumber + 2);
        }
        else if(value === 6){
            setPageNumber(pageNumber + 3);
        }
        else{
            setPageNumber(pageNumber + 4)
        }
    }

    useEffect(() => {
        displayMovie()
    }, [pageNumber])
    
    return (
        <div className='cardContainer'>
            <div className='pageSelector'>
                <button onClick={e => {pageNumber > 2 ? goToPage(1) : goToPage(3)}}> {pageNumber > 2 ? pageNumber-2 : pageNumber} </button>
                <button onClick={e => {pageNumber > 2 ? goToPage(2) : goToPage(4)}}> {pageNumber > 2 ? pageNumber-1 : pageNumber +1} </button>
                <button onClick={e => {pageNumber > 2 ? goToPage(3) : goToPage(5)}}> {pageNumber > 2 ? pageNumber : pageNumber +2} </button>
                <button onClick={e => {pageNumber > 2 ? goToPage(4) : goToPage(6)}}> {pageNumber > 2 ? pageNumber+1 : pageNumber +3} </button>
                <button onClick={e => {pageNumber > 2 ? goToPage(5) : goToPage(7)}}> {pageNumber > 2 ? pageNumber+2 : pageNumber +4} </button>
            </div>
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
