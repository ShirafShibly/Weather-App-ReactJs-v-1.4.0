import React from 'react';
import '../assets/WeatherApp.css';

const Header = () => {
    return (
             <div className="Main-title pb-5">
                 <h1 className="pt-5 pb-lg-5"><img src= "/img/weatherLogo.png" className="img-responsive" width="4%" alt='weatherLogo' /> Weather App</h1>
            </div>
    )
}

export default Header