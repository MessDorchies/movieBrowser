import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import SimilarMovie from './SimilarMovie';

export default function DisplayOneMovie() {
    const {id} = useParams();
    const [movie, setMovie] = useState([]);
    
    const findMovie = () => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDBKEY}&language=fr`)
        .then(res => res.json())
        .then(data => {
            if(!data.errors){
                setMovie(data);
            }
            else{
                setMovie([]);
            }
        })
    }

    useEffect(() => {
        findMovie();
    }, [])
    
    return (
        <div className='displayOne'>
            <h2>{movie.title}</h2>
            <img src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`} alt='' />
            <p>Date de sortie: {movie.release_date}</p>
            <p>Genre : {movie.genres ? movie.genres.map(element => (
                <span className='tags'> {element.name} </span>
            )) : <span>/</span> }</p>
            <p>Durée : {movie.runtime} min</p>
            <p className='overview'>
                {movie.overview}
            </p>
            <div className='similarContainer'>
                <h3> Film dans le même genre :</h3>
                <div className='cardContainer'><SimilarMovie /></div> 
            </div>
        </div>
    )
}
