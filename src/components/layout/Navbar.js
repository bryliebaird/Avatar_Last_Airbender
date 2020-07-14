import React from 'react';

function Navbar () {
    return (

        <nav className='navbar navbar-expand-lg py-4'>
            <div className='container'>
                    <a className='navbar-brand' href='#'>
                        <img className='icon mr-2' src='water.png' height='60px' width='60px' alt='water-element-sign'></img>

                        <img className='icon mr-2' src='earth.png' height='60px' width='60px' alt='earth-element-sign'></img>

                        <img className='icon mr-2' src='fire.png' height='60px' width='60px' alt='fire-element-sign'></img>

                        <img className='icon' src='air.png' height='60px' width='60px' alt='air-element-sign'></img>
                    </a>

                <button className="navbar-toggler" data-toggler="collapse" ata-target="#avatarApp">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className='collapse navbar-collapse' id='avatarApp'>
                    <ul className='navbar-nav ml-auto'>
                        <li className='nav-item'>
                        <a href='#' className='nav-link text-dark'>About</a>
                        </li>
                        <li className='nav-item'>
                        <a href='#' className='nav-link text-dark'>Characters</a>
                        </li>
                        <li className='nav-item'>
                            <a href='#' className='nav-link text-dark'>Quiz</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;