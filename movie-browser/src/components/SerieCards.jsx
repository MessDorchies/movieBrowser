import React from 'react'

export default function SerieCards({serie}) {
    return (
        <div className='serieCard'>
            <div className='imgContainer'>
                {serie.poster_path ? (
                    <img src={`https://image.tmdb.org/t/p/w200${serie.poster_path}`} alt='' />
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
    )
}
