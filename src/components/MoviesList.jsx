import React from 'react'
import { Link } from "react-router-dom"
function MoviesList({ movies }) {
    const displaymovies = Object.keys(movies).map(movieID => {
        return <li key={movieID}><Link to={`/movies/${movieID}`}>{movies[movieID].title}</Link></li>
    });


    return (
        <div>
            <ul>{displaymovies}</ul>
        </div>
    )
}

export default MoviesList
