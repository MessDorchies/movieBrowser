import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function DisplayOneMovie() {
    const {id} = useParams();
    const [serie, setSerie] = useState([]);
    
    const findSerie = () => {
        fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.REACT_APP_TMDBKEY}&language=fr`)
        .then(res => res.json())
        .then(data => {
            if(!data.errors){
                setSerie(data);
            }
            else{
                setSerie([]);
            }
        })
    }

    useEffect(() => {
        findSerie();
    }, [])
    return (
        <div className='displayOne'>
            <h2>{serie.name}</h2>
            <img src={`https://image.tmdb.org/t/p/w500${serie.poster_path}`} alt='' />
            <p>Date de sortie: {serie.release_date}</p>
            <p>Genre : {serie.genres ? serie.genres.map(element => (
                <span className='tags'> {element.name} </span>
            )) : <span>/</span> }</p>
            <p>Nombre de saisons : {serie.seasons ? serie.seasons.length : "/" }</p>
            <p className='overview'>
                {serie.overview}
            </p>
        </div>
    )
}
