import React from 'react'
import {Link} from 'react-router-dom';

export default function MovieCards({movie}) {
    return (
        <Link to={`/Movie/${movie.id}`}>
        <div className='Card'>
            <div className='imgContainer'>
                {movie.poster_path ? (
                    <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} className='cardImg' alt='' />
                ) : (
                    <div className='filler' />
                )
                }
            </div>
            <div className='MovieInfo'>
                <div className='movieTitle'>
                    <h3>
                        {movie.title}
                    </h3>
                </div>
                <div className='releaseDate'>
                    <h4>
                        {movie.release_date}
                    </h4>
                </div>
            </div>
        </div>
        </Link>
    )
}
