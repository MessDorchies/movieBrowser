import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import SerieCards from './SerieCards';

export default function SimilarSerie() {
    const [similarSeries, setSimilarSeries] = useState([]);
    const {id} = useParams();

    const findSimilarSeries = () => {
        fetch(`https://api.themoviedb.org/3/tv/${id}/similar?api_key=${process.env.REACT_APP_TMDBKEY}&language=fr&page=1`)
        .then(res => res.json())
        .then(data => {
                setSimilarSeries(data.results)
        })
    }

    useEffect(() => {
        findSimilarSeries();
    },[])

    const refresh = () => {
        window.location.reload(false);
    }

    return (
        <div>
            <ul>
                {similarSeries.map((serie) => (
                    <li key={serie.id} onClick={refresh}>
                        <SerieCards serie={serie} />
                    </li>
                    ))}
            </ul>
        </div>
    )
}