import React, { useEffect, useState } from 'react'
import MovieCards from './MovieCards';
import SerieCards from './SerieCards';

export default function Home() {

    const [moviesSample, setMoviesSample] = useState([]);
    const [seriesSample, setSeriesSample] = useState([]);

    const displaySerieSample = () => {

        fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_TMDBKEY}&language=fr&sort_by=popularity.desc&include_adult=false`)
        .then(res => res.json())
        .then(data => {
            if(!data.errors){
                setSeriesSample(data.results);
            }
            else{
                setSeriesSample([]);
            }
        })
    }

    const displayMovieSample = () => {

        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDBKEY}&language=fr&sort_by=popularity.desc&include_adult=false`)
        .then(res => res.json())
        .then(data => {
            if(!data.errors){
                setMoviesSample(data.results);
            }
            else{
                setMoviesSample([]);
            }
        })
    }
    useEffect(() => {
        displaySerieSample();
        displayMovieSample();
    },[])
     
    return (
        <div className='sampleContainer'>
            <div className='cardContainer'>
                <div className='moviesSample'>
                    <h3>Most popular movies : </h3>
                        {moviesSample.length > 0 && (
                            <ul>
                            <li key={moviesSample[0].id}>
                                <MovieCards movie={moviesSample[0]} />
                            </li>
                            <li key={moviesSample[1].id}>
                                <MovieCards movie={moviesSample[1]} />
                            </li>
                            <li key={moviesSample[2].id}>
                                <MovieCards movie={moviesSample[2]} />
                            </li>
                            <li key={moviesSample[3].id}>
                                <MovieCards movie={moviesSample[3]} />
                            </li>
                            <li key={moviesSample[4].id}>
                                <MovieCards movie={moviesSample[4]} />
                            </li>
                            </ul>
                        )}
                </div>
                <div className='seriesSample'>
                    <h3>Most popular series : </h3>
                    {moviesSample.length > 0 && (
                        <ul>
                            <li key={seriesSample[0].id}>
                                <SerieCards serie={seriesSample[0]} />
                            </li>
                            <li key={seriesSample[1].id}>
                                <SerieCards serie={seriesSample[1]} />
                            </li>
                            <li key={seriesSample[2].id}>
                                <SerieCards serie={seriesSample[2]} />
                            </li>
                            <li key={seriesSample[3].id}>
                                <SerieCards serie={seriesSample[3]} />
                            </li>
                            <li key={seriesSample[4].id}>
                                <SerieCards serie={seriesSample[4]} />
                            </li>
                        </ul>
                    )}
                </div>
            </div>  
        </div>
    )
}

