import React from 'react';

function Showcase () {
    return(
        
        <div className='container-fluid showcase-container'>
            <div className='container-fluid showcase-overlay'>
                <a className='btn btn-warning showcase-btn' href='#' role='button'>About</a>
                <a className='btn btn-warning showcase-btn' href='#' role='button'>Characters</a>
                <a className='btn btn-warning showcase-btn' href='#' role='button'>Quiz</a>
            </div>
        </div>
    )
}

export default Showcase;