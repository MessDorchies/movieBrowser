import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import MovieCards from './MovieCards';

export default function SimilarMovie() {
    const [similarMovies, setSimilarMovies] = useState([]);
    const {id} = useParams();

    const findSimilarMovies = () => {
        fetch(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=${process.env.REACT_APP_TMDBKEY}&language=fr&page=1`)
        .then(res => res.json())
        .then(data => {
                setSimilarMovies(data.results)
        })
    }

    const refresh = () => {
        window.location.reload(false);
    }

    useEffect(() => {
        findSimilarMovies();
    },[])

    return (
        <div>
            <ul>
                {similarMovies.map((movie) => (
                    <li key={movie.id} onClick={refresh}>
                        <MovieCards movie={movie} />
                    </li>
                    ))}
            </ul>
        </div>
    )
}
