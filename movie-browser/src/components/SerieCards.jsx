import React from 'react'
import { Link } from 'react-router-dom'

export default function SerieCards({serie}) {

    

    return (
        <Link to={`/Serie/${serie.id}`}>
        <div className='Card'>
            <div className='imgContainer'>
                {serie.poster_path ? (
                    <img src={`https://image.tmdb.org/t/p/w200${serie.poster_path}`} className='cardImg' alt='' />
                ) : (
                    <div className='filler' />
                )
                }
            </div>
            <div className='MovieInfo'>
                <div className='movieTitle'>
                    <h3>
                        {serie.name}
                    </h3>
                </div>
                <div className='releaseDate'>
                    <h4>
                        {serie.release_date}
                    </h4>
                </div>
            </div>
        </div>
        </Link>
    )
}
