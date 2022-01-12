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
    const goToPage = (value) => {
        if(value === 1){
            setPageNumber(pageNumber - 2);
        }
        else if(value === 2){
            setPageNumber(pageNumber - 1);
        }
        else if(value === 3){
            setPageNumber(pageNumber);
        }
        else if(value === 4){
            setPageNumber(pageNumber + 1);
        }
        else if(value === 5){
            setPageNumber(pageNumber + 2);
        }
        else if(value === 6){
            setPageNumber(pageNumber + 3);
        }
        else{
            setPageNumber(pageNumber + 4)
        }
    }

    useEffect(() => {
        displaySerie()
    }, [pageNumber])
    
    return (
        <div className='cardContainer'>
            <div className='pageSelector'>
                <button onClick={e => {pageNumber > 2 ? goToPage(1) : goToPage(3)}}> {pageNumber > 2 ? pageNumber-2 : pageNumber} </button>
                <button onClick={e => {pageNumber > 2 ? goToPage(2) : goToPage(4)}}> {pageNumber > 2 ? pageNumber-1 : pageNumber +1} </button>
                <button onClick={e => {pageNumber > 2 ? goToPage(3) : goToPage(5)}}> {pageNumber > 2 ? pageNumber : pageNumber +2} </button>
                <button onClick={e => {pageNumber > 2 ? goToPage(4) : goToPage(6)}}> {pageNumber > 2 ? pageNumber+1 : pageNumber +3} </button>
                <button onClick={e => {pageNumber > 2 ? goToPage(5) : goToPage(7)}}> {pageNumber > 2 ? pageNumber+2 : pageNumber +4} </button>
            </div>
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

