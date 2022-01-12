import React, {useState, useEffect} from 'react'
import SerieCards from './SerieCards';

export default function Serie() {
    const [series, setSeries] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);

    const displaySerie = () => {
        fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_TMDBKEY}&language=fr&sort_by=popularity.desc&page=${pageNumber}`)
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

    const nextPage = () => {
        setPageNumber(pageNumber + 1);
    }
    const previousPage = () => {
        if(pageNumber >= 1){
            setPageNumber(pageNumber - 1);
        }
    }

    useEffect(() => {
        displaySerie()
    }, [pageNumber])
    
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
                <button className='prev' onClick={previousPage} > - </button> {pageNumber} <button className='next' onClick={nextPage} > + </button>
            </div>
        )
}

