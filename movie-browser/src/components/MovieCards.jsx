import React from 'react'

export default function MovieCards({movie}) {
    return (
        <div className='movieCard'>
            <div className='imgContainer'>
                {movie.poster_path ? (
                    <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt='' />
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
    )
}
