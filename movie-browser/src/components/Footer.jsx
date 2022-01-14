import React from 'react'
import TMBDLogo from '../components/style/TMBDlogo.svg'


export default function Footer() {
    return (
        <div className='footerContainer'>
            <div className='footerImage'><img src={TMBDLogo} alt='TMBD logo' /></div>
            <p>This product uses the TMDB API but is not endorsed or certified by TMDB.</p>
        </div>
    )
}
