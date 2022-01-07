import React, {useState, useEffect} from 'react'
import SerieCards from './SerieCards';

export default function Serie() {
    const [series, setSeries] = useState([]);

    const displaySerie = () => {
        fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_TMDBKEY}&language=fr&sort_by=popularity.desc`)
        .then(res => res.json())
        .then(data => {
            if(!data.errors){
                setSeries(data.results);
            }
            else{
                setSeries([]);
            }
        })
    }

    useEffect(() => {
        displaySerie()
    }, [])
    
    return (
        <div className='cardContainer'>
                {series.length > 0 && (
                    <ul>
                        {series.map((serie) => (
                            <li key={serie.id}>
                                <SerieCards serie={serie} />
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        )
}

