import React from 'react';

function Navbar() {
    return (
        <div className="navbar">
            <h1>My City Weather</h1>
            
            <div className="navbar__box">

                <a className="navbar__box__link" href="/main">Main</a>
                <a className="navbar__box__link" href="/favorites">Favorites</a>
            </div>
        </div>
    )
}

export default Navbar
